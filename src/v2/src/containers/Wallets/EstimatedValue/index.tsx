import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { IntlProps } from '../../../';
import { formatWithSeparators, WalletItem } from '../../../components';
import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from '../../../constants';
import { Charts } from '../../../containers';
import { estimateUnitValue, estimateValue } from '../../../helpers/estimateValue';
import {
    currenciesFetch,
    Currency,
    marketsFetch,
    marketsTickersFetch,
    RootState,
    selectCurrencies,
    selectMarkets,
    selectMarketTickers,
    selectUserLoggedIn,
    Wallet,
    
} from '../../../modules';
import { Market, Ticker } from '../../../modules/public/markets';


import PieChart from '../../../../../ui_vision/components/Charts/PieChart';
import LineChart from '../../../../../ui_vision/components/Charts/LineChart'

import { eventFetch, selectEvents,} from '../../../../../modules';

import news from '../../../../../screens/FortemIOHomePage/images/news.svg';

import mainBanner from './main_banner.jpg';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';

import Slider from 'react-slick';


interface EstimatedValueProps {
    wallets: Wallet[];
}

interface ReduxProps {
    currencies: Currency[];
    markets: Market[];
    tickers: {
        [key: string]: Ticker,
    };
    userLoggedIn: boolean;
}

interface DispatchProps {
    fetchCurrencies: typeof currenciesFetch;
    fetchMarkets: typeof marketsFetch;
    fetchTickers: typeof marketsTickersFetch;
}

type Props = DispatchProps & ReduxProps & EstimatedValueProps & IntlProps;

class EstimatedValueContainer extends React.Component<Props> {
    public componentDidMount(): void {
        const {
            currencies,
            fetchCurrencies,
            fetchMarkets,
            fetchTickers,
            markets,
            tickers,
        } = this.props;

        if (!markets.length) {
            fetchMarkets();
        }

        if (!tickers.length) {
            fetchTickers();
        }

        if (!currencies.length) {
            fetchCurrencies();
        }
    }

    public componentWillReceiveProps(next: Props) {
        const {
            currencies,
            fetchCurrencies,
            fetchMarkets,
            fetchTickers,
            markets,
            tickers,
        } = this.props;

        if (!markets.length && next.markets.length) {
            fetchMarkets();
        }

        if (!tickers.length && next.tickers.length) {
            fetchTickers();
        }

        if (!currencies.length && next.currencies.length) {
            fetchCurrencies();
        }
    }

    public render(): React.ReactNode {
        const {
            currencies,
            markets,
            tickers,
            wallets,
        } = this.props;

        let formattedWallet = wallets.map((wallet: Wallet) => ({
            ...wallet,
            name: wallet.currency.toUpperCase(),
            value: Number(wallet.balance),
            
        }));

        var sortedWallet = formattedWallet.sort((a,b) => 

            b.value - a.value

        );
        const pieChartOptionsCharts = {
            style: {background: 'rgba(255,255,255,0.2)', filter: 'blur(1px)'},
            labels: [sortedWallet[0].name, sortedWallet[1].name, sortedWallet[2].name],
            colors: ["#009991", "#c0c0c0",  "#1EDED0"],
            chart: {
              width: "100px",
              stroke: {
                show: false,
              },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                },
              },
            },
            legend: {
              show: true,
            },
            stroke: {
              show: true,
            },
            dataLabels: {
              enabled: true,
            },
            hover: { mode: null },
            plotOptions: {
              donut: {
                expandOnClick: true,
                donut: {
                  labels: {
                    show: true,
                  },
                },
              },
            },
            fill: {
              colors:  ["#009991", "#c0c0c0",  "#1EDED0"],
            },
            tooltip: {
              enabled: true,
              theme: "dark",
            },
          };


          const lineChartDataCharts = [
            {
              name: "HashDEX",
              /*data: [6.98, 0.89, 6.06, -10.10, 3.22, -11.5, 4.69, 2.70],*/
              data: [6.98, 0.89, 6.06, -10.10, 3.22, -11.5, 4.69, 2.70]
            },
            {
              name: "Sua carteira FORTEM",
              /*data: [2.61, 1.89, 6.37, 0.76, 4.14, 2.72, 3.85, 2.83],*/
              data: [3.89, 3.02, 8.41, 0.9, 4.92, -2.11, 5.36, 4.34],
            },
          ];

          const lineChartOptionsCharts = {
            chart: {
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              theme: "dark",
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
            },
            xaxis: {
              type: "datetime",
              categories: [
                "Jan/22",
                "Fev/22",
                "Mar/22",
                "Abr/22",
                "Mai/22",
                "Jun/22",
                "Jul/22",
                "Ago/22"
           
              ],
              labels: {
                style: {
                  colors: "#c0c0c0",
                  fontSize: "12px",
                },
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#c0c0c0",
                  fontSize: "12px",
                },
              },
            },
            legend: {
              show: true,
            },
            grid: {
              strokeDashArray: 5,
              borderColor: "#18988F",
              yaxis: {
                lines: {
                  show: true,
                },
              },
              xaxis: {
                lines: {
                  show: true,
                },
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 1,
                
                inverseColors: false,
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [],
              },
              colors: ["#fff", "#1EDED0"],
            },
            colors: ["#fff", "#1EDED0"],
          };
          
        const estimatedValue = estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, wallets, markets, tickers);


        return (
            <div className="pg-estimated-value-wallet bg_image w-container" >
                <img src={mainBanner} style={{filter: 'blur(3px)', backgroundSize: 'cover', opacity: '0.2', width: '100%', height: '400px'}}/>
                <div className="pg-estimated-value__container position-absolute" >
                    <span className="value-container">
                        <span style={{color: '#F5F5F5'}}>{this.translate('page.body.wallets.estimated_value')} </span>
                        <span className="value"> {formatWithSeparators(estimatedValue, '.')} </span>
                        <span className="value-sign">{VALUATION_PRIMARY_CURRENCY.toUpperCase()}</span>
                    </span>
                    {/*{VALUATION_SECONDARY_CURRENCY && this.renderSecondaryCurrencyValuation(estimatedValue)}*/}
               
                {/*{[sortedWallet[0].value, sortedWallet[1].value]}*/}
                <span className="position-absolute pg-estimated-value__container-charts" style={{ marginTop: '80px', marginLeft: '-320px'}} >
                <span style={{color: '#F5F5F5', marginTop: '20px'}} > Composição da carteira </span>
            
                <PieChart
                    chartData={[sortedWallet[0].value, sortedWallet[1].value]}
                    chartOptions={pieChartOptionsCharts}
                />
            
                </span>

                <span className="position-absolute pg-estimated-value__container-charts" style={{marginTop: '80px', marginLeft: '30px'}} >
                <span style={{color: '#F5F5F5', }}> Evolução patrimonial </span>
                <LineChart
                    chartData={lineChartDataCharts}
                    chartOptions={lineChartOptionsCharts}
                />
                
                </span>

                



            </div>
   

            </div>
            
        );
    }

    public translate = (key: string) => this.props.intl.formatMessage({id: key});


	private renderEvent = () => {
        const events = useSelector(selectEvents);

        const settingEvents = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

		return (
		
			<div className="homepage-event  rn-header header-default " style={{background: '#000',  margin: '0px auto', marginLeft: '5px', display: 'flex', flexDirection: 'row', height: '36px', borderTop: '2px solid #46473E', borderBottom: '2px solid #46473E', minWidth: '100px', }}> 
			
				<div  className="news-event "  style={{margin: '0 auto', maxWidth: '80px', background: '#000', alignItems: 'center',  color: '#1EDED0', borderRight: '1px solid gray', fontSize: '16px',  maxHeight: '32px' }}>
				<Pulse forever={true}>	<img src={news} style={{ marginTop: '-5px', minWidth: '30px', }}></img></Pulse>
									
				</div>

				<div className="container2  theme-shape-root"  style={{  background: '#000', color: '#1EDED0', alignItems: 'center',   marginLeft: '10px', height: '26px', backgroundColor: '#000'}}>


					<Slider {...settingEvents}>
						{[...events.payload].map(event => {
							return (
								<div className="news-event text-center justify-content-center" style={{display: 'flex', textAlign: 'center'}}>
									<h3  style={{opacity: '1', fontSize: '16px', color: '#F5F5F5', letterSpacing: '3px', marginTop: '-14px', background: '#000',  fontFamily: 'Raleway Dots'}} >
									<Zoom infinite={true} appear={true} delay={4000}> 
										<a style={{fontFamily: 'Raleway Dots', }} href={event.ref_link}>{event.event_name}{event.description}</a>
									</Zoom>
									</h3>
								
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		);
	};


    private renderSecondaryCurrencyValuation = (estimatedValue: string) => {
        const {
            currencies,
            markets,
            tickers,
        } = this.props;
        const estimatedValueSecondary = estimateUnitValue(VALUATION_SECONDARY_CURRENCY, VALUATION_PRIMARY_CURRENCY, +estimatedValue, currencies, markets, tickers);

        return (
            <span className="value-container">
                <span className="value">
                    {formatWithSeparators(estimatedValueSecondary, ',')}
                </span>
                <span className="value-sign">{VALUATION_SECONDARY_CURRENCY.toUpperCase()}</span>
            </span>
        );
    };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    currencies: selectCurrencies(state),
    markets: selectMarkets(state),
    tickers: selectMarketTickers(state),
    userLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    fetchCurrencies: () => dispatch(currenciesFetch()),
    fetchMarkets: () => dispatch(marketsFetch()),
    fetchTickers: () => dispatch(marketsTickersFetch()),
});

// tslint:disable-next-line:no-any
export const EstimatedValue = injectIntl(connect(mapStateToProps, mapDispatchToProps)(EstimatedValueContainer)) as any;
