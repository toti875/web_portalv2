import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../../modules/public/alert';
import {
    abilitiesData,
    abilitiesError,
    AbilitiesFetch,
} from '../actions';

import * as actions from '../actions';

const applogicRequestOptions: RequestOptions = {
    apiVersion: 'core',
};

const payload = [{
    read: [ 'Order', 'Trade', 'Member', 'Account', 'PaymentAddress' ],
    update: [ 'Order' ],
}];


export function* abilitiesSaga(action: AbilitiesFetch) {
   
        //const applogicAbilities = yield call(API.get(applogicRequestOptions), '/abilities');
        yield put(abilitiesData(payload));
}
