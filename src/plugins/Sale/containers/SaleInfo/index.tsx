import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Countdown from 'react-countdown';
import './SaleInfo.css';

import { Col, Row, Statistic } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalBuyers, SaleItem, selectTotalBuyers } from '../../../../modules';

interface SaleInfoProps {
	ieoID: string;
	sale: SaleItem;
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// render a completed state
		return (
			<div id="sale_item__timer">
				<div id="days">
					00 <span>Dias</span>
				</div>
				<div id="hours">
					00 <span>Horas</span>
				</div>
				<div id="minutes">
					00 <span>Minutos</span>
				</div>
				<div id="seconds">
					00 <span>Segundos</span>
				</div>
			</div>
		);
	} else {
		// render a countdown
		return (
			<div id="timer">
				<div id="days">
					{days} <span>Dias</span>
				</div>
				<div id="hours">
					{hours} <span>Horas</span>
				</div>
				<div id="minutes">
					{minutes} <span>Minutos</span>
				</div>
				<div id="seconds">
					{seconds} <span>Segundos</span>
				</div>
			</div>
		);
	}
};

export const SaleInfo: React.FC<SaleInfoProps> = (props: SaleInfoProps) => {
	const countdownTime = props.sale.type === 'upcoming' ? new Date(props.sale.start_date) : new Date(props.sale.end_date);

	const dispatch = useDispatch();
	const dispatchGetTotalBuyers = React.useCallback(
		ieoID =>
			dispatch(
				getTotalBuyers({
					ieo_id: ieoID,
				}),
			),
		[dispatch],
	);

	const totalBuyersSelector = useSelector(selectTotalBuyers);

	React.useEffect(() => {
		dispatchGetTotalBuyers(props.ieoID);
	}, [dispatchGetTotalBuyers, props.ieoID]);

	return (
		<div id="sale-info" style={{ backgroundColor: '#0b1426', padding: '3vw', height: '100%' }}>
			<div className="row">
				<div className="col-4">
					<img className="sale-logo" src={props.sale.sale_logo} alt="sale-logo" />
				</div>
			</div>
			<div className="row">
				<div className="col-4" style={{ display: 'flex', flexDirection: 'column' }}>
					<h4 className="sale-info__title">{props.sale.description}</h4>
					<h4 className="sale-info__title2">Código do Token: {props.sale.currency_id}</h4>
					<h4 className="sale-info__title3">Ciclo de captação: {props.sale.id}</h4>

				</div>
			</div>
		{/*	<div className="row d-flex justify-content-center">
				<Countdown date={countdownTime} renderer={renderer} />
	</div> */}
			<hr />
			<div className="row text-center">
				<div className="col-12">
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Statistic valueStyle={{ color: '#FDA736', fontSize: '18px' }} title="Preço inicial" value={`R$${props.sale.price} `} />
						</Col>
						<Col span={8}>
							<Statistic
								valueStyle={{ color: '#FDA736', fontSize: '18px' }}
								title="Quantidade mínima"
								value={`${props.sale.min_buy} ${ 'tokens ' }${props.sale.currency_id.toUpperCase()}`}
							/>
						</Col>
						<Col span={8}>
							<Statistic
								valueStyle={{ color: '#FDA736', fontSize: '18px' }}
								title="Formas de pagamento" 
								value={`${props.sale.currency_available.map(currency => currency.toUpperCase()).join(',',)} ${ '' }`} />

						</Col>
					</Row>
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 text-center">
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Statistic valueStyle={{ color: '#13b887', fontSize: '18px'  }} title={'Total de tokens emitidos'} value={props.sale.total_ieo} />{' '}
						</Col>
						<Col span={8}>
							<Statistic valueStyle={{ color: '#13b887', fontSize: '18px'  }} title={'Total de tokens restantes'} value={props.sale.remains} />
						</Col>
						<Col span={8}>
							<Statistic
								valueStyle={{ color: '#13b887', fontSize: '18px' }}
								title="Total de compradores"
								value={totalBuyersSelector.payload.totalBuyers}
							/>
						</Col>

					</Row>
			</div> </div>
					<hr />
			<div className="row">
				<div className="col-12 text-center">
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Statistic valueStyle={{ color: '#13b887', fontSize: '18px'  }} title={'Bônus para holders Fortem'} value={props.sale.bonus} />{' '}
						</Col>
						<Col span={8}>
							<Statistic valueStyle={{ color: '#13b887', fontSize: '18px'  }} title={'Data de encerramento da captação'} value={props.sale.end_date} />
						</Col>
						<Col span={8}>
							<Statistic
								valueStyle={{ color: '#13b887', fontSize: '18px' }}
								title="Distribuição e Custódia:"
								value={props.sale.host_uid}
							/>
						</Col>
					</Row>					
					<hr />
					<ProgressBar
						animated
						variant="info"
						now={((props.sale.total_ieo - props.sale.remains) / props.sale.total_ieo) * 100}
						label=""
						style={{ height: '40px', fontSize: '1rem', fontWeight: 'bold' }}
					/>
				</div>
			</div>
		</div>
	);
};
