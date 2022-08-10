import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { buildQueryString } from '../../../../helpers';
import {
    marketPriceData,
    marketPriceError,
    MarketPriceFetch,
} from '../actions';

import axios from 'axios';

const marketPriceRequestOptions: RequestOptions = {
    apiVersion: 'core',
};

const COMPARE_BASE_API_URL = 'https://min-api.cryptocompare.com/data/price';
const API_KEY = '25fc5392e29e67321a0bfb9ff465ea0671c5c3b741266b0e04dc79264efb9ee3';

export function* marketPriceSaga(action: MarketPriceFetch) {
    

      
    try {
        const price = 22000;
        const ftkPrice = yield axios.get('http://demo.fortem-financial.io/api/v2/fortem/public/markets/btcusd/tickers');

        const payload = action.payload ? `/${buildQueryString(action.payload)}` : '';
        //const price = yield call(API.get(marketPriceRequestOptions), `/public/markets${payload}`);
        yield put(marketPriceData(ftkPrice.data.ticker.last));
       
    } catch (error) {
        console.log("Erro ao buscar preço MarketPriceSaga")
    }
}
