import { Col, Empty, Menu, message, Row, } from 'antd';
//import 'antd/dist/dark-theme';
//import {checkbox} from '@material/checkbox';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	activeSaleListFetch,
	endedSaleListFetch,
	onGoingSaleListFetch,
	selectSaleList,
	upComingSaleListFetch,
} from '../../../../modules';
import { IEOItem } from '../../components';
import './SaleListTables.css';

export const SaleListTables: React.FC = () => {
	// dispatch Fetch Wallets Of User Action
	const dispatch = useDispatch();
	const dispatchActiveSaleListFetch = React.useCallback(() => dispatch(activeSaleListFetch()), [dispatch]);
	const dispatchUpcomingSaleListFetch = React.useCallback(() => dispatch(upComingSaleListFetch()), [dispatch]);
	const dispatchOnGoingSaleListFetch = React.useCallback(() => dispatch(onGoingSaleListFetch()), [dispatch]);
	const dispatchEndedSaleListFetch = React.useCallback(() => dispatch(endedSaleListFetch()), [dispatch]);

	const saleList = useSelector(selectSaleList);

	React.useEffect(() => {
		// dispatch Active Sale List Fetch in one time
		dispatchOnGoingSaleListFetch();
	}, [dispatchOnGoingSaleListFetch]);

	const handleSelectMenuItem = ({ key }) => {
		switch (key) {
			case 'active':
				dispatchActiveSaleListFetch();
				break;
			case 'upcoming':
				dispatchUpcomingSaleListFetch();
				break;
			case 'ongoing':
				dispatchOnGoingSaleListFetch();
				break;
			case 'ended':
				dispatchEndedSaleListFetch();
				break;
			default:
				break;
		}
	};

	
	const handleSelectActive = () => {
		
				dispatchActiveSaleListFetch();

	};

	const handleSelectEnded = () => {
		
		dispatchEndedSaleListFetch();

};

	let saleItems;
	if (saleList.payload.length === 0) {
		saleItems = (
			<div className="col-12 d-flex justify-content-center">
				<Empty
					image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
					imageStyle={{ marginTop: '3rem' }}
					description={<span>Nenhuma Emissão disponível</span>}
				/>
			</div>
		);
	} else {
		saleItems = [...saleList.payload].map(sale => {
			return (
				<Col span={12} key={sale.id}>
					<IEOItem key={sale.id} sale={sale} type={sale.type} />
				</Col>
			);
		});
	}

	React.useEffect(() => {
		if (saleList.loading) {
			message.loading('', 0);
		} else {
			message.destroy();
		}

		return () => {
			message.destroy();
		};
	}, [saleList.loading]);

	return (
		<div className="container">
				<div >
					<Menu mode="horizontal" defaultSelectedKeys={['active']} onClick={handleSelectMenuItem}>
						<Menu.Item key="active">
							<button onClick={handleSelectActive}>Captações Ativas </button>
						</Menu.Item>
						<Menu.Item key="ongoing">
							<span >Captações em Andamento</span>
						</Menu.Item>
						<Menu.Item key="upcoming">
							<span >Captações Futuras</span>
						</Menu.Item>
						<Menu.Item key="ended">
						<button style={{ color: '#EA4235' }} onClick={handleSelectActive}>Captações Finalizadas </button>

						</Menu.Item>
					</Menu>
				</div>

		


			<div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
				<div className="container2 justify-content-center" style={{padding: '30px', display: 'flex', justifyContent: 'space-between'}}>{saleItems}</div>
				<Menu mode="horizontal" defaultSelectedKeys={['active']} onClick={handleSelectMenuItem}>
						<Menu.Item key="active">
							<button onClick={handleSelectActive}>Captações Ativas </button>
						</Menu.Item>
						<Menu.Item key="ongoing">
							<span >Captações em Andamento</span>
						</Menu.Item>
						<Menu.Item key="upcoming">
							<span >Captações Futuras</span>
						</Menu.Item>
						<Menu.Item key="ended">
							<span style={{ color: '#EA4235' }}>Captações Finalizadas</span>
						</Menu.Item>
					</Menu>
			</div>
		</div>
	);
};
