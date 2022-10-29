import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { IntlProps } from '../../../';
import { formatWithSeparators, WalletItem } from '../../../components';
import { VALUATION_PRIMARY_CURRENCY, VALUATION_SECONDARY_CURRENCY } from '../../../constants';
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


import PieChart from '../../../../../ui_vision/components/Charts/PieChart'


//import './EstimatedValue.pcss';

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
            labels: [sortedWallet[0].name, sortedWallet[1].name, sortedWallet[2].name],
            colors: ["#009991", "#18988F",  "#1EDED0"],
            chart: {
              width: "100%",
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
              show: false,
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
              colors: ["#009991", "#18988F",  "#1EDED0"],
            },
            tooltip: {
              enabled: true,
              theme: "dark",
            },
          };
        const estimatedValue = estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, wallets, markets, tickers);


        return (
            <div className="pg-estimated-value-wallet">
                <div className="pg-estimated-value__container">
                    {this.translate('page.body.wallets.estimated_value')}
                    <span className="value-container">
                        <span className="value">
                            {formatWithSeparators(estimatedValue, ',')}
                        </span>
                        <span className="value-sign">{VALUATION_PRIMARY_CURRENCY.toUpperCase()}</span>
                    </span>
                    {VALUATION_SECONDARY_CURRENCY && this.renderSecondaryCurrencyValuation(estimatedValue)}
                </div>
              {[sortedWallet[0].value, sortedWallet[1].value]}
                <PieChart
              
              chartData={[sortedWallet[0].value, sortedWallet[1].value]}
              
              chartOptions={pieChartOptionsCharts}
            />
            </div>
        );
    }

    public translate = (key: string) => this.props.intl.formatMessage({id: key});

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
