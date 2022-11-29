import { call, put } from 'redux-saga/effects';
//import { sendError } from '../../../';
import { API, RequestOptions } from '../../../../api';
import { buildQueryString } from '../../../../helpers';
import {
    marketPriceData,
    marketPriceError,
    MarketPriceFetch,
} from '../actions';

const marketPriceRequestOptions: RequestOptions = {
    apiVersion: 'ieo',
};

export function* marketPriceSaga(action: MarketPriceFetch) {
    try {
        const payload = action.payload ? `?${buildQueryString(action.payload)}` : '';
        const price = yield call(API.get(marketPriceRequestOptions), `/public/markets/ftkusd/tickers`);
        console.log(price.ticker.last);
        yield put(marketPriceData({ 'price': price.ticker.last, 'created_at': '', 'updated_at': ''}));
        
    } catch (error) {
        console.log(error);  
        };
    
}
