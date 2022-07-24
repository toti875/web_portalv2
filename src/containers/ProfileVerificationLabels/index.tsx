import classnames from 'classnames';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Link } from 'react-router-dom';
import { kycSteps } from '../../api';
import { changeElementPosition } from '../../helpers/changeElementPosition';
import { Label, labelFetch, selectLabelData, selectUserInfo, User } from '../../modules';

/* Icons */
import { CheckBigIcon } from '../../assets/images/kyc/CheckBigIcon';
import { CheckIcon } from '../../assets/images/kyc/CheckIcon';
import { ClocksIcon } from '../../assets/images/kyc/ClocksIcon';
import { CrossIcon } from '../../assets/images/kyc/CrossIcon';

import { Flex, Text } from "@chakra-ui/react";

import Card from '../../ui_vision/components/Card/Card';
import CardHeader from '../../ui_vision/components/Card/CardHeader';
import CardBody from '../../ui_vision/components/Card/CardBody';

interface ReduxProps {
	labels: Label[];
}

interface DispatchProps {
	labelFetch: typeof labelFetch;
}

interface ProfileVerificationProps {
	user: User;
}

interface State {
	isMouseTooltipVisible: boolean;
}

type Props = DispatchProps & ProfileVerificationProps & ReduxProps;

class ProfileVerificationLabelsComponent extends React.Component<Props, State> {
	public state = {
		isMouseTooltipVisible: true,
	};

	public componentDidMount() {
		this.props.labelFetch();
	}

	public renderProgressBarStep = (step: string, index: number, labels: Label[]) => {
		const targetLabelStatus = this.handleCheckLabel(labels, step);

		switch (targetLabelStatus) {
			case 'verified':
				return (

			
					  <Flex direction='row'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>

					<div className="pg-profile-verification__progress-bar__step pg-profile-verification__progress-bar__step--verified">
						<FormattedMessage id={`page.body.profile.verification.progress.level`} />
						<span>&nbsp;{index + 1}</span>
						<CheckIcon />
					</div>
					</Text>
			  </Flex>

				);
			case 'drafted':
			case 'pending':
			case 'submitted':
				return (
				
					  <Flex direction='row'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>

					<div className="pg-profile-verification__progress-bar__step pg-profile-verification__progress-bar__step--pending">
						<FormattedMessage id={`page.body.profile.verification.progress.level`} />
						<span>&nbsp;{index + 1}</span>
						<ClocksIcon />
					</div>
					</Text>
			  </Flex>
		

				);
			case 'rejected':
				return (
					<div className="pg-profile-verification__progress-bar__step pg-profile-verification__progress-bar__step--rejected">
						<FormattedMessage id={`page.body.profile.verification.progress.level`} />
						<span>&nbsp;{index + 1}</span>
						<CrossIcon />
					</div>
				);
			case 'blocked':
				return (
	
					  <Flex direction='row'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>

							<div className="pg-profile-verification__progress-bar__step pg-profile-verification__progress-bar__step--blocked">
						<FormattedMessage id={`page.body.profile.verification.progress.level`} />
						<span>&nbsp;{index + 1}</span>
					</div>
					</Text>
			  </Flex>
		


				);
			default:
				return (

	
					  <Flex direction='row'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>

							<div className="pg-profile-verification__progress-bar__step pg-profile-verification__progress-bar__step--active">
						<FormattedMessage id={`page.body.profile.verification.progress.level`} />
						<span>&nbsp;{index + 1}</span>
					</div>
					</Text>
			  </Flex>

	



				);
		}
	};

	public renderProgressBar(labels: Label[]) {
		return (
			<Card backgroundColor='yellow'>
			
					{kycSteps().map((step, index) => this.renderProgressBarStep(step, index, labels))}
			
			</Card>

		);
	}

	public renderVerificationLabel(labels: Label[], labelToCheck: string, index: number) {
		const { isMouseTooltipVisible } = this.state;
		const targetLabelStatus = this.handleCheckLabel(labels, labelToCheck);

		const tooltipClass = classnames('pg-profile-page-verification__step__tooltip tooltip-hover', {
			'tooltip-hover--visible': isMouseTooltipVisible,
		});

		switch (targetLabelStatus) {
			case 'verified':
				return (
					<div key={index} className="pg-profile-verification__step pg-profile-verification__step--verified">
						<div className="pg-profile-verification__step__info">
							<div className="pg-profile-verification__step__info__title">
								<span>{index + 1}.&nbsp;</span>
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.title`} />
							</div>
							<div className="pg-profile-verification__step__info__subtitle">
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.subtitle`} />
							</div>
						</div>
						<div className="pg-profile-verification__step__label pg-profile-page-verification__step__label--verified">
							<FormattedMessage id="page.body.profile.verification.verified" />
							<CheckBigIcon />
						</div>
					</div>
				);
			case 'drafted':
			case 'pending':
			case 'submitted':
				return (
					<div key={index} className="pg-profile-verification__step pg-profile-page-verification__step--pending">
						<div className="pg-profile-page-verification__step__info">
							<div className="pg-profile-verification__step__info__title">
								<span>{index + 1}.&nbsp;</span>
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.title`} />
							</div>
							<div className="pg-profile-verification__step__info__subtitle">
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.subtitle`} />
							</div>
						</div>
						<div className="pg-profile-verification__step__label pg-profile-page-verification__step__label--pending">
							<FormattedMessage id="page.body.profile.verification.pending" />
							<ClocksIcon />
						</div>
					</div>
				);
			case 'rejected':
				return (
					<div key={index} className="pg-profile-verification__step pg-profile-page-verification__step--rejected">
						<div className="pg-profile-verification__step__info">
							<div className="pg-profile-verification__step__info__title">
								<span>{index + 1}.&nbsp;</span>
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.title`} />
							</div>
							<div className="pg-profile-verification__step__info__subtitle">
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.subtitle`} />
							</div>
						</div>
						<div
							className="pg-profile-verification__step__label pg-profile-page-verification__step__label--rejected"
							onMouseEnter={e => this.handleHoverTooltipIcon()}
							onMouseLeave={e => this.handleToggleTooltipVisible()}
						>
							<Link to="/confirm">
								<FormattedMessage id="page.body.profile.verification.reverify" />
							</Link>
							<CrossIcon />
						</div>
						<span className={tooltipClass}>
							<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.rejected.tooltip`} />
						</span>
					</div>
				);
			case 'blocked':
				return (
					<div key={index} className="pg-profile-verification__step pg-profile-verification__step--blocked">
						<div className="pg-profile-verification__step__info">
							<div className="pg-profile-verification__step__info__title">
								<span>{index + 1}.&nbsp;</span>
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.title`} />
							</div>
							<div className="pg-profile-verification__step__info__subtitle">
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.subtitle`} />
							</div>
						</div>
						<div className="pg-profile-verification__step__button pg-profile-verification__step__button--blocked">
							<Link to="/confirm">
								<FormattedMessage id="page.body.profile.verification.verify" />
							</Link>
						</div>
					</div>
				);
			default:
				return (
					<div key={index} className="pg-profile-verification__step pg-profile-verification__step--active">
						<div className="pg-profile-verification__step__info">
							<div className="pg-profile-verification__step__info__title">
								<span>{index + 1}.&nbsp;</span>
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.title`} />
							</div>
							<div className="pg-profile-verification__step__info__subtitle">
								<FormattedMessage id={`page.body.profile.verification.${labelToCheck}.subtitle`} />
							</div>
						</div>
						<div className="pg-profile-verification__step__button pg-profile-verification__step__button--active">
							<Link to="/confirm">
								<FormattedMessage id="page.body.profile.verification.verify" />
							</Link>
						</div>
					</div>
				);
		}
	}

	public render() {
		const { labels } = this.props;

		return (
			
				<React.Fragment>
					{this.renderProgressBar(labels)}
				</React.Fragment>
		
			
		
			
			
			





		);
	}

	private handleCheckLabel = (labels: Label[], labelToCheck: string) => {
		const targetLabel =
			labels.length && labels.find((label: Label) => label.key === labelToCheck && label.scope === 'private');
		let targetLabelStatus = targetLabel ? targetLabel.value : '';
		const indexOfPrevStep = kycSteps().indexOf(labelToCheck) - 1;

		if (indexOfPrevStep !== -1) {
			const prevStepPassed = Boolean(
				labels.find(
					(label: Label) =>
						label.key === kycSteps()[indexOfPrevStep] && label.value === 'verified' && label.scope === 'private',
				),
			);

			if (!prevStepPassed) {
				targetLabelStatus = 'blocked';
			}
		}

		return targetLabelStatus;
	};

	private handleToggleTooltipVisible = () => {
		this.setState(prevState => ({
			isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
		}));
	};

	private handleHoverTooltipIcon = () => {
		changeElementPosition('pg-profile-page-verification__step__tooltip', 0, -100, 20);
		this.handleToggleTooltipVisible();
	};
}

const mapStateToProps = state => ({
	user: selectUserInfo(state),
	labels: selectLabelData(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
	labelFetch: () => dispatch(labelFetch()),
});

export const ProfileVerificationLabels = connect(mapStateToProps, mapDispatchProps)(ProfileVerificationLabelsComponent);
