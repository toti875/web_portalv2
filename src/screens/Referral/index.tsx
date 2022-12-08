import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReferralContent } from 'containers';
import { useDocumentTitle } from 'hooks';
import { selectUserLoggedIn } from 'modules';
import { referralRanksFetch, selectReferalRanksList } from 'modules/plugins/referral';
import ReactTooltip from 'react-tooltip';
enum RankType {
	Friend = 'friend',
	Commision = 'commision',
}
const ReferralDesktopBanner = require('./Assets/referral-desktop-banner.png');
const RankNo1 = require('./Assets/top1.png');
const RankNo2 = require('./Assets/top2.png');
const RankNo3 = require('./Assets/top3.png');
const LoginReferral = require('./Assets/LoginReferral.svg');
const Stick = require('./Assets/stick.svg');

export const Referral: React.FC = () => {
	useDocumentTitle('Referral');
	const history = useHistory();

	// selectors
	const isLoggedIn = useSelector(selectUserLoggedIn);
	const referralRanks = useSelector(selectReferalRanksList);

	// dispatch
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(referralRanksFetch());
	}, []);

	const renderBannerReferral = () => {
		return (
			<React.Fragment>
				<div className="td-pg-referral__banner">
					<img className="img-fluid" src={ReferralDesktopBanner} alt="banner" />
				</div>
			</React.Fragment>
		);
	};
	const renderReferralRank = () => {
		const rankBox = (rankIndex: number, uid: string = '', commission: string = '', type = RankType.Friend) => {
			let image;
			switch (rankIndex) {
				case 1:
					image = RankNo1;
					break;
				case 2:
					image = RankNo2;
					break;
				case 3:
					image = RankNo3;
					break;
				default:
					break;
			}

			return (
				<div className="col-lg-4 col-md-12 td-pg-referral__rank__box mb-3">
					<div className="td-pg-referral__rank__box__row">
						<div className="col-2 pr-3">
							<img src={image} alt={`no.${rankIndex}`} />
						</div>
						<div className="col-5">
							<div>
								<span className="text-white td-pg-referral__rank__box__row__commision__coin-name">{`NO.${rankIndex}`}</span>
							</div>
							<div className="mt-3">
								<span data-tip={uid} className="text-white td-pg-referral__rank__box__row__rank__mail">
									{uid}
								</span>
							</div>
						</div>
						<div className="col-5">
							<div className="text-right">
								<span className="text-white">{type === RankType.Friend ? 'Friends' : 'Commision'}</span>
							</div>
							<div className="text-right mt-3">
								<span
									data-tip={commission}
									className="text-white td-pg-referral__rank__box__row__rank__commision"
								>
									{commission}
								</span>
							</div>
						</div>
					</div>
				</div>
			);
		};

		return (
			<div className="td-pg-referral__rank">
				<div className="container">
					<div className="row">
						{referralRanks[0]
							? rankBox(1, referralRanks[0].uid, referralRanks[0].total, referralRanks[0].type)
							: rankBox(1)}
						{referralRanks[1]
							? rankBox(2, referralRanks[1].uid, referralRanks[1].total, referralRanks[1].type)
							: rankBox(2)}
						{referralRanks[2]
							? rankBox(3, referralRanks[2].uid, referralRanks[2].total, referralRanks[2].type)
							: rankBox(3)}
					</div>
				</div>
			</div>
		);
	};
	const renderUsersLoggedIn = () => {
		if (isLoggedIn) {
			return <ReferralContent />;
		} else {
			return (
				<div className="td-pg-referral__loggedIn">
					<div className="container">
						<div
							className="td-pg-referral__loggedIn__userLogIn"
							style={{
								backgroundImage: `url(${LoginReferral})`,
							}}
						>
							<div className="referral-loggedIn-userLogIn__wrapper">
								<div className="referral-loggedIn-userLogIn__wrapper__desription">
									Acesse a plataforma e compartilhe seu código de indicação com seus amigos.
								</div>
								<div className="referral-loggedIn-userLogIn__wrapper__login">
									<button onClick={redirectToLogin}>Acessar plataforma</button>
									<p>
										{' '}
										Ainda não possui sua conta?<span onClick={redirectToRegister}> Criar conta</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	const redirectToLogin = (): void | any => {
		history.push('/signin');
	};
	const redirectToRegister = (): void | any => {
		history.push('/register');
	};
	const renderProgramDetail = () => {
		return (
			<div className="td-pg-referral__detail">
				<div className="container">
					<h4 className="text-white">Informações do Programa:</h4>
					<div className="row mt-5">
						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">Válido a partir de xx/12/2022 0:00 AM (UTC)</p>
						</div>
						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">
								Não há limite de indicações, embora reservamos o direito de
								ajustar ou alterar as regras do Programa a qualquer momento, sem prévio aviso.
							</p>
						</div>
						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">
								The commission you receive from the referral program will initially be set at a rate of 90%.
							</p>
						</div>

						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">
								Each referee must be signed up through your Referral Link, QR Code or Referral ID.
							</p>
						</div>
						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">
								The fee commission will be sent instantly in real-time to your Fortem account as your referee
								completes each trade and will be paid to you in whatever token/cryptocurrency the original fee was
								paid in.
							</p>
						</div>
						<div className="col-md-6 d-flex justify-content-start align-items-start">
							<img src={Stick} alt="stick" />
							<p className="mb-0 text-white mb-5 ml-4">
								Fortem will check for duplicate or fake accounts and will not pay out referral bonuses on these
								accounts. Duplicate or shared finances will result in disqualification.
							</p>
						</div>
					</div>
					<div className="td-pg-referral__detail__container__notice">
						<div className="row">
							<div className="col-11">
								<p className="text-white">Aviso Importante:</p>
								<p className="text-white">
									A Fortem ONE se reserva no direito de alterar os termos do Programa a qualquer momento,
									a seu único e exclusivo critério, em razão de condições de mercado, risco de fraude ou quaisquer outros fatores que julgar relevantes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="td-pg-referral">
			{renderBannerReferral()}
			{renderReferralRank()}
			{renderUsersLoggedIn()}
			{renderProgramDetail()}
			<ReactTooltip />
		</div>
	);
};
