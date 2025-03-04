import playSvg from 'assets/images/trading/play.svg';
import { ConvertUsd } from 'components';
import { Decimal } from 'components/Decimal';
import get from 'lodash/get';
import { selectCurrentMarket, selectMarketTickers } from 'modules';
import * as React from 'react';
import isEqual from 'react-fast-compare';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const HeaderToolbarStyle = styled.div`
	display: flex;
	justify-content: space-between;
	height: 50px;
	padding: 15px 15px;
	background-color: transparent;
	font-size: 14px;

	.td-header__toolbar {

		&--left {
			display: flex;
			height: 100%;
			
		}
		&--right {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			.link-tutorial {
				color: #848e9c;
				margin-left: 12px;
			}
		}
		&-item,
		&-item--hightlight {
			font-size: 14px;
			display: flex;
			flex-flow: column;
			justify-content: space-between;

			p {
				padding: 0;
				margin: 0;
			}

			&:not(:first-child) {
				margin-left: 15px;
			}

			&:last-child {
				margin-right: 5px;
			}

			&-title {
				font-weight: 600;
				font-size: 14px;
				color: #F5F5F5;
				
			}

			&-text {
				color: #C0C0C0;
				font-weight: 600;
				font-size: 14px;
			}

			&-value {
				font-size: 14px;

				&-positive {
					color: #00CC99;
					font-weight: 600;
				}

				&-negative {
					color: #ED0A3F;
					font-weight: 600;
				}

				&-data {
					color: #C0C0C0;
					font-weight: 600;
				}
			}
		}
		&-item--hightlight {
			p:first-child {
				font-size: 14px;
				font-weight: 600;
			}
		}
	}
`;

const HeaderToolbarContainer: React.FC = () => {
	const intl = useIntl();

	const getTickerValue = (value: string) => {
		return currentMarket && (marketTickers[currentMarket.id] || defaultTicker)[value];
	};

	const translate = (id: string) => {
		return id ? intl.formatMessage({ id }) : '';
	};

	const currentMarket = useSelector(selectCurrentMarket, isEqual);
	const marketTickers = useSelector(selectMarketTickers, isEqual);

	const defaultTicker = { amount: 0, low: 0, last: 0, high: 0, volume: 0, price_change_percent: '+0.00%' };

	const isPositive = currentMarket && /\+/.test(getTickerValue('price_change_percent'));
	const cls = isPositive ? 'positive' : 'negative';

	const bidUnit = currentMarket && currentMarket.quote_unit.toUpperCase();
	const askUnit = currentMarket && currentMarket.base_unit.toUpperCase();
	const amountPrecision = (currentMarket && currentMarket.amount_precision) || 6;
	const pricePrecision = (currentMarket && currentMarket.price_precision) || 2;

	return (
		<HeaderToolbarStyle>
			<div className="td-header__toolbar--left">
				<div className="td-header__toolbar-item">
					<p className="td-header__toolbar-item-title">{(currentMarket && currentMarket.name) || 'NONE'}</p>
					<p className={`td-header__toolbar-item-value`}>{askUnit}</p>
				</div>
				<div className="td-header__toolbar-item td-header__toolbar-item--hightlight">
					<p className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}>
						{Decimal.formatRemoveZero(Number(getTickerValue('last')), pricePrecision)}
					</p>
					<p className={`td-header__toolbar-item-value`}>
						$ <ConvertUsd value={Number(getTickerValue('last'))} symbol={get(currentMarket, 'quote_unit', '')} />
					</p>
				</div>
				<div className="td-header__toolbar-item">
					<p className="td-header__toolbar-item-text">{translate('page.body.trade.toolBar.change')}</p>
					<p className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}>
						{getTickerValue('price_change_percent')}
					</p>
				</div>
				<div className="td-header__toolbar-item">
					<p className="td-header__toolbar-item-text">{translate('page.body.trade.toolBar.lowest')}</p>
					<p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
						{Decimal.formatRemoveZero(Number(getTickerValue('low')), pricePrecision)}
					</p>
				</div>
				<div className="td-header__toolbar-item">
					<p className="td-header__toolbar-item-text">{translate('page.body.trade.toolBar.highest')}</p>
					<p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
						{Decimal.formatRemoveZero(Number(getTickerValue('high')), pricePrecision)}
					</p>
				</div>

				<div className="td-header__toolbar-item">
					<p className="td-header__toolbar-item-text">
						{translate('page.body.trade.toolBar.volume')}
					</p>
					<p className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}>
						{Decimal.formatRemoveZero(Number(getTickerValue('volume')), 2, '.')} {bidUnit}
						
					</p>
				</div>
			</div>
			<div className="td-header__toolbar--right">
			{/*	<img src={playSvg} />
				<a className="link-tutorial" href="/">
					Tutorial
				</a>
			*/}
			</div>
		</HeaderToolbarStyle>
	);
};

export const HeaderToolbar = HeaderToolbarContainer;
