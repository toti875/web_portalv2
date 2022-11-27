import { Button } from 'antd';
import * as React from 'react';
import { SaleListTables, SaleListTablesUpcoming } from '../../containers';
import Slider from 'react-slick';
import news from './news.svg';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import { Parallax } from 'react-scroll-parallax';



import './SaleListScreen.css';
//const GlobeAnimated  = require ('../../../../assets/images/ticker-tape.mp4');
const GlobeAnimated  = require ('./b.mp4');

const settingEvents = {
	dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 10000,
	pauseOnHover: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const BannerData2 = [
    {
        event_name: "Conecte-se com ",
        description: "ativos digitais" ,
		ref_link: "",
    },
	{
        event_name: "Conecte-se com ",
        description: "crédito" ,
		ref_link: "",
    },
    
]

const renderEvent = () => {
	return (
	
		<div className="homepage-event  rn-header header-default " style={{background: '#000',  margin: '0px auto', marginLeft: '5px', display: 'flex', flexDirection: 'row', height: '36px', borderTop: '2px solid #46473E', borderBottom: '2px solid #46473E', minWidth: '100px', }}> 
		
			<div  className="news-event "  style={{margin: '0 auto', maxWidth: '80px', background: '#000', alignItems: 'center',  color: '#1EDED0', borderRight: '1px solid gray', fontSize: '16px',  maxHeight: '32px' }}>
			<Pulse forever={true}>	<img src={news} style={{ marginTop: '-5px', minWidth: '30px', }}></img></Pulse>
								
			</div>

			<div className="container2  theme-shape-root"  style={{  background: '#000', color: '#1EDED0', alignItems: 'center',   marginLeft: '10px', height: '26px', backgroundColor: '#000'}}>


				<Slider {...settingEvents}>
					{BannerData2.map(event => {
						return (
							<div className="news-event text-center justify-content-center" style={{display: 'flex', textAlign: 'center'}}>
								<h3  style={{opacity: '1', fontSize: '16px', color: '#F5F5F5', letterSpacing: '3px', marginTop: '-14px', background: '#000',  fontFamily: 'Raleway Dots'}} >
								<Zoom infinite={true} appear={true} delay={4000}> 
									<a style={{fontFamily: 'Raleway Dots', }} href={event.ref_link}>{event.event_name}{event.description}</a>
								</Zoom>
								</h3>
							
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export const SaleListScreen: React.FC = () => {
	return (
		<React.Fragment>

			{renderEvent()}	

			<div style={{ position: 'relative', padding: '0 5%' }}>
				<img style={{ width: '100%', margin: 0 }} src="https://i.imgur.com/2yZzXcQ.jpg" alt="ieo_banner" />
			
			</div>


			<div id="sale-list" className="container-fluid">
				
			
				<div className="row">
					<div className="col-12 text-center">
						<h1  className="sale-list__title">Seja bem-vindo ao marketplace de tokens da Fortem ONE</h1>
						<h2 className="sale-list__subtitle">
							Seu ponto de partida para investir nos produtos mais rentáveis e seguros que o blockchain tem a oferecer.
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
 