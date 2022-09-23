import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { currenciesFetch, selectCurrencies } from '../../../../modules';
import Countdown from 'react-countdown';

import NP from 'number-precision';
import millify from 'millify';
interface IEOItemProps {
	id: String;
	type: 'ended' | 'ongoing' | 'upcoming';
	currencyId: string;
	startDate: string;
	endDate: string;
	description?: string;
	currencyAvailable: Array<string>;
	bonus?: string;
	remains: number;
	total: number;
	progress: number;
}
export const IEOItemComponent: React.FC<IEOItemProps> = props => {
	const dispatch = useDispatch();
	const dispatchFetchCurrencies = () => dispatch(currenciesFetch());
	const history = useHistory();
	const [progressState, setProgressState] = React.useState<number>(0);
	const [totalState, setTotalState] = React.useState<number>(0);
	const [remainsState, setRemainsState] = React.useState<number>(0);

	React.useEffect(() => {
		const newProgress = Math.round(NP.minus(100, Number(props.progress)) * 100) / 100;
		setProgressState(newProgress);
		setTotalState(props.total);
		setRemainsState(props.remains);
	}, [props.progress, props.total, props.remains]);

	const status = (color: string, type: string) => {
		return (
			<div className="ieo-item-coin-time" style={{ backgroundColor: `${color}` }}>
				<p style={{ textTransform: 'uppercase', fontSize: '14px', lineHeight: '16px', margin: 0 }}>{type}</p>
			</div>
		);
	};
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		return (
			<div className="d-flex justify-content-center" id="countdown-renderer">
				<div className="time">
					<p className="w-100">
						{days}
						<br />
						days
					</p>
				</div>
				<div className="time">
					<p>
						{hours}
						<br /> hours
					</p>
				</div>
				<div className="time">
					<p>
						{minutes} <br /> minutes
					</p>
				</div>
				<div className="time">
					<p>
						{seconds} <br /> seconds
					</p>
				</div>
			</div>
		);
	};
	const renderStatus = (type: 'ended' | 'ongoing' | 'upcoming') => {
		switch (type) {
			case 'ongoing':
				return status(`#2FB67E`, 'Running');
			case 'upcoming':
				return status(` #E06211`, `Upcoming`);
			case 'ended':
				return status(`#BD3421`, 'Ended');
			default:
				return `#ffff`;
		}
	};
	const rendererCountDown = (type: 'ended' | 'ongoing' | 'upcoming') => {
		if (type !== 'upcoming') return <Countdown date={props.endDate} renderer={renderer} />;
		return <Countdown date={props.startDate} renderer={renderer} />;
	};
	const currencies = useSelector(selectCurrencies);
	React.useEffect(() => {
		dispatchFetchCurrencies();
	}, []);
	const getCryptoIcon = (currencyID: string): string => {
		const currency = currencies.find((cur: any) => cur.id === currencyID.toLowerCase());
		try {
			return require(`../../../../../node_modules/cryptocurrency-icons/128/color/${currencyID.toLowerCase()}.png`);
		} catch (err) {
			if (currency) {
				return currency.icon_url;
			}
			return require('../../../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
		}
	};
	return (
		
		
		
		
		<div
			id="ieo-item"
			onClick={() => {
				const location = {
					pathname: `/ieo/detail/${props.id}`,
				};
				history.push(location);
			}}>
			<div className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn z-index-1">
			
			<div className="pricing-table pricing-popular bg-white box-shadow-large border-radius-6px">
			
				<div className="pricing-header bg-extra-dark-gray padding-20px-tb">
					<div className="alt-font font-weight-500 text-small text-white text-uppercase letter-spacing-minus-1-half">Standard plan</div>
				</div>
			
				<div className="pricing-body padding-60px-tb">
					<i className="line-icon-Business-ManWoman icon-medium text-fast-blue margin-20px-bottom"></i>
					<h4 className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$19.99</h4>
					<ul className="list-style-03">
						<li className="border-color-medium-gray"><span className="text-extra-dark-gray font-weight-500">10</span> Domains</li>
						<li className="border-color-medium-gray"><span className="text-extra-dark-gray font-weight-500">2 GB</span> File upload</li>
						<li className="border-color-medium-gray"><span className="text-extra-dark-gray font-weight-500">40 GB</span> Secure storage</li>
						<li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
					</ul>
				</div>
				
				<div className="pricing-footer margin-5px-top margin-55px-bottom">
					<a className="btn btn-medium btn-dark-gray btn-round-edge" href="pricing-packages.html">Register now</a>
				</div>
			
			</div>
			
		</div>
		
			<div className="ioe-item-header">
				{renderStatus(props.type)}
				<div className="ieo-item-coin-img">
					<img
						src={getCryptoIcon(props.currencyId.toUpperCase())}
						alt={`${props.currencyId}-icon`}
						style={{ width: '57.87px', height: '57.87px' }}
					/>
				</div>
			</div>

			<div className="ieo-item-content">
				<h3>{props.description}</h3>
				{rendererCountDown(props.type)}

				<div
					className="ieo-item-coin-remains col-12 d-flex flex-wrap justify-content-center text-center
            "
				>
					<div className="w-100" style={{ position: 'relative', margin: '5px' }}>
						<div
							className="progress"
							style={{
								width: '100%',
								background: 'rgba(132, 142, 156, 0.35)',
								height: '32px',
								borderRadius: '3px',
							}}
						>
							<div
								className="progress-bar progress-bar-striped progress-bar-animated"
								role="progressbar"
								aria-valuenow={remainsState}
								aria-valuemin={0}
								aria-valuemax={totalState}
								style={{ width: `${progressState}%`, backgroundColor: '#2FB67E' }}
							/>
							<div
								className="text-white d-flex justify-content-around align-items-center"
								style={{
									position: 'absolute',
									top: '0',
									left: '0',
									width: '100%',
									height: '100%',
									padding: '0 1rem',
									fontSize: '1rem',
								}}
							>
								<span>
									(IEO Remains){' '}
									{`${
										Number(remainsState) > 100000000
											? millify(Number(remainsState), {
													precision: 2,
											  })
											: Number(remainsState)
									} `}
								</span>
								<span hidden={Number(remainsState) <= 0}>{`  /  `}</span>
								<span hidden={Number(remainsState) <= 0}>
									{' '}
									{Number(totalState) > 100000000
										? millify(Number(totalState), {
												precision: 2,
										  })
										: Number(totalState)}{' '}
									(Total)
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="ieo-item-currencies d-flex flex-row flex-wrap">
					{props.currencyAvailable.map((currency, index) => (
						<div key={index} className="ieo-item-currency">
							<p>{currency}</p>
						</div>
					))}
				</div>
			</div>

			<div className="ioe-item-footer">
				<button className="ioe-item-footer-status col-4">{`Buy ${props.currencyId.toUpperCase()}`}</button>
				<p className="ioe-item-footer-bonus">{`Bonus ${!props.bonus ? '0%' : props.bonus}`}</p>
			</div>
		</div>
	);
};
