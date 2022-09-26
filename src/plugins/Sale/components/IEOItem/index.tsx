import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";


import { Col, Progress, Row, Statistic } from 'antd';
import { ProgressBar } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

//import * as React from 'react'; 
import Countdown from 'react-countdown';
import { useDispatch, useSelector,  } from 'react-redux';
import { useHistory } from 'react-router';
import { currenciesFetch, SaleItem, selectCurrencies } from '../../../../modules';
//import {Modal} from '../../../../components/Modal'
import './IEOItem.css';
import '../../../../template/html/css/style.css';
import Separator from "../../../../template_react/doob/src/elements/separator/Separator";
import ReactCardFlip from "react-card-flip";
//import { BuyersHistory, BuyHistory, SaleBuy, SaleDetail, SaleInfo, SaleSocial } from '../../containers';





const ccVisa = require('../../assets/visa.png');



interface SaleItemProps {
	key: string | number | undefined;
	sale: SaleItem;
	type: 'ongoing' | 'upcoming' | 'ended' | 'active';
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// render a completed state
		// window.location.reload(false);
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
			<div id="sale_item__timer">
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

export const IEOItem: React.FC<SaleItemProps> = (props: SaleItemProps) => {
	const history = useHistory();

	const dispatch = useDispatch();
	const dispatchcFetchCurrencies = React.useCallback(() => dispatch(currenciesFetch()), [dispatch]);

	const [flip, setFlip] = useState(false);


	React.useEffect(() => {
		dispatchcFetchCurrencies();
	}, [dispatchcFetchCurrencies]);
	const currencies = useSelector(selectCurrencies);
	let saleBadgeColor = '#0C9D58ff';
	switch (props.type) {
		case 'ongoing':
			saleBadgeColor = '#0C9D58ff';
			break;
		case 'upcoming':
			saleBadgeColor = '#FABE08ff';
			break;
		case 'ended':
			saleBadgeColor = '#EA4235ff';
			break;
			case 'active':
				saleBadgeColor = '#13b887 ';
				break;			
		default:
			break;
	}


	const [show, setShow] = useState(false);
	

	const countdownTime = props.type === 'upcoming' ? new Date(props.sale.start_date) : new Date(props.sale.end_date);
	let countdownTitle: JSX.Element;

	switch (props.type) {
		case 'upcoming':
			countdownTitle = <span className="text-success">Tempo para abertura da captação:</span>;
			break;
		case 'ongoing':
			countdownTitle = <span className="text-warning">Tempo restante de captação:</span>;
			break;
		default:
			countdownTitle = <span className="text-danger"> Esta captação foi finalizada</span>;
			break;
	}

	const saleType = props.type ? props.type.toUpperCase() : 'Unavailable';

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
	const handleDetailClick = () => {
		const location = {
			//pathname: `/sale/${props.sale.id}`,
			pathname: '/ieo/detail/' + props.sale.id
		};
		history.push(location);
	};
	



	return (
		<div>
			
			<div className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn z-index-1 ml--30 mr--30" >
			<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
				<div>
				<div className="sale-item pricing-table pricing-body text-center justify-content-center  bg-white box-shadow-large border-radius-10px "  >
					<div className="sale-item-badge" style={{ backgroundColor: saleBadgeColor }}>{saleType}
				</div>
	
				<img className="itemLogo-img" src={props.sale.image_link} alt="" />
			
				<img className="itemLogo" src={props.sale.sale_logo} alt="" />TOKEN {props.sale.currency_id}
				<div className="pricing-body tokenCard">
						
					<div className="font-weight-500 text-extra-dark-gray ">
						<ul className="list-style-03">

							<div className="font-weight-500 text-extra-dark-gray " style={{marginTop: '-10px', fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Preço unitário</span><span>R$ {props.sale.price}</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mb--10" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Rendimento ao mês</span><span style={{color: '#13b887'}}>{props.sale.host_uid}</span>
							</div>
							<Separator />
							<div className="font-weight-500 text-extra-dark-gray mt--10" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Investimento mínimo</span><span style={{}}>R$ 100,00</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray " style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Carência</span><span style={{}}>90 dias</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mb--10" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Pagamento de juros</span><span style={{}}>Mensal</span>
							</div>
							<Separator />
							<div className="font-weight-500 text-dark-gray mt--10" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Valor captado</span><span>Total ofertado</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mb--10" style={{ display: 'flex', justifyContent: 'space-between'}}>
								<span>R$ {((props.sale.total_ieo - props.sale.remains) * props.sale.price).toLocaleString('pt-br')}  </span><span style={{}}>R$ {(props.sale.total_ieo * props.sale.price).toLocaleString('pt-br')}</span>
							</div>

							{/*<Progress
								strokeColor={{
								'0%': '#2a9d8f',
								'100%': '#e76f51',
							}}
							status="active"
						
							percent={Math.floor(((props.sale.total_ieo - props.sale.remains) / props.sale.total_ieo) * 100)}
						/>*/}
												<ProgressBar
						animated
						variant="info"
						now={((props.sale.total_ieo - props.sale.remains) / props.sale.total_ieo) * 100}
						
						striped={false}
						
						style={{ height: '18px', fontSize: '16px', fontWeight: 'bold',   }}
					/>
							<div className="pricing-footer margin-5px-top mb--10 mt--15">
								<a className="btn btn-medium  btn-round-edge "  onClick={() => setFlip(!flip)}>Mais informações</a>

								<a className="btn btn-medium  btn-fast-blue modal-popup wow animate__fadeIn" onClick={() => setShow(true)}>ComprarModal</a>
								<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
								<div id="modal-popup" className="col-11 col-xl-3 col-lg-6 col-md-8 col-sm-9 mx-auto bg-white text-center modal-popup-main padding-4-half-rem-all mfp-hide border-radius-6px sm-padding-2-half-rem-lr">
                            <span className="text-extra-dark-gray text-uppercase alt-font text-extra-large font-weight-600 margin-15px-bottom d-block">Simple modal popup</span>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever.</p>
                            <a className="btn btn-fancy btn-small btn-transparent-light-gray popup-modal-dismiss" href="#">Dismiss</a>
                        </div>							</div>
						</ul>
					</div>
				</div>
				</div>
			</div>
			<div>	
				<div>
				<div className="sale-item pricing-table pricing-body text-center justify-content-center  bg-white box-shadow-large border-radius-10px " onClick={() => setFlip(!flip)}>
					<div className="sale-item-badge" style={{ backgroundColor: saleBadgeColor }}>{saleType}
				</div>
	
			
				<img className="itemLogo2" src={props.sale.sale_logo} alt="" />
				<div className="pricing-body tokenCard">
						
					<div className="font-weight-500 text-extra-dark-gray ">
						<ul className="list-style-03">

							<div className="font-weight-500 text-extra-dark-gray mt--90" style={{fontSize: '15px', display: 'flex', }}>
								<span>Descrição</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mb--15" style={{fontSize: '14px', display: 'flex',}}>
								<span>{props.sale.description}</span>
							</div>
							<Separator />
							<div className="font-weight-500 text-extra-dark-gray mt--15" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Valor total captado</span><span style={{color: 'rgb(19, 184, 135)'}}>R$ {(((props.sale.total_ieo - props.sale.remains) * props.sale.price))}</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mt--5" style={{display: 'flex', justifyContent: 'space-between'}}>
								<Countdown date={countdownTime} renderer={renderer} />
							</div>
							<div className="font-weight-500 text-extra-dark-gray mt--5 mb--5" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								{/*<span>Encerramento da captação</span><span style={{}}>{formatDate(props.sale.end_date)}</span>*/}
								<span>Encerramento da captação</span><span style={{}}>01/10/2022</span>
							</div>
							<Separator />
							<div className="font-weight-500 text-extra-dark-gray mt--15" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Formas de pagamento</span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mt--5" style={{fontSize: '14px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Reais (R$)</span><span style={{}}><img style={{ width: '30px', height: '30px', marginLeft: '1rem', }} src="http://pics.fortem.fra1.cdn.digitaloceanspaces.com/BRL%20%281%29.svg"/></span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mt--5" style={{fontSize: '14px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Cripto </span><span style={{fontSize: '13px'}}><img style={{ width: '30px', height: '30px', marginLeft: '1rem', }} src={findIcon('ETH')}
									alt="" /><img style={{ width: '30px', height: '30px', marginLeft: '1rem', marginTop: '5px' }} src={findIcon('BTC')}
									alt="" /><img style={{ width: '30px', height: '30px', marginLeft: '1rem', marginTop: '5px' }} src={findIcon('USDT')}
									alt="" /></span>
							</div>
							<div className="font-weight-500 text-extra-dark-gray mt--5" style={{fontSize: '14px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Cartão de crédito</span><span style={{}}><img style={{ width: '30px', height: '30px', marginLeft: '1rem', }} src={ccVisa} /></span>
							</div>
							
							<div className="font-weight-500 text-extra-dark-gray mb--15" style={{display: 'flex', justifyContent: 'space-between'}}>
								<span>Pagamento de juros</span><span style={{}}>Mensal</span>
							</div>
							<Separator />
							<div className="font-weight-500 text-dark-gray mt--15" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Total de tokens ofertados</span><span style={{}}>{props.sale.total_ieo}</span>
							</div>
							<div className="font-weight-500 text-dark-gray " style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Total de tokens disponíveis</span><span style={{}}>{props.sale.remains}</span>
							</div>
							<div className="font-weight-500 text-dark-gray" style={{fontSize: '15px', display: 'flex', justifyContent: 'space-between'}}>
								<span>Progresso</span>
							</div>
							<Progress
								strokeColor={{
								'0%': '#2a9d8f',
								'100%': '#e76f51',
							}}
							status="active"
						
							percent={Math.floor(((props.sale.total_ieo - props.sale.remains) / props.sale.total_ieo) * 100)}
							/>
							<div className="pricing-footer margin-5px-top mb--10 mt--15">
								<a className="btn btn-medium  btn-round-edge" onClick={() => setFlip(!flip)}>Voltar</a>
								<a className="btn btn-medium  btn-fast-blue modal-popup wow animate__fadeIn" href="#modal-popup">ComprarModal</a>
								<div id="modal-popup" className="col-11 col-xl-3 col-lg-6 col-md-8 col-sm-9 mx-auto bg-white text-center modal-popup-main padding-4-half-rem-all mfp-hide border-radius-6px sm-padding-2-half-rem-lr">
                            <span className="text-extra-dark-gray text-uppercase alt-font text-extra-large font-weight-600 margin-15px-bottom d-block">Simple modal popup</span>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever.</p>
                            <a className="btn btn-fancy btn-small btn-transparent-light-gray popup-modal-dismiss" href="#">Dismiss</a>
                        </div>
							</div>
						</ul>
					</div>
				</div>

				</div>




			
			</div>
			</div>
			</ReactCardFlip>

			</div>
			

			
			

	






		</div>
		
	);
};
