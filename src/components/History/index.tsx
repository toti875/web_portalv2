import classnames from 'classnames';
import * as React from 'react';
import { CellData, Table } from '../Table';

export interface HistoryProps {
	/**
	 * List of history data
	 */
	data: CellData[][];
	/**
	 * List of headers for history table
	 */
	headers?: string[];
}

export class History extends React.PureComponent<HistoryProps> {
	private defaultHeaders = ['Data', 'Tipo', 'Preço', 'Quantidade', 'Total'];
	private title = '';

	public render() {
		const { headers = this.defaultHeaders } = this.props;
		const tableData = this.props.data.map(row => row.map(this.mapRows));

		return <Table data={tableData} header={headers} titleComponent={this.title} />;
	}

	public renderAction(actionType: string) {
		const action = actionType ? actionType.toLowerCase() : actionType;
		const className = classnames('cr-history-action', {
			'cr-history-action--buy': action === 'bid',
			'cr-history-action--sell': action === 'ask',
		});

		return <span className={className}>{action}</span>;
	}

	private mapRows = (cell: CellData, index: number) => {
		const { headers = this.defaultHeaders } = this.props;
		const actionIndex = headers.findIndex(header => header === 'Tipo');

		return index === actionIndex ? this.renderAction(cell as string) : cell;
	};
}
