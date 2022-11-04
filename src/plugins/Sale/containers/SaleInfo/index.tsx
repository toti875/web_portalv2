import * as React from 'react';
import { ProgressLinear } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

import Countdown from 'react-countdown';
import './SaleInfo.css';

import { Col, Row, Statistic } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalBuyers, SaleItem, selectTotalBuyers } from '../../../../modules';

//import Stack from '@mui/material/Stack';
//import LinearProgress from '@mui/material/LinearProgress';

import { localeDate } from '../../../../helpers/localeDate';

// Import react-circular-progressbar module and styles
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


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
					00 <span>Min</span>
				</div>
				<div id="seconds">
					00 <span>Seg</span>
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
					{minutes} <span>Min</span>
				</div>
				<div id="seconds">
					{seconds} <span>Seg</span>
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

	let countdownTitle: JSX.Element;

	
	const elapsedTime =  Number(Date.now()) - Number((new Date(props.sale.start_date)).getTime);
	const totalTime =   Number((new Date(props.sale.end_date)).getTime) - Number((new Date(props.sale.start_date)).getTime);
	const percentage = 82; 

	switch (props.sale.type) {
		case 'upcoming':
			countdownTitle = <p style={{color: '#fff', fontSize: '18px'}} >Início da captação: {localeDate(props.sale.start_date, 'fullDate', 'pt-BR')}</p>;
			break;
		case 'ongoing':
			countdownTitle = <p style={{color: '#fff', fontSize: '18px'}} >Fim da captação: <span style={{color: '#009991', fontSize: '18px'}}> {localeDate(props.sale.end_date, 'fullDate', 'pt-BR')}</span></p> 
			break;
		default:
			countdownTitle = <p style={{color: '#fff', fontSize: '18px'}} > Captação concluída em: {localeDate(props.sale.end_date, 'fullDate', 'pt-BR')}</p>;
			break;
	}

	return (
		<div >
			<div className="row">
				<div className="col-16">
					<img className="sale-logo-details col-4" src={props.sale.sale_logo} alt="sale-logo" />
					<span className="sale-info-tick text-center" style={{color: '#fff'}}>Código do Token: </span> <span  style={{color: 'rgb(252,208,0)'}}> {props.sale.currency_id}</span>
					

					
				</div>
			</div>
			<div className="row">
				<div className="col-12" style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
					<p className="title" style={{textDecoration: 'underline', fontSize: '18px', fontWeight: 500, color: '#fff'}}>Descrição do projeto:</p>
					<p className="sale-info-description">{props.sale.description}</p>
					
					
				</div>
				<div className="row">
				<div className="col-16">
					<span className="text-center" style={{color: '#fff', fontSize: '18px'}}>Ciclo atual de captação: </span> <span style={{color: '#009991', fontSize: '18px'}}> {props.sale.id}</span>

				</div>
				</div>
			</div>
		<div className="row">
			<p style={{color: '#009991', fontSize: '18px'}}>{countdownTitle}</p>
		</div>
		<div className="row d-flex justify-content-between">
			<p style={{marginLeft: '50px'}}><Countdown date={countdownTime} renderer={renderer} /></p>
			<div style={{ width: '120px', height: '120px'}} >
			<CircularProgressbar
        		value={percentage}
        		text={`${percentage}%`}
        		background
        		backgroundPadding={6}
        		styles={buildStyles({
          		backgroundColor: "#009991",
          		textColor: "#FFF",
          		pathColor: "#FFF",
          		trailColor: "#acacac"
        		})}
      />
			
			
			</div>
		</div>
			<hr />
			<div className="row text-center">
				<div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<p style={{color: '#fff', fontSize: '18px'}}>Rendimento:</p><span style={{color: '#009991', fontSize: '18px'}}>{props.sale.host_uid}</span>
				</div>
				<div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<p style={{color: '#fff', fontSize: '18px'}}>Preço unitário:</p><span style={{color: '#009991', fontSize: '18px'}}>{`R$ ${props.sale.price} `}</span>
				</div>
				<div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<p style={{color: '#fff', fontSize: '18px'}}>Lote mínimo:</p><span style={{color: '#009991', fontSize: '18px'}}>{`${props.sale.min_buy} ${ 'tokens ' }${props.sale.currency_id.toUpperCase()}`}</span>
				</div>
				<div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<p style={{color: '#fff', fontSize: '18px'}}>Total de tokens emitidos:</p><span style={{color: '#009991', fontSize: '18px'}}>{props.sale.total_ieo}</span><br />
					<p style={{color: '#fff', fontSize: '18px'}}>Total de tokens restantes:</p><span style={{color: '#009991', fontSize: '18px'}}>{props.sale.remains}</span><br/>

				</div>
				<div >
					<ProgressLinear 
						
						height={20} 
						color='#009991'
						value={Math.floor(((props.sale.total_ieo - props.sale.remains) / props.sale.total_ieo) * 100)}
					 />				</div>
				<div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
					<p style={{color: '#fff', fontSize: '18px'}}>Total de compradores:</p><span style={{color: '#009991', fontSize: '18px'}}>{totalBuyersSelector.payload.totalBuyers}</span>
				</div>
			</div>
			<hr />


		</div>
	);
};
