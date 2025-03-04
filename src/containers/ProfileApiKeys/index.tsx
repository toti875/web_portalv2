import { Empty, Switch } from 'antd';
import classnames from 'classnames';
import { CodeVerification, NewCopyableTextField, NewModal } from 'components';
import { localeDate } from 'helpers';
import {
	alertPush,
	apiKeyCreateFetch,
	ApiKeyCreateFetch,
	ApiKeyDataInterface,
	apiKeyDeleteFetch,
	ApiKeyDeleteFetch,
	apiKeys2FAModal,
	ApiKeys2FAModal,
	apiKeysFetch,
	ApiKeyUpdateFetch,
	apiKeyUpdateFetch,
	selectUserInfo,
} from 'modules';
import { selectApiKeys, selectApiKeysModal } from 'modules/user/apiKeys/selectors';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// tslint:disable-next-line: no-empty-interface
interface ProfileApiKeysProps {}

export const ProfileApiKeys: React.FC<ProfileApiKeysProps> = () => {
	const intl = useIntl();
	const dispatch = useDispatch();
	const history = useHistory();

	const [otpCode, setOtpCode] = React.useState('');
	const [codeFocused, setCodeFocused] = React.useState(false);
	const apiKeys = useSelector(selectApiKeys);
	const user = useSelector(selectUserInfo);
	const modal = useSelector(selectApiKeysModal);

	React.useEffect(() => {
		dispatch(apiKeysFetch());
	}, [dispatch]);

	const translate = (id: string) => {
		return intl.formatMessage({ id });
	};
	const getTableHeaders = () => {
		return [
			translate('page.body.profile.apiKeys.table.header.kid'),
			translate('page.body.profile.apiKeys.table.header.algorithm'),
			translate('page.body.profile.apiKeys.table.header.state'),
			'Status',
			translate('page.body.profile.apiKeys.table.header.created'),
			translate('page.body.profile.apiKeys.table.header.updated'),
			'Remover',
		];
	};

	const onChangeSwitch = (checked: boolean, apiKey: ApiKeyDataInterface) => {
		const payload: ApiKeys2FAModal['payload'] = { active: true, action: 'updateKey', apiKey };
		dispatch(apiKeys2FAModal(payload));
	};

	const handleDeleteKeyClick = (apiKey: ApiKeyDataInterface) => {
		const payload: ApiKeys2FAModal['payload'] = { active: true, action: 'deleteKey', apiKey };
		dispatch(apiKeys2FAModal(payload));
	};

	const getTableData = () => {
		return apiKeys.map(item => [
			item.kid,
			item.algorithm,
			<div>
				<span>{item.state}</span>
			</div>,
			<div>
				<Switch
					checked={item.state === 'active'}
					onChange={checked => {
						onChangeSwitch(checked, item);
					}}
				/>
			</div>,
			localeDate(item.created_at, 'fullDate'),
			localeDate(item.updated_at, 'fullDate'),
			<span className="td-pg-profile__action-delete" key={item.kid} onClick={() => handleDeleteKeyClick(item)} style={{color: '#ED0A3F'}}>
				X
			</span>,
		]);
	};

	const handleCreateKey = () => {
		const payload: ApiKeyCreateFetch['payload'] = { totp_code: otpCode };
		dispatch(apiKeyCreateFetch(payload));
		setOtpCode('');
	};

	const handleCreateSuccess = () => {
		const payload: ApiKeys2FAModal['payload'] = { active: false };
		dispatch(apiKeys2FAModal(payload));
	};

	const handleUpdateKey = () => {
		const apiKey: ApiKeyDataInterface = { ...modal.apiKey } as any;
		apiKey.state = apiKey.state === 'active' ? 'disabled' : 'active';
		const payload: ApiKeyUpdateFetch['payload'] = { totp_code: otpCode, apiKey: apiKey };
		dispatch(apiKeyUpdateFetch(payload));
		setOtpCode('');
	};

	const copy = (id: string) => {
		const copyText: HTMLInputElement | null = document.querySelector(`#${id}`);

		if (copyText) {
			copyText.select();

			document.execCommand('copy');
			(window.getSelection() as any).removeAllRanges(); // tslint:disable-line
		}
	};

	const handleCopy = (id: string, type: string) => {
		copy(id);
		dispatch(alertPush({ message: [`success.api_keys.copied.${type}`], type: 'success' }));
	};

	const handleDeleteKey = () => {
		const payload: ApiKeyDeleteFetch['payload'] = {
			kid: (modal.apiKey && modal.apiKey.kid) || '',
			totp_code: otpCode,
		};
		dispatch(apiKeyDeleteFetch(payload));
		setOtpCode('');
	};

	const handleOtpCodeChange = (value: string) => {
		setOtpCode(value);
	};

	const handleChangeFocusField = () => {
		setCodeFocused(prev => !prev);
	};

	const renderOnClick = () => {
		switch (modal.action) {
			case 'createKey':
				handleCreateKey();
				break;
			case 'createSuccess':
				handleCreateSuccess();
				break;
			case 'updateKey':
				handleUpdateKey();
				break;
			case 'deleteKey':
				handleDeleteKey();
				break;
			default:
				break;
		}
	};

	const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			renderOnClick();
		}
	};

	const renderModalBody = () => {
		/* const secret = (modal && modal.apiKey) ? modal.apiKey.secret : ''; */
		const emailGroupClass = classnames('td-email-form__group', {
			'td-email-form__group--focused': codeFocused,
		});
		let body: JSX.Element | null = null;
		let button: JSX.Element | null = null;
		const isDisabled = !otpCode.match(/.{6}/g);
		switch (modal.action) {
			case 'createKey':
				button = (
					<Button block={true} onClick={handleCreateKey} disabled={isDisabled} size="lg" variant="primary">
						{translate('page.body.profile.apiKeys.modal.btn.create')}
					</Button>
				);
				break;
			case 'createSuccess':
				button = (
					<Button block={true} onClick={handleCreateSuccess} size="lg" variant="primary">
						{translate('page.body.profile.apiKeys.modal.btn.create')}
					</Button>
				);
				body = (
					<div className="td-success-create">
						<div className="td-copyable-text__section">
							<fieldset onClick={() => handleCopy('access-key-id', 'access')}>
								<NewCopyableTextField
									className="td-copyable-text-field__input"
									fieldId={'access-key-id'}
									value={(modal.apiKey && modal.apiKey.kid) || ''}
									copyButtonText={translate('page.body.profile.content.copyLink')}
									label={translate('page.body.profile.apiKeys.modal.access_key')}
								/>
							</fieldset>
						</div>
						<div className="secret-section">
							<span className="secret-sign">&#9888;</span>
							<p className="secret-warning">
								<span>{translate('page.body.profile.apiKeys.modal.secret_key')}</span>
								<br />
								{translate('page.body.profile.apiKeys.modal.secret_key_info')}
								<span> {translate('page.body.profile.apiKeys.modal.secret_key_store')}</span>
							</p>
						</div>
						<div className="td-copyable-text__section">
							<fieldset onClick={() => handleCopy('secret-key-id', 'secret')}>
								<NewCopyableTextField
									className="td-copyable-text-field__input"
									fieldId={'secret_key-id'}
									value={(modal.apiKey && modal.apiKey.secret) || ''}
									copyButtonText={translate('page.body.profile.content.copyLink')}
									label={translate('page.body.profile.apiKeys.modal.secret_key')}
								/>
							</fieldset>
						</div>
						<p className="note-section">
							<span>{translate('page.body.profile.apiKeys.modal.note')} </span>
							<br />
							{translate('page.body.profile.apiKeys.modal.note_content')}
						</p>
						<div className="button-confirmation">{button}</div>
					</div>
				);
				break;
			case 'updateKey':
				button = (
					<Button block={true} onClick={handleUpdateKey} disabled={isDisabled} size="lg" variant="primary">
						{modal.apiKey && modal.apiKey.state === 'active'
							? translate('page.body.profile.apiKeys.modal.btn.disabled')
							: translate('page.body.profile.apiKeys.modal.btn.activate')}
					</Button>
				);
				break;
			case 'deleteKey':
				button = (
					<Button block={true} onClick={handleDeleteKey} disabled={isDisabled} size="lg" variant="primary">
						{translate('page.body.profile.apiKeys.modal.btn.delete')}
					</Button>
				);
				break;
			default:
				break;
		}
		body = !body ? (
			<div className="td-email-form">
				<div className="td-email-form__header">{translate('page.body.profile.apiKeys.modal.title')}</div>
				<div className={emailGroupClass}>
				<CodeVerification
                        code={otpCode}
                        onChange={handleOtpCodeChange}
                        onSubmit={handleEnterPress}
                        codeLength={6}
                        type="text"
                        placeholder="X"
                        inputMode="decimal"
                        showPaste2FA={true}
                        isMobile={false}
                    />

				</div>
				<div className="td-email-form__button-wrapper">{button}</div>
			</div>
		) : (
			body
		);

		return <React.Fragment>{body}</React.Fragment>;
	};

	const handleHide2FAModal = () => {
		const payload: ApiKeys2FAModal['payload'] = { active: false };
		dispatch(apiKeys2FAModal(payload));
		setOtpCode('');
	};

	const renderModalHeader = () => {
		return modal.action === 'createSuccess'
			? translate('page.body.profile.apiKeys.modal.created_header')
			: translate('page.body.profile.apiKeys.modal.header');
	};

	const handleCreateKeyClick = () => {
		if (user.otp) {
			const payload: ApiKeys2FAModal['payload'] = { active: true, action: 'createKey' };
			dispatch(apiKeys2FAModal(payload));
		} else {
			history.push('/security/2fa', { enable2fa: !user.otp });
		}
	};

	return (
		<div className="td-pg-profile--bg td-pg-profile--radius td-pg-profile__content__item td-pg-profile__list-api-key">
			<div className="td-pg-profile__content__item__header">
				<div className="td-pg-profile__content__item__header__title">Minhas chaves de API</div>
				<div className="td-pg-profile__content__item__header__action">
					<button type="button" className="btnApiKey" onClick={handleCreateKeyClick}>
						Criar chave
					</button>
				</div>
			</div>
			<div className="td-pg-profile__content__item__content">
				<div className="td-pg-profile__inner">
					<table className="td-pg-profile--color--second td-pg-profile__list-api-key__table">
						<thead>
							<tr>
								{getTableHeaders().map((title, i) => (
									<th key={i}>{title}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{getTableData().map((record, i) => (
								<tr key={i}>
									{record.map((elm, j) => (
										<td key={j}>{elm}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					{!apiKeys.length && <Empty className="pt-3 pb-3" />}
					<NewModal
						show={modal.active}
						onHide={handleHide2FAModal}
						titleModal={renderModalHeader()}
						bodyModal={renderModalBody()}
					/>
				</div>
			</div>
		</div>
	);
};
