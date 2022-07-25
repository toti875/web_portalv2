import classNames from 'classnames';
//import { TOGGLE_SIDEBAR } from 'modules/public/globalSettings/constants';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { FaAward, FaGift, FaHistory, FaSignOutAlt, FaStar, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutFetch, selectUserLoggedIn } from '../../modules';

import { NavBar } from '../NavBar';


const Logo = require('../../assets/images/logo_branca_colorida.svg');

export const HeaderAuthToolbar: React.FC = () => {
	const history = useHistory();
	const intl = useIntl();

	const isLoggedIn = useSelector(selectUserLoggedIn);
	const [activeNow, setActiveNow] = React.useState('');
	const [activeItemDrop, setActiveItemDrop] = React.useState('');

	const dispatch = useDispatch();

	const setStateActiveNow = (nameActive: string) => {
		setActiveNow(nameActive);
		setActiveItemDrop('');
	};

	const classActiveItemDrop = (nameItem: string) =>
		classNames('subheader__right-menu__dropdown__wrap__content__title d-flex align-items-center', {
			'subheader__right-menu__dropdown__wrap__content__title--active': activeItemDrop === nameItem,
		});

	const classLinkActive = (nameActive: string) => {
		return classNames('subheader__left-menu__dropdown__wrap', {
			'subheader__left-menu__dropdown__wrap--active': activeNow === nameActive,
		});
	};

	const classLinkActiveTitleDrop = (nameActive: string) => {
		return classNames('subheader__right-menu__dropdown__wrap__dropbtn d-flex flex-row align-items-center', {
			'subheader__right-menu__dropdown__wrap__dropbtn--active': activeNow === nameActive,
		});
	};

	const renderWalletLink = () => {
		const classItemTitle = classNames('subheader__right-menu__item__title', {
			'subheader__right-menu__item__title--active': activeNow === 'Wallet',
		});

		return (
			isLoggedIn && (
				<div className="subheader__right-menu__item ">
					<div className={classItemTitle} onClick={() => setStateActiveNow('Wallet')}>
						<Link to="/wallets">Wallets</Link>
					</div>
				</div>
			)
		);
	};

	const renderDashboardLink = () => {
		const classItemTitle = classNames('subheader__right-menu__item__title', {
			'subheader__right-menu__item__title--active': activeNow === 'Dashboard',
		});

		return (
			isLoggedIn && (
				<div className="subheader__right-menu__item ">
					<div className={classItemTitle} onClick={() => setStateActiveNow('Dashboard')}>
						<Link to="/dashboard">Dashboard</Link>
					</div>
				</div>
			)
		);
	};

	const renderOrderTab = () => {
		return (
			isLoggedIn && (
			
				<div className="subheader__right-menu__dropdown__wrap">
					<span className={classLinkActiveTitleDrop('orders')}>
						{translate('page.body.homepage.header.orders')}
						<div className="subheader__right-menu__dropdown__wrap__dropbtn__icon-drop-down"> </div>
					</span>
					<div className="subheader__right-menu__dropdown__wrap__content">
						<Link
							to="/orders"
							onClick={() => {
								setStateActiveNow('orders');
								setActiveItemDrop('orders');
							}}
						>
							<div className={classActiveItemDrop('orders')}>
								<FaStar className="mr-2" />
								{translate('page.body.homepage.header.openOrder')}
							</div>
						</Link>
						<Link
							to="/history"
							onClick={() => {
								setStateActiveNow('orders');
								setActiveItemDrop('history');
							}}
						>
							<div className={classActiveItemDrop('history')}>
								<FaHistory className="subheader__right-menu__dropdown__wrap__content__title__icon mr-2" />
								{translate('page.body.homepage.header.history')}
							</div>
						</Link>
					</div>
				</div>
			
			)
		);
	};

	const renderDigitalAsstesTab = () => {
		return (
			isLoggedIn && (
			
				<div className="subheader__right-menu__dropdown__wrap">
					<span className={classLinkActiveTitleDrop('digitalassets')}>
						{translate('page.body.homepage.header.digitalassets')}
						<div className="subheader__right-menu__dropdown__wrap__dropbtn__icon-drop-down"> </div>
					</span>
					<div className="subheader__right-menu__dropdown__wrap__content">
						<Link
							to="/tokens"
							onClick={() => {
								setStateActiveNow('digitalassets');
								setActiveItemDrop('tokens');
							}}
						>
							<div className={classActiveItemDrop('tokens')}>
								<FaStar className="mr-2" />
								{translate('page.body.homepage.header.tokens')}
							</div>
						</Link>
						<Link
							to="/crypto"
							onClick={() => {
								setStateActiveNow('digitalassets');
								setActiveItemDrop('crypto');
							}}
						>
							<div className={classActiveItemDrop('crypto')}>
								<FaHistory className="subheader__right-menu__dropdown__wrap__content__title__icon mr-2" />
								{translate('page.body.homepage.header.crypto')}
							</div>
						</Link>
					</div>
				</div>
			
			)
		);
	};

	const renderLogout = () => {
		if (!isLoggedIn) {
			return null;
		}

		return (
			<Link
				to=" "
				onClick={() => {
					dispatch(logoutFetch());
					setStateActiveNow('');
					setActiveItemDrop('');
				}}
			>
				<div className="subheader__right-menu__dropdown__wrap__content__title d-flex align-items-center">
					<FaSignOutAlt className="subheader__right-menu__dropdown__wrap__content__title__icon mr-2" />
					<FormattedMessage id={'page.body.profile.content.action.logout'} />
				</div>
			</Link>
		);
	};

	const renderProfileLink = () => {
		return (
			isLoggedIn && (
				<Link
					to="/profile"
					onClick={() => {
						setStateActiveNow('account');
						setActiveItemDrop('profile');
					}}
				>
					<div className={classActiveItemDrop('profile')}>
						<FaUserCircle className="subheader__right-menu__dropdown__wrap__content__title__icon mr-2" />
						<FormattedMessage id={'page.header.navbar.profile'} />
					</div>
				</Link>
			)
		);
	};

	const renderProfileTab = () => {
		return (
			isLoggedIn && (
				<>
					<div className="subheader__right-menu__dropdown__wrap">
						<span className={classLinkActiveTitleDrop('account')}>
							{translate('page.body.homepage.header.account')}
							<div className="subheader__right-menu__dropdown__wrap__dropbtn__icon-drop-down"> </div>
						</span>
						<div className="subheader__right-menu__dropdown__wrap__content subheader__right-menu__dropdown__wrap__content--account">
							{renderProfileLink()}
							{renderReferralLink()}
							{renderLogout()}
						</div>
					</div>
				</>
			)
		);
	};

	const renderReferralLink = () => {
		return (
			isLoggedIn && (
				<Link
					to="/referral"
					onClick={() => {
						setStateActiveNow('account');
						setActiveItemDrop('referral');
					}}
				>
					<div className={classActiveItemDrop('referral')}>
						<FaUserPlus className="subheader__right-menu__dropdown__wrap__content__title__icon mr-2" />
						<FormattedMessage id={'page.header.navbar.referral'} />
					</div>
				</Link>
			)
		);
	};

	const redirectSingIn = () => {
		history.push('/login');
	};

	const redirectSingUp = () => {
		history.push('/signup');
	};

	const translate = (key: string) => intl.formatMessage({ id: key });

	const renderUnLogin = () => {
		const classLinkActiveLogin = classNames('subheader__right-menu__item__title', {
			'subheader__right-menu__item__title--active': activeNow === 'login',
		});

		const classLinkActiveRegister = classNames('subheader__right-menu__item__title subheader__right-menu__item__title--btn ', {
			'subheader__right-menu__item__title--btn--active': activeNow === 'register',
		});

		return (
			!isLoggedIn && (
				<>
					<div
						className="subheader__right-menu__item flex-shrink-0 custom-poiter"
						onClick={e => {
							redirectSingIn();
							setStateActiveNow('login');
						}}
					>
						<div className={classLinkActiveLogin}>
							<span>{translate('page.body.homegape.header.button2')}</span>
						</div>
					</div>
					<div
						className="subheader__right-menu__item flex-shrink-0 custom-poiter"
						onClick={e => {
							redirectSingUp();
							setStateActiveNow('register');
						}}
					>
						<span className={classLinkActiveRegister}>{translate('page.body.homegape.header.button3')}</span>
					</div>
				</>
			)
		);
	};

	return (
		isLoggedIn && (
			<>
		<div className="subheaderDesktop-screen">
			<div className="container-subheader">
				<nav className="subheader d-flex flex-row justify-content-between align-items-center">
					<div className="subheader__left-menu d-flex flex-row align-items-center">
					
						{renderUnLogin()}
						{renderDashboardLink()}
						{renderDigitalAsstesTab()}
						{renderWalletLink()}
						{renderOrderTab()}
					




					</div>

					<div className="subheader__right-menu d-flex align-items-center flex-row">
						{renderUnLogin()}
						{renderWalletLink()}
						{renderOrderTab()}
						
						<NavBar />
					</div>
				</nav>
			</div>
		</div>
		</>
		)
		


	);
};
