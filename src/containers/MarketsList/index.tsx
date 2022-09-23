import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ConvertUsd, Decimal, MarketsHotOnlist, UdonMarketTable, ButtonFIAT, FiatMarketFill } from '../../components';

import Tabs, { TabPane } from 'rc-tabs';

import { useMarketsFetch, useMarketsTickersFetch, useRangerConnectFetch } from '../../hooks';
import { Market, selectMarkets, selectMarketTickers, setCurrentMarket } from '../../modules';

import classNames from 'classnames';
import { useIntl } from 'react-intl';

import Slider from "react-slick";

import news from './images/news.svg';

import { eventFetch, selectEvents, selectUserLoggedIn} from '../../modules';

import { NewMarketSlick } from '../../components';
import Typed from 'react-typed';
import ScrollAnimation from "react-animate-on-scroll";
import {TextDecrypt} from './TextDecrypt.js';

import './MarketsList.pcss';

import { BannerActivation } from "../../template_react/doob/src/utils/script";




const Logo = require('../../assets/images/logo_branca_bandeira_verde.svg');

const Logo_Capital = require ('../../assets/images/svg/branco_capital_bandeira_verde.svg');



const renderMarketSlick = () => <NewMarketSlick />;




const defaultTicker = {
	amount: '0.0',
	last: '0.0',
	high: '0.0',
	open: '0.0',
	low: '0.0',
	price_change_percent: '+0.00%',
	volume: '0.0',
};

export const MarketsList = props => {
	const favoritemMarketsLocal = JSON.parse(localStorage.getItem('favourites_markets') || '[]');
	const [marketIdsLocalState, setMarketIdsLocalState] = React.useState<string[]>(favoritemMarketsLocal);
	const [searchMarketInputState, setSearchMarketInputState] = React.useState('');

	const [marketPair, setMarketPair] = React.useState('');
	const [activeButton, setActiveButton] = React.useState(0);
	const [nameMarketPair, setNameMarketPair] = React.useState('');

	const [activeFiat, setActiveFiat] = React.useState(0);

	useMarketsFetch();
	useMarketsTickersFetch();
	useRangerConnectFetch();
	const history = useHistory();
	const dispatch = useDispatch();
	const markets = useSelector(selectMarkets);
	const marketTickers = useSelector(selectMarketTickers);
	const intl = useIntl();

	const handleRedirectToTrading = (id: string) => {
		const currentMarket: Market | undefined = markets.find(item => item.id === id);
		if (currentMarket) {
			props.handleChangeCurrentMarket && props.handleChangeCurrentMarket(currentMarket);
			dispatch(setCurrentMarket(currentMarket));
			history.push(`/market/${currentMarket.id}`);
		}
	};

	const currentBidUnitMarkets = (props.markets || markets) as typeof markets;


	const translate = (key: string) => intl.formatMessage({ id: key });

	const redirectSingUP = () => {
		history.push('/banner/authentication/sign-up/basic');
	};
	const redirectTrading = () => {
		history.push('/trade');
	};

	const isLogin = useSelector(selectUserLoggedIn);


	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
	};

	
	const settingEvents = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	const events = useSelector(selectEvents);

	const BannerData = [
		{
			image: Logo,
			title: "Conecte-se com ",
			description: "A gente respira o novo",
			image_background: "https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template.png",
		},
		{
			image: Logo,
			title: "Startup Your <br /> Creative Agency.",
			description: "Constrindo a nova geração, <br /> digital experiences, and print materials.",
			image_background: "https://www.neoris.com/documents/20126/173896/neoris-google-alliance.jpg",
		},
	]




	const renderEvent = () => {
		return (
		
			<div className="homepage-event  rn-header header-default" style={{ paddingTop: '60px', margin: '0px auto', display: 'flex', flexDirection: 'row', height: '32px', borderTop: '1px solid black', borderBottom: '1px solid black', minWidth: '100px',  backgroundColor: 'transparent'}}> 
			
				<div  className="news-event  theme-shape-root"  style={{ color: 'pink', borderRight: '1px solid black', borderColor: 'black !important', fontSize: '14px',  borderTop: '1px solid black', backgroundColor: 'transparent', borderBottom: '1px solid black', height: '26px', minWidth: '21px',  }}>
									<img src={news} style={{color: '#fff'}}></img>
									<p >Pulse
									
									</p>
				</div>

				<div className="container2  theme-shape-root"  style={{ color: 'white', alignItems: 'center', margin: '0 auto',  height: '26px', fontSize: '14px', backgroundColor: 'transparent'}}>


					<Slider {...settingEvents}>
						{[...events.payload].map(event => {
							return (
								<div   style={{paddingLeft: '6px'}}>
									<p  style={{paddingLeft: '6px'}} >{event.description}
									
									</p>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		);
	};

	const renderBanner = () => (
		<>
				{/*<Slider className="slider-area slider-style-4 variation-2  rn-slick-dot rn-slick-arrow" {...BannerActivation}>*/}
				<Slider className="slider-area slider-style-4 variation-3 " {...BannerActivation}>
				{BannerData.map((data, index) => (
					<div key={index} className="single-slide">
						<div className="height-950 bg-overlay bg_image" style={{width: '60%', backgroundImage: `url("${data.image_background}")`}}>
							<div className="container position-relative">
								<img src={Logo_Capital} style={{ position: 'absolute', color: 'white', background: 'transparent', width: '560px',  top: '10px', paddingLeft: '-650px'}}  />
								
		
								<div className="row row--30 align-items-center">
									<div className="col-lg-12">
										<div className="inner text-left">
											<h2 className="title" style={{marginLeft: '-280px'}} >
												<span dangerouslySetInnerHTML={{__html: data.title}} />
												<Typed
													strings={[
														" o novo,",
														" o digital,",
														" o crédito,",
														" a rentabilidade,",
														" a segurança,",
														" a Fortem ONE.",
													]}
													typeSpeed={100}
													backSpeed={50}
													backDelay={1900}
													loop
												/>
												</h2>
											<h1 className="description" style={{position: 'absolute',  top: '220px', color: 'white', display: 'flex', fontSize: '38px', width: '680px', paddingLeft: '75px' }} dangerouslySetInnerHTML={{__html: data.description}}></h1>
		
											{isLogin ? (
										<button className="btn-Register btn-none" onClick={redirectTrading}>
											{translate('page.homePage.trade.btn.trade')}
										</button>
									) : (
										<button className="btn-Register btn-active" onClick={redirectSingUP}>
											{translate('page.homePage.trade.btn.signup')}
										</button>
									)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="marketSlick">
					{renderMarketSlick()}
				</div>	
					</div>
		
		
		
		
				))}
			</Slider>
			
			<div className="overflow-hidden" >
				<section className='section pd-top-300px wf-section'>
					<div className='container-default w-container'>
						<div className='mg-bottom-48px'> 
							<div className="inner-container _912px center">
								<div className="text-center">
									<div className="position-relative">
										<div className="position-relative z-index-1">
											<h2 data-w-id="2f13477a-efb0-0f82-999f-982786d80614" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-2">
												Plataforma 
												<span className="color-accent">.<br /></span>
												<span>para todas as suas necessidades</span>
												<span className="color-accent">.</span>
											</h2>
										</div>
										<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}></ScrollAnimation>
										<div className="position-absolute top number-01">
											<div className="text-big-outline" style={{opacity: 1}}>
												<TextDecrypt text={`01`} /></div>
										</div>
										<ScrollAnimation />
									</div>
								</div>
							</div>
						</div>
						<Slider {...settings}>
						
			
						<div key={1} className="single-slide">
						<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
							<div className="w-layout-grid grid-2-columns cta-part-section-grid">
								<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
									<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
										<div className="mg-bottom-16px">
											<div className="title-border-left">
												<h3 className="display-3 mg-bottom-0">
													Invista em
													<span className="color-accent">+300 <br /></span>
													Ativos Digitais 
												</h3>
											</div>
										</div>
										<div className="inner-container _628px">
											<p className="mg-bottom-32px">
												"A Fortem ONE é a única plataforma nacional conectada diretamente às maiores exchanges de cripto ativos do mundo.  "
												<span className="text-no-wrap">dui egestas.</span>
											</p>
											
											<button className='btn-Register' > 
												<span>Abra sua conta</span> 
											</button> 
												
											
										</div>
									</div> 
								</div>
								<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper">
										<img src="https://assets.website-files.com/624f34ee3b91afefdf14076f/625448c88ca8d4a32d63674c_image-stats-blockchain-template.png" loading="eager" alt="Buy 100+ Crypto Assets Fast And Secure - Blockchain X Webflow Template" className="image cover" />
									<div className="position-absolute top-left world-stats-01" style={{willChange: 'opacity, transform', opacity: 0.89327, transform: 'translate3d(0px, 0px, 0px) scale3d(0.997865, 0.997865, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
										<div className="world-stats-wrapper">
											<div className="display-4 display-shadow">
												1M
												<span className="color-accent">+</span>
											</div>
											<h3 className="display-4 mg-bottom-0">Usuários ativos</h3>
										</div> 
									</div>
		
									<div className="position-absolute bottom-left world-stats-02" style={{willChange: 'opacity, transform', opacity: 0.9401, transform: 'translate3d(0px, 0px, 0px) scale3d(0.998802, 0.998802, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
										<div className="world-stats-wrapper">
											<div className="display-4 display-shadow">
												80
												<span className="color-accent">%</span>
											</div>
											<h3 className="display-4 mg-bottom-0">de spread</h3>
										</div> 
									</div>
		
									<div className="position-absolute top-right world-stats-03" style={{willChange: 'opacity, transform', opacity: 0.9401, transform: 'translate3d(0px, 0px, 0px) scale3d(0.998802, 0.998802, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
										<div className="world-stats-wrapper">
											<div className="display-4 display-shadow">
												80
												<span className="color-accent">%</span>
											</div>
											<h3 className="display-4 mg-bottom-0">de spread</h3>
										</div> 
									</div>
		
									<div className="position-absolute bottom-right world-stats-04" style={{willChange: 'opacity, transform', opacity: 0.62273, transform: 'translate3d(0px, 0px, 0px) scale3d(0.992455, 0.992455, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
										<div className="world-stats-wrapper">
											<div className="display-4 display-shadow">
												80
												<span className="color-accent">%</span>
											</div>
											<h3 className="display-4 mg-bottom-0">de spread</h3>
										</div> 
									</div>
		
		
									<div className="position-absolute bg-circle cta-part-section"></div>
		
								</div>
							</div>
						</div>
						</div>
		
		<div key={2} className="single-slide">
		
		<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
		<div>
		
			<div className="w-layout-grid grid-2-columns cta-part-section-grid">
				<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
					<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
						<div className="mg-bottom-16px">
							<div className="title-border-left">
								<h3 className="display-3 mg-bottom-0">
									Invista em
									<span className="color-accent">+300 <br /></span>
									Ativos Criptos 
								</h3>
							</div>
						</div>
						<div className="inner-container _628px">
							<p className="mg-bottom-32px">
								"Compre, venda ou converta criptoativos com os melhores preços, em poucos cliques. Aproveite a diversidade de criptoativos em uma interface intuitiva e completa para todos os perfis."
								<span className="text-no-wrap">dui egestas.</span>
							</p>
							
							<button className='btn-Register' > 
								<span>Abra sua conta</span> 
							</button> 
								
							
						</div>
					</div> 
				</div>
				<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper"  style={{backgroundColor: 'transparent', height: '100%', backgroundImage: `url("https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-800.png")`}}>
				
		
				<div className='container-default w-container' >
					<div className='position-relative' >
						<div className='w-layout-grid grid-2-columns text-left-large'>
							<div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1' >
								< div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1'>
								</div>
							</div>
							<div id="w-node-_9f488382-c649-058f-76bd-e6c17d1dd59e-2e306f0f" data-w-id="9f488382-c649-058f-76bd-e6c17d1dd59e" style={{opacity: 1, willChange: 'transform', transform: 'translate3d(0px, 4.01px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d',}}>
				
		
							</div>
		
						</div>
					</div>
				</div>
				</div>
				<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg" loading="eager" alt='position-absolute full section-bg' className='position-absolute full section-bg'/> 
				
		
					<div className='position-absolute bottom fade' />
		
				</div>
			</div>
		</div>
		</div>
		
						
						</Slider>
					
					<div className="w-layout-grid grid-3-columns gap-48px _1-col-tablet gap-row-100px">
						<div id="w-node-_2f13477a-efb0-0f82-999f-982786d80619-2e306f0f" className="border-bottom">
							<div className="mg-bottom-50px">
								<div className="inner-container _82px">
									<div className="image-wrapper">
										<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c64a9306f78_icon-1-features-section-blockchain-template.svg" loading="eager" alt="Secure & Encrypted Crypto Wallet - Blockchain X Webflow Template" className="image cover"></img>
								</div>
							</div>
						</div>
						<h3 className="display-4">
							"Secure & encrypted crypto wallet"
							<span className="color-accent">.</span>
						</h3>
						<p className="mg-bottom-0">
							"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
							<span className="text-no-wrap">in gravida .</span>
						</p>
					</div>
					<div id="w-node-_0cbf1d8f-f8bb-0b9d-a837-f1a2579de295-2e306f0f" className="border-bottom">
						<div className="mg-bottom-50px">
							<div className="inner-container _82px">
								<div className="image-wrapper">
									<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c0b8f306f76_icon-2-features-section-blockchain-template.svg" loading="eager" alt="Send & Receive Crypto Tokens - Blockchain X Webflow Template" className="image cover" /> 
								</div>
							</div>
						</div>
						<h3 className="display-4">
							"Send & receive crypto tokens easily"
							<span className="color-accent"></span>
						</h3>
						<p className="mg-bottom-0">
							"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
							<span className="text-no-wrap">in gravida .</span>
						</p>
					</div>
					<div id="w-node-_88ce9b50-bb11-0f4f-93a1-6542e5992bbc-2e306f0f" className="border-bottom">
						<div className="mg-bottom-50px">
							<div className="inner-container _82px">
								<div image-wrapper>
									<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c9c88306f77_icon-3-features-section-blockchain-template.svg" loading="eager" alt="Watch And Analyze Charts In Real-time - Blockchain X Webflow Template" className="image cover"></img>
								</div>
							</div>
						</div>
						<h3 className="display-4">
							"Watch and analyze  charts in real-time"
							<span className="color-accent">.</span>
						</h3>
						<p className="mg-bottom-0">
							"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
							<span className="text-no-wrap">in gravida .</span>
						</p>
					</div>
					</div>
					</div>
		
					
				</section>
		
		
		
			</div>
		
		
		
		
		
				<div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url("https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg")`}}>
				<section className='section pd-top-390 wf-section section-2143' > 
				<div className='container-default w-container' >
					<div className='position-relative' >
						<div className='w-layout-grid grid-2-columns text-left-large'>
							<div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1' >
								< div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1'>
								</div>
							</div>
							<div id="w-node-_9f488382-c649-058f-76bd-e6c17d1dd59e-2e306f0f" data-w-id="9f488382-c649-058f-76bd-e6c17d1dd59e" style={{opacity: 1, willChange: 'transform', transform: 'translate3d(0px, 4.01px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d',}}>
								<img src='https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template.png' loading="eager" sizes='(maxWidth: 479px) 100vw, (maxWidth: 767px) 432px, (maxWidth: 991px) 73vw, (maxWidth: 1439px) 74vw, 1010.234375px' srcSet="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-500.png 500w, https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-800.png 800w, https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template.png 1520w" alt="A Crypto Wallet From The Future - Blockchain X Webflow Template" className='image' />
		
							</div>
		
						</div>
					</div>
				</div>
				<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg" loading="eager" alt='position-absolute full section-bg' className='position-absolute full section-bg'/> 
				
		
					<div className='position-absolute bottom fade' />
		
			</section>
			</div>
		
			</>
		
		
			);
		


	const clickFavoritesMarket = (id: string) => {
		const local = localStorage.getItem('favourites_markets') || '[]';
		const favouritesMarkets = JSON.parse(local);

		const foundFavoriteMarketIndex = favouritesMarkets.findIndex(
			(marketId: string) => marketId.toLowerCase() === id.toLowerCase(),
		);
		if (foundFavoriteMarketIndex >= 0) {
			favouritesMarkets.splice(foundFavoriteMarketIndex, 1);
			localStorage.setItem('favourites_markets', JSON.stringify(favouritesMarkets));
		} else {
			favouritesMarkets.push(id);
			localStorage.setItem('favourites_markets', JSON.stringify(favouritesMarkets));
		}

		const newLocal = localStorage.getItem('favourites_markets') || '[]';
		setMarketIdsLocalState(JSON.parse(newLocal));
	};

	const formattedMarkets = currentBidUnitMarkets.length
		? currentBidUnitMarkets

				.filter(market => market.base_unit.toLowerCase().includes(searchMarketInputState.toLowerCase()))
				.filter(market => market.quote_unit.includes(marketPair))
				.map(market => {
					return {
						...market,
						last: Decimal.format(Number((marketTickers[market.id] || defaultTicker).last), market.price_precision),
						open: Decimal.format(Number((marketTickers[market.id] || defaultTicker).open), market.price_precision),
						price_change_percent: String((marketTickers[market.id] || defaultTicker).price_change_percent),
						high: Decimal.format(Number((marketTickers[market.id] || defaultTicker).high), market.price_precision),
						low: Decimal.format(Number((marketTickers[market.id] || defaultTicker).low), market.price_precision),
						volume: Decimal.format(
							Number((marketTickers[market.id] || defaultTicker).volume),
							market.amount_precision,
						),
					};
				})
				.map(market => ({
					...market,
					change: Decimal.format((+market.last - +market.open).toFixed(market.price_precision), market.price_precision),
				}))

				.map(market => {
					const marketChangeColor = +(market.change || 0) < 0 ? '#E01E5A' : '#2FB67E';
					const marketName = market.name.split('/');
					const svgClass = classNames(marketIdsLocalState.includes(market.id) ? 'active_id' : '');
					return {
						...market,
						pair: (
							<div className="d-flex flex-row align-items-center">
								<svg
									onClick={() => clickFavoritesMarket(market.id)}
									width="20"
									height="20"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className={svgClass}
										d="M10 14.3917L15.15 17.5L13.7834 11.6417L18.3334 7.69999L12.3417 7.19166L10 1.66666L7.65835 7.19166L1.66669 7.69999L6.21669 11.6417L4.85002 17.5L10 14.3917Z"
										fill="#848E9C"
									/>
								</svg>

								<span style={{ color: '#fff', marginLeft: 8 }}>{marketName[0]}</span>
								<span style={{ color: '#737f92' }}>/</span>
								<span style={{ color: '#737f92' }}>{marketName[1]}</span>
							</div>
						),
						last: (
							<span style={{ color: marketChangeColor }}>
								{market.last}
								<p className="m-0" style={{ color: 'rgb(115 127 146)' }}>
									$ <ConvertUsd value={+market.last} symbol={marketName[1]} />
								</p>
							</span>
						),
						open: <span style={{ color: marketChangeColor }}>{market.open}</span>,
						change: <span style={{ color: marketChangeColor }}>{market.change}</span>,
						volume: <span style={{ color: marketChangeColor }}>{market.volume}</span>,
						price_change_percent: <span style={{ color: marketChangeColor }}>{market.price_change_percent}</span>,
						trade: (
							<button onClick={() => handleRedirectToTrading(market.id)} className="cx-market__btn-trading">
								{intl.formatMessage({ id: 'page.marketsLists.table.body.trade' })}
							</button>
						),
					};
				})
		: [];
	const FavoriteMarkets = formattedMarkets.filter((e: any) => marketIdsLocalState.includes(e.id));

	const handldeSearchInputChange = (e: any) => {
		setSearchMarketInputState(e.target.value);
	};

	const renderFIATMarketElement = (): void | any => {
		if (nameMarketPair === 'FIAT') {
			const marketFIATs = [
				{
					name: 'BUSD',
					fill: 'busd',
				},
				{
					name: 'USDC',
					fill: 'usdc',
				},
				{
					name: 'TUSD',
					fill: 'tusd',
				},
			];

			return (
				<div className="row">
					<div className="col-md-12 d-flex align-items: baseline">
						{marketFIATs.map((marketFiat, index) => {
							return (
								<FiatMarketFill
									id={index}
									value={marketFiat.fill}
									marketFiat={marketFiat.name}
									setActiveFiat={setActiveFiat}
									setMarketPair={setMarketPair}
									active={activeFiat === index ? true : false}
								/>
							);
						})}
					</div>
				</div>
			);
		}
	};
	const renderALTSmarkets = () => {
		const marketFIATs = [
			{
				name: intl.formatMessage({ id: 'page.marketsLists.markets.all' }),
				fill: '',
			},
			{
				name: 'USDT',
				fill: 'usdt',
			},
			{
				name: 'BTC',
				fill: 'btc',
			},
			{
				name: 'ETH',
				fill: 'eth',
			},
			{
				name: 'BNB',
				fill: 'bnb',
			},
			{
				name: 'FIAT',
				fill: 'busd',
			},
		];

		return (
			<div className="row">
				<div className="col-md-12 pt-3">
					{marketFIATs.map((marketFiat, index) => {
						return (
							<ButtonFIAT
								id={index}
								value={marketFiat.fill}
								marketFiat={marketFiat.name}
								setActiveButton={setActiveButton}
								setMarketPair={setMarketPair}
								setNameMarketPair={setNameMarketPair}
								active={activeButton === index ? true : false}
							/>
						);
					})}
				</div>
			</div>
		);
	};
	const MarketsTabs = () => {
		return (
			<div className="cx-market-item">
				<Tabs defaultActiveKey="Spot Markets">
					<div className="market__pair">
						<div className="row d-flex align-item-center">
							<div className="col-md-9 ">{renderALTSmarkets()}</div>
							<div className="col-md-3">
								<div className="search-coin">
									<div className="search-coin__icon">
										<img alt="search" src={require('./icon/search.svg')} />
									</div>
									<input
										className="search-coin__input"
										type="text"
										placeholder={intl.formatMessage({ id: 'page.marketsLists.input.search.placeholder' })}
										onChange={handldeSearchInputChange}
									/>
								</div>
							</div>
						</div>
						<div className="market__pair__fiat">{renderFIATMarketElement()}</div>
					</div>
					<TabPane tab={intl.formatMessage({ id: 'page.marketsLists.tab.favorites' })} key="Favorites">
						<UdonMarketTable columns={columns} data={FavoriteMarkets} />
					</TabPane>
					<TabPane tab={intl.formatMessage({ id: 'page.marketsLists.tab.spotMarkets' })} key="Spot Markets">
						<UdonMarketTable columns={columns} data={formattedMarkets} />
					</TabPane>
				</Tabs>
			</div>
		);
	};

	const MarketsHotOnList = () => {
		return (
			<React.Fragment>
				<MarketsHotOnlist />
			</React.Fragment>
		);
	};

	const columns = React.useMemo(() => {
		return [
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.pair' }),
				accessor: 'pair',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.last' }),
				accessor: 'last',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.change' }),
				accessor: 'price_change_percent',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.high' }),
				accessor: 'high',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.low' }),
				accessor: 'low',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.volume' }),
				accessor: 'volume',
			},
			{
				Header: intl.formatMessage({ id: 'page.marketsLists.table.header.trade' }),
				accessor: 'trade',
			},
		];
	}, []);

	return (
		<>
		{/*}
			<div className="marketSlick">
                {renderMarketSlick()}
			</div>							        			
	*/}
		
		{renderEvent()}	

	
		{renderBanner()}
		<div id="marketList">
			<div>{MarketsHotOnList()}</div>
			<div>{MarketsTabs()}</div>
		</div>
		</>
	);
};

export const MarketsTableScreen = React.memo(MarketsList);
