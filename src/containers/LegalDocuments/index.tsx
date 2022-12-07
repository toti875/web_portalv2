import * as React from 'react';
import { Modal, TabPanel } from '../../components';

const panels = [

	{
		label: 'POLÍTICA DE PRIVACIDADE',
		content: (
			<div id="privacy-policy" className="tabs-content">
				POLÍTICA DE PRIVACIDADE
			</div>
		),
	},
	{
		label: 'TERMOS DE USO',
		content: <div className={'tabs-content'}>TERMOS DE USO</div>,
	},
];

export interface LegalDocumentsProps {
	isOpen: boolean;
	footer: React.ReactNode;
}

interface State {
	currentTabIndex: number;
}

class LegalDocuments extends React.Component<LegalDocumentsProps, State> {
	public state = {
		currentTabIndex: 0,
	};

	public render() {
		return (
			<Modal
				className={'pg-legal-docs-modal'}
				show={this.props.isOpen}
				header={<h3>Title</h3>}
				content={this.renderModalBody()}
				footer={this.props.footer}
			/>
		);
	}

	private onCurrentTabChange = index => this.setState({ currentTabIndex: index });

	private renderModalBody = () => {
		return (
			<div>
				<TabPanel
					panels={panels}
					currentTabIndex={this.state.currentTabIndex}
					onCurrentTabChange={this.onCurrentTabChange}
				/>
			</div>
		);
	};
}

export { LegalDocuments };
