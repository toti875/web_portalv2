import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Action, Middleware } from 'redux';
import configureMockStore from 'redux-mock-store';
import { Cryptobase } from '../api';

// tslint:disable-next-line
import * as WebSocket from 'ws';

const mockConfig: Config = {
	api: {
		authzURL: '/api/v2/auth',
		transactionURL: '/api/v2/trade',
		switchURL: '/api/v2/switch',
		downstreamURL: '/api/v2/downstream',
		ieoURL: '/api/v2/ieo',
		infoURL: '/api/v2/ieo',
		newKycURL: '/api/v2/newKyc',
		statisticUrl: '/api/v2/statistic',
	},
	
	minutesUntilAutoLogout: '30',
	rangerReconnectPeriod: '1',
	withCredentials: false,
	storage: {},
	gaTrackerKey: '',
	incrementalOrderBook: false,
	usernameEnabled: false,
	finex: false,
	isResizable: false,
	isDraggable: false,
	languages: ['en', 'pt'],
	sessionCheckInterval: '15000',
	balancesFetchInterval: '3000',
	passwordEntropyStep: 14,
	showLanding: true,
	msPricesUpdates: '3000',
	sentryEnabled: false,
};

// tslint:disable no-any no-console
export const loggerMiddleware: Middleware = (store: {}) => (next: any) => (action: Action) => {
	console.log(`dispatching: ${JSON.stringify(action)}`);

	return next(action);
};

export const setupMockStore = (appMiddleware: Middleware, log = false) => {
	const middlewares = log ? [loggerMiddleware, appMiddleware] : [appMiddleware];

	return configureMockStore(middlewares);
};

export const setupMockAxios = () => {
	Cryptobase.config = mockConfig;

	return new MockAdapter(Axios);
};

export const mockNetworkError = (mockAxios: any) => {
	mockAxios.onAny().networkError();
};

export const createEchoServer = (port: number, debug: boolean) => {
	const server = new WebSocket.Server({ port: port });
	server.on('connection', (ws, request) => {
		if (debug) {
			ws.addEventListener('open', () => {
				console.log(`Ping Server: listening on port ${port}`);
			});
		}
		ws.on('message', (message: string) => {
			if (debug) {
				console.log(`Ping Server: sending back ${message}`);
			}
			ws.send(message);
		});
	});

	return server;
};
