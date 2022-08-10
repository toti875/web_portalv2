import { call, put } from 'redux-saga/effects';
import { alertPush } from '../../..';
import { API, RequestOptions } from '../../../../api';
import { getCsrfToken } from '../../../../helpers';
import {
    createQuickExchangeData,
    createQuickExchangeError,
    CreateQuickExchangeFetch,
} from '../actions';

const config = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'core',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export function* createQuickExchangeOrderSaga(action: CreateQuickExchangeFetch) {
    try {
        yield call(API.post(config(getCsrfToken())), '/qe/orders', action.payload);
        yield put(createQuickExchangeData());
        yield put(alertPush({message: ['success.quick.exchange.order.created'], type: 'success'}));
    } catch (error) {
        yield put(createQuickExchangeError(error));
        yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
    }
}
