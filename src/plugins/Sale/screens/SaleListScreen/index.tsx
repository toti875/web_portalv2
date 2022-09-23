import { Button } from 'antd';
import * as React from 'react';
import { SaleListTables } from '../../containers';
import './SaleListScreen.css';

const TokenList = require ('../../../../assets/images/tokenList.jpg');

const GlobeAnimated  = require ('../../../../assets/video/globe.mp4');

export const SaleListScreen: React.FC = () => {
	return (
		<React.Fragment>
			
				<div className="height-650  bg_image" style={{ width: '100%', maxHeight: '850px', backgroundImage: `url(${TokenList})` }}>
			
						
						

						<div className="container2 align-items-center">
			<video style={{ width: '25%',   borderRadius: '50%', left: '38%', top: '160px', opacity: 1, position: 'absolute'}} autoPlay >
					<source 					 src={GlobeAnimated} type="video/mp4" />
				</video>

				</div>
			
			
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


