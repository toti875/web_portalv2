import classnames from 'classnames';
import { HomeIcon, MarketIcon, StakeIcon, TradeIcon, WalletIcon } from 'mobile/assets/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DEFAULT_CLASSNAME = 'bottom-nav__item';

const handleGetActiveItemClass = (currentRoute: string, targetRoute: string, absolute?: boolean) => {
	return classnames(DEFAULT_CLASSNAME, {
		[`${DEFAULT_CLASSNAME}--active`]: absolute ? currentRoute === targetRoute : currentRoute.includes(targetRoute),
	});
};

export const BottomNavbar: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<nav className="bottom-nav">
			<ul>
				<Link to="/main" className={handleGetActiveItemClass(pathname, '/main', true)}>
					<HomeIcon
						className="bottom-nav__item__icon"
						active={handleGetActiveItemClass(pathname, '/main', true) !== DEFAULT_CLASSNAME}
					/>
					<span className="bottom-nav__item__text">Home</span>
				</Link>
				<Link to="/markets" className={handleGetActiveItemClass(pathname, '/markets')}>
					<MarketIcon
						className="bottom-nav__item__icon"
						active={handleGetActiveItemClass(pathname, '/markets') !== DEFAULT_CLASSNAME}
					/>
					<span className="bottom-nav__item__text">Mercados</span>
				</Link>
				<Link
					to="/market/ethusd"
					className={classnames('bottom-nav__item--middle', handleGetActiveItemClass(pathname, '/market/ethusd'))}
				>
					<TradeIcon
						className="bottom-nav__item__icon bottom-nav__item--middle__icon"
						active={handleGetActiveItemClass(pathname, '/market/ethusd') !== DEFAULT_CLASSNAME}
					/>
					<span className="bottom-nav__item__text">Negociar</span>
				</Link>
				<Link to="/tokens" className={handleGetActiveItemClass(pathname, '/tokens')}>
					<StakeIcon
						className="bottom-nav__item__icon"
						active={handleGetActiveItemClass(pathname, '/tokens') !== DEFAULT_CLASSNAME}
					/>
					<span className="bottom-nav__item__text">Tokens</span>
				</Link>
				<Link to="/wallets" className={handleGetActiveItemClass(pathname, '/wallets')}>
					<WalletIcon
						className="bottom-nav__item__icon"
						active={handleGetActiveItemClass(pathname, '/wallets') !== DEFAULT_CLASSNAME}
					/>
					<span className="bottom-nav__item__text">Carteiras</span>
				</Link>
			</ul>
		</nav>
	);
};
