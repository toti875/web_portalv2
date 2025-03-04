import * as Sentry from '@sentry/browser';
import 'antd/dist/antd.dark.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WrappedComponentProps } from 'react-intl';
import { Provider } from 'react-redux';
//import 'slick-carousel/slick/slick-theme.css';
//import 'slick-carousel/slick/slick.css';
import { sentryEnabled } from './api/config';
import { App } from './App';
//import './index.css';
import './index.css';
import './fortem.css';
import { rootSaga } from './modules';
import { rangerSagas } from './modules/public/ranger';
import { rangerMiddleware, sagaMiddleware, store } from './store';

import './Feather.svg';
import './antd.css';
import './button.css';
import './buttons.pcss';
import './blockchain.css';

import './mobile.pcss';
import './template_react/doob/src/assets/scss/style.scss';


if (!Intl.PluralRules) {
	require('@formatjs/intl-pluralrules/polyfill');
	require('@formatjs/intl-pluralrules/locale-data/en');
	require('@formatjs/intl-pluralrules/locale-data/pt');
}
// @ts-ignore
if (!Intl.RelativeTimeFormat) {
	require('@formatjs/intl-relativetimeformat/polyfill');
	require('@formatjs/intl-relativetimeformat/locale-data/en');
	require('@formatjs/intl-relativetimeformat/locale-data/pt');
}

sagaMiddleware.run(rootSaga);
rangerMiddleware.run(rangerSagas);

export type IntlProps = WrappedComponentProps;

if (sentryEnabled()) {
	const key = process.env.REACT_APP_SENTRY_KEY;
	const organization = process.env.REACT_APP_SENTRY_ORGANIZATION;
	const project = process.env.REACT_APP_SENTRY_PROJECT;

	if (key && key.length && organization && organization.length && project && project.length) {
		Sentry.init({ dsn: `https://${key}@${organization}.ingest.sentry.io/${project}` });
	}
}

const render = () =>
	ReactDOM.render(
		
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root') as HTMLElement,
	);

render();
