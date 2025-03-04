import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Decimal, TickerTable } from '../../components';
import { useMarketsFetch, useMarketsTickersFetch, useRangerConnectFetch } from '../../hooks';
import { Market, selectMarkets, selectMarketTickers, setCurrentMarket } from '../../modules';

const defaultTicker = {
	amount: '0.0',
	last: '0.0',
	high: '0.0',
	open: '0.0',
	low: '0.0',
	price_change_percent: '+0.00%',
	volume: '0.0',
};

const MarketsTableComponent = props => {
	useMarketsFetch();
	useMarketsTickersFetch();
	useRangerConnectFetch();
	const history = useHistory();
	const dispatch = useDispatch();
	const markets = useSelector(selectMarkets);
	const marketTickers = useSelector(selectMarketTickers);
	const [currentBidUnit, setCurrentBidUnit] = React.useState('');

	const handleRedirectToTrading = (id: string) => {
		const currentMarket: Market | undefined = markets.find(item => item.id === id);

		if (currentMarket) {
			props.handleChangeCurrentMarket && props.handleChangeCurrentMarket(currentMarket);
			dispatch(setCurrentMarket(currentMarket));
			history.push(`https://exchange.fortem1.com.br/market/${currentMarket.id}`);
		}
	};

	const formatFilteredMarkets = (list: string[], market: Market) => {
		if (!list.includes(market.quote_unit)) {
			list.push(market.quote_unit);
		}

		return list;
	};

	let currentBidUnitsList: string[] = [''];

	if (markets.length > 0) {
		currentBidUnitsList = markets.reduce(formatFilteredMarkets, currentBidUnitsList);
	}

	let currentBidUnitMarkets = props.markets || markets;

	if (currentBidUnit) {
		currentBidUnitMarkets = currentBidUnitMarkets.length
			? currentBidUnitMarkets.filter(market => market.quote_unit === currentBidUnit)
			: [];
	}

	const formattedMarkets = currentBidUnitMarkets.length
		? currentBidUnitMarkets
				.map(market => ({
					...market,
					last: Decimal.format(Number((marketTickers[market.id] || defaultTicker).last), 6),
					open: Decimal.format(Number((marketTickers[market.id] || defaultTicker).open), 6),
					price_change_percent: String((marketTickers[market.id] || defaultTicker).price_change_percent),
					high: Decimal.format(Number((marketTickers[market.id] || defaultTicker).high), 6),
					low: Decimal.format(Number((marketTickers[market.id] || defaultTicker).low), 6),
					volume: Decimal.format(Number((marketTickers[market.id] || defaultTicker).volume), market.amount_precision),
				}))
				.map(market => ({
					...market,
					change: Decimal.format((+market.last - +market.open).toFixed(market.price_precision), market.price_precision),
				}))
		: [];

	return (
		<TickerTable
			currentBidUnit={currentBidUnit}
			currentBidUnitsList={currentBidUnitsList}
			markets={formattedMarkets}
			redirectToTrading={handleRedirectToTrading}
			setCurrentBidUnit={setCurrentBidUnit}
		/>
	);
};

export const MarketsTable = React.memo(MarketsTableComponent);
