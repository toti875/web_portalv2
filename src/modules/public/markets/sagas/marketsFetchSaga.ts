import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { getOrderAPI } from '../../../../helpers';
import {
    marketsData,
    marketsError,
    MarketsFetch,
    setCurrentMarketIfUnset,
} from '../actions';

const marketsRequestOptions: RequestOptions = {
    apiVersion: 'core',
};

const tickersOptions: RequestOptions = {
    apiVersion: 'core',
};


export function* marketsFetchSaga(action: MarketsFetch) {
    try {
        const payload = action.payload;
        //const request = payload && payload.type ? `/public/markets?type=${payload.type}` : '/public/markets';
        const request =  '/public/markets';

        const markets = yield call(API.get(payload ? tickersOptions : marketsRequestOptions), request);
        yield put(marketsData(markets));
        yield put(setCurrentMarketIfUnset(markets[0]));
    } catch (error) {
        console.log("Erro ao buscar preço MarketsFetchSaga")
    }
}
