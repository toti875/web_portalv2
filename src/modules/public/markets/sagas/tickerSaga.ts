import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { marketsTickersData, marketsTickersError } from '../actions';

const tickersOptions: RequestOptions = {
    apiVersion: 'core',
};

export function* tickersSaga() {
    try {
        const tickers = yield call(API.get(tickersOptions), `/public/markets/tickers`);

        if (tickers) {
            const pairs = Object.keys(tickers);

            const convertedTickers = pairs.reduce((result, pair) => {
                result[pair] = tickers[pair].ticker;

                return result;
            }, {});
            yield put(marketsTickersData(convertedTickers));
        }
    } catch (error) {
        console.log("Erro ao buscar preço TickerSaga")
    }
}
