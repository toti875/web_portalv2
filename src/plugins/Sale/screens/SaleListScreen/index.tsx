import { Button } from 'antd';
import * as React from 'react';
import { SaleListTables } from '../../containers';
import './SaleListScreen.css';

const TokenList = require ('../../../../assets/images/tokens.png');

const GlobeAnimated  = require ('../../../../assets/video/globe-900.hevc.mp4');
export const SaleListScreen: React.FC = () => {
	return (
		<React.Fragment>
			<div style={{ position: 'relative',  }}>
				<img style={{ width: '110%', margin: 0 }} src={TokenList} alt="ieo_banner" />
			
				
 
          

				{/*<div
					style={{
						position: 'absolute',
						content: '',
						bottom: '-3rem',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						display: 'inline-block',
					}}
				>
					<Button style={{ backgroundColor: '#457b9d' }} type="primary" size={'large'} href="#" target="_blank">
						Adquira seu Token
					</Button>
					<Button href="#" target="_blank" style={{ backgroundColor: '#2a9d8f' }} type="primary" size={'large'}>
						Conheça os Projetos
					</Button>
				</div>  */}
			</div>

			<div id="sale-list" className="container-fluid">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="sale-list__title" style={{ color: '#2a9d8f', fontSize: '42px', fontWeight: 'bold' }}> Seja bem-vindo ao SIMPLE</h1>
						<h2 className="sale-list__subtitle" style={{  fontSize: '28px', fontWeight: 'bold' }}>
						O marketplace global de ativos digitais da Fortem ONE
						</h2>
					</div>
				</div>
				<div className="mt-3">
					<SaleListTables />
				</div>
			</div>
		</React.Fragment>
	);
};
