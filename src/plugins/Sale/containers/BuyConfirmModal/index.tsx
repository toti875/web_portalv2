import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Modal, Row, Statistic } from 'antd';

import NP from 'number-precision';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrencies } from '../../../../modules';
import { Decimal } from '../../../../components';

//import 'antd/dist/antd.dark.min.css';


interface BuyConfirmModalProps {
	visible: boolean;
	onHiddenModal: () => void;
	onBuy: () => void;
	quantity: number;
	ieoID: string;
	baseBalance: number;
	baseCurrency: string;
	quoteBalance: number;
	quoteCurrency: string;
	quoteTotal: number;
	bonus: number;
}

export const BuyConfirmModal: React.FC<BuyConfirmModalProps> = (props: BuyConfirmModalProps) => {
	const currencies = useSelector(selectCurrencies);
	const { quantity, quoteBalance, quoteCurrency, baseBalance, baseCurrency, quoteTotal, bonus } = props;
	const findIcon = (code: string): string => {
		const currency = currencies.find(currencyParam => currencyParam.id === code);
		try {
			return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${code.toLowerCase()}.png`);
		} catch (err) {
			if (currency) {
				return currency.icon_url;
			}

			return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
		}
	};

	//const bonusQuantity = NP.times(quantity, bonus);
	const bonusQuantity = 1;
	//const totalQuanity = NP.plus(baseBalance, quantity, bonusQuantity);
	const totalQuanity = baseBalance + quantity;

	const baseTitle = (
		<>
			<img style={{ width: '30px', height: '30px' }} src={findIcon(baseCurrency)} alt="" />
			<span style={{ fontSize: '15px', marginLeft: '5px' }}>{baseCurrency}</span>
		</>
	);
	const quoteTitle = (
		<>
			<img style={{ width: '30px', height: '30px' }} src={findIcon(quoteCurrency)} alt="" />
			<span style={{ fontSize: '15px', marginLeft: '5px' }}>{quoteCurrency}</span>
		</>
	);

	return (
		<Modal
			title="Confirme sua compra"
			centered
			visible={props.visible}
			onOk={() => props.onBuy()}
			onCancel={() => props.onHiddenModal()}
		>
			<Row gutter={16}>
				<Col span={12}>
					<Card>
						<div>			
							<img style={{ width: '30px', height: '30px' }} src={findIcon(baseCurrency)} alt="" />
							<span style={{ fontSize: '15px', marginLeft: '5px' }}>Você está comprando {Decimal.format((totalQuanity), 2, '.', ',')} tokens {baseCurrency} </span>
						</div>
						{/*<Statistic
							title={baseTitle}
							value={totalQuanity}
							precision={2}
							valueStyle={{ color: '#00CC99' }}
							prefix={<ArrowUpOutlined />}
						/>*/}
					</Card>
				</Col>
				<Col span={12}>
					<Card>
					<div>			
						<img style={{ width: '30px', height: '30px' }} src={findIcon(baseCurrency)} alt="" />
						<span style={{ fontSize: '15px', marginLeft: '5px' }}>Seu novo saldo em {quoteCurrency} será de {Decimal.format((NP.minus(quoteBalance, Number(quoteTotal))), 4, '.', ',')}</span>
					</div>

						{/*<Statistic
							title={quoteTitle}
							value={NP.minus(quoteBalance, Number(quoteTotal))}
							precision={4}
							valueStyle={{ color: '#e9c46a' }}
							prefix={<ArrowDownOutlined />}
					/>*/}
					</Card>
				</Col>
			</Row>
			{/*<br />
			{bonus > 0 ? (
				<Alert
					message={`🥳 You will receive ${bonus * 100}% bonus of ${quantity} ${baseCurrency.toUpperCase()}
             (+${bonusQuantity} ${baseCurrency.toUpperCase()}) = ${NP.plus(
						quantity,
						bonusQuantity,
					)} ${baseCurrency.toUpperCase()}`}
					type="info"
				/>
			) : (
				''
			)}*/}
		</Modal>
	);
};
