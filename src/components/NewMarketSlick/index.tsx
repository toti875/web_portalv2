import * as React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Decimal } from '../../components';
import Slider from 'react-slick';
import { currenciesFetch, selectMarkets, selectMarketTickers, Market, setCurrentMarket } from '../../modules';
import Down from './icon/down2.svg';
import Up from './icon/up2.svg';

import ContentLoader from "react-content-loader";
import Ticker from 'react-ticker';
import { CryptoIcon } from '../CryptoIcon';



const ChartWrap = styled.div`



	

	.market-slick {



		div{
			.slick-slider {
				.slick-list {
					font-family: "Verdana", sans-serif;
					font-weight: bold;
					border-top: 1px solid rgb(66, 66, 66);
					border-bottom: 1px solid rgb(66, 66, 66);
					background: transparent;
					max-height: 62px !important;


					.slick-track {
						font-family: "Verdana", sans-serif;
						font-weight: bold;
						margin-left: 250px;
						max-height: 62px !important;

						.slick-slide, .slick-active{
							font-family: "Verdana", sans-serif;
							font-weight: bold;
							width: 250px !important;
							border-right: '1px solid rgb(66, 66, 66)'

							
						}
					}
				} 
			}
		}
	}
`;
const MarketChartItem = styled.div`

	
	width: 190px;


	:hover {
		cursor: pointer;
	}
`;

//const BASE_MARKET_URL = 'https://www.yellow.com/api/v2/peatio/public/markets';
const BASE_MARKET_URL = 'https://www.fortem.website/api/v2/fortem/public/markets';

export const NewMarketSlick: React.FC<any> = () => {
	const defaultTicker = {
		amount: '0.0',
		last: '0.0',
		high: '0.0',
		open: '0.0',
		low: '0.0',
		price_change_percent: '+0.00%',
		volume: '0.0',
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 10000,
		slidesToShow: 7,
		slidesToScroll: 0.8,
		autoplay: true,
		autoplaySpeed: 1000,
		pauseOnHover: true,
		adaptiveHeight: false,
		arrows: false,
		//lazyLoad: ondemand, 

	};

	const dispatch = useDispatch();
	const [marketNames, setMarketNames] = React.useState<string[]>([]);
	const [kLinesState, setKlinesState] = React.useState<{ pv: string }[]>([]);

	const markets = useSelector(selectMarkets);
	const marketTickers = useSelector(selectMarketTickers);

	const MyLoader = (props) => (
		<ContentLoader 
		  speed={2}
		  width={400}
		  height={460}
		  viewBox="0 0 400 460"
		  backgroundColor="#f3f3f3"
		  foregroundColor="#ecebeb"
		  {...props}
		>
		  <circle cx="31" cy="31" r="15" /> 
		  <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
		  <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
		  <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
		</ContentLoader>
	  )

	React.useEffect(() => {
		dispatch(currenciesFetch());
	}, [dispatch]);

	React.useEffect(() => {
		if (markets.length) {
			const marketListToState = markets.map(market => {
				let price_change_percent = (marketTickers[market.id] || defaultTicker).price_change_percent;
				let result = 0;
				if (price_change_percent[0] === '+') {
					result = +price_change_percent.split('+').join('').split('%').join('');
				} else {
					result = -price_change_percent.split('-').join('').split('%').join('');
				}
				return {
					id: market.id,
					name: market.name.toLowerCase(),
					price_change_percent: result,
				};
			});
			const isEmpty = marketListToState.reduce((prev, current) => {
				if (current.price_change_percent !== 0) {
					prev = false;
				}
				return prev;
			}, true);
			if (marketTickers && !marketNames.length && !isEmpty) {
				marketListToState.sort((a, b) => {
					return b.price_change_percent - a.price_change_percent;
				});

				const marketNames = marketListToState.slice(0, 50).map(market => {
					return market.name;
				});
				setMarketNames(marketNames);
			}
		}
	}, [marketTickers, markets, dispatch, defaultTicker, marketNames.length]);

	const fetchMarketsKlines = async (marketId: string, from: number, to: number) => {
		try {
			const klines = await axios.get(
				`${BASE_MARKET_URL}/${marketId.split('/').join('')}/k-line?period=30&time_from=${from}&time_to=${to}`,
			);
			return klines.data.map((kline, index) => {
				return { pv: kline[3] };
			});
		} catch (error) {
			return [];
		}
	};
	React.useEffect(() => {
		if (marketNames) {
			const from = Math.floor(Date.now() / 1000) - 60 * 1 * 60 * 1000;
			const to = Math.floor(Date.now() / 1000);
			const drawMarketLines = async () => {
				try {
					for (let i = 0; i < marketNames.length; i++) {
						const klines = await fetchMarketsKlines(marketNames[i], from, to);
						setKlinesState(prev => [...prev, klines]);
					}
				} catch (error) { console.log("erro ao desenhar grafico do market")}
				return;
			};
			drawMarketLines();
		}
	}, [marketNames]);

	const history = useHistory();
	const handleRedirectToTrading = (id: string) => {
		const currentMarket: Market | undefined = markets.find(item => item.id === id);

		if (currentMarket) {
			dispatch(setCurrentMarket(currentMarket));
			history.push(`/market/${currentMarket.id}`);
		}
	};

	const MarketChart = (data: any, marketID: string) => {
		const market = markets.find(
			market =>
				market.quote_unit.toLowerCase() === marketID.split('/')[1].toLowerCase() &&
				market.base_unit.toLowerCase() === marketID.split('/')[0].toLowerCase(),
		);

		if (market) {
			const marketID = market.name.toUpperCase();
			const last = Decimal.format(Number((marketTickers[market.id] || defaultTicker).last), market.price_precision);
			const open = Number((marketTickers[market.id] || defaultTicker).open);
			const price_change_percent = (marketTickers[market.id] || defaultTicker).price_change_percent;
			const change = +last - +open;
			const marketChangeColor = +(change || 0) < 0 ? '#ED0A3F' : '#00CC99';
			const price_change_percent_change = +(change || 0) < 0 ? Down : Up;
			const baseCurrency = marketID.split('/')[0];
			const findIcon = (code: string): string => {
				const market = markets.find((currency: any) => String(currency.id).toLowerCase() === code.toLowerCase());
				try {
					return require(`../../../node_modules/cryptocurrency-icons/32/icon/${baseCurrency.toLowerCase()}.png`);
				} catch (err) {
		
					return require('../../../node_modules/cryptocurrency-icons/svg/icon/generic.svg');
				}
			};
			return ( 
				<MarketChartItem>
					<div className="container-ticker" onClick={() => handleRedirectToTrading(market.id)}>
						<div className="tickerIcon">
							<img style={{ borderRadius: '50%' }} width="38px" height="38px" src={findIcon(baseCurrency)} />
						</div>
						<div className="tickerInfo" style={{borderRight: '1px solid rgb(66, 66, 66)', marginRight: '-15px', marginTop: '4px', paddingRight: '6px'}}>
							<div style={{display: 'flex', flexDirection: 'row',  justifyContent: 'space-between',alignContent: 'space-between', fontSize: '16px', color: "whiteSmoke",}}>

								<span>{market.base_unit.toUpperCase()}</span>
								<span>{last}</span>
								
							</div>
							<div style={{display: 'flex', flexDirection: 'row',  justifyContent: 'space-between',alignContent: 'space-between', fontSize: '16px', marginTop: '-4px'}}>
								<span style={{ fontSize: '16px', fontWeight: 'bold', color:  marketChangeColor }}>{price_change_percent}</span>
								<img src={price_change_percent_change} alt="price_change_percent_change"/>


							</div>
						</div>
					</div>

				</MarketChartItem>
			);
		}
		return '';
	};

	return (
		<ChartWrap>

				<div className='slide-track market-slick ' style={{ paddingTop: '-80px', width: '240px', height: '62px',  border: '1px solid rgb(66, 66, 66)', borderRight: 'none',  zIndex: 9999, }}>  {MarketChart(kLinesState[1], "BTC/USDT")}</div>
				<div className="market-slick " style={{ borderRadius: '1rem', marginLeft: '246px', marginTop: '-62px' }}>
				
					<div>
					
					<Slider {...settings}>
				
					
						{kLinesState.map((kline, i) => (
							<div key={i}>{MarketChart(kline, marketNames[i])}</div>
						))}
					</Slider>
					</div>
				
					
				
			</div>

		</ChartWrap>
	);


};
