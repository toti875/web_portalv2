


import React from 'react';
import { HomepageMarket } from '../../containers';
import { useHistory } from 'react-router-dom';
import { setDocumentTitle } from '../../helpers';


import { NewMarketSlick } from '../../components';
import { eventFetch, selectEvents, selectUserLoggedIn} from '../../modules';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
//import "./css/font-icons.min.css";
//import "./css/theme-vendors.min.css";
//import "./css/style.css";
//import "./css/responsive.css";

import 'animate.css';



//import Slider from "react-slick";

//import { BannerActivation } from "../../te  /utils/script";

import {TextDecrypt} from './TextDecrypt.js';

import { BannerActivation } from "../../template_react/doob/src/utils/script";

//import '../../template_react/doob/src/assets/scss/style.scss';
import ParticleImage, { ParticleOptions } from "react-particle-image";

import Particles1 from "./circle.png";


 

//import { SaleListTables } from '../../plugins/Sale/containers/SaleListTables';

import { TickerTape } from 'react-tradingview-embed';


import Cryp from './Home/Cryp.svg'; 
import background from './Home/background-bn.jpg';
import Bg_p3 from './Home/Bg_p3.svg';
import Bg_p4 from './Home/Bg_p4.svg';
import BG_SigUp from './Home/BG_Sigup.png';
import FaceBook from './Home/fb.svg';
import Feature1 from './Home/Feature1.svg';
import Feature2 from './Home/Feature2.svg';
import Feature3 from './Home/Feature3.svg';
import Feature4 from './Home/Feature4.svg';
import Feature5 from './Home/Feature5.svg';
import Feature6 from './Home/Feature6.svg';
import TelegramPNG from './Home/telegram.png';
import In from './Home/In.svg';
import Mobile from './Home/Mobile_BG.png';
import DownloadAPP from './Home/Screen1.png';
import DownloadGG from './Home/Screen2.png';
import Download2 from './Home/Screen3.png';
import Download1 from './Home/Screen4.png';
import Telegram from './Home/Telegram.svg';
import Udon from './Home/udon-img.svg';
import WhatApp from './Home/WhatApp.svg';
import YouT from './Home/ytb.svg';

import eventBackground from './images/banner.png'

import styled from 'styled-components';

import serviceBorder from './Home/Telegram.svg' ;
import LoadingIframe from 'react-loading-iframe';


import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

//import { transactionsListFetch } from 'modules/plugins/transactions';
//import { selectStatistics, statisticFetch } from 'modules/info/statistic';
import { useIntl } from 'react-intl';

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import ScrollAnimation from "react-animate-on-scroll";


import ServiceOne from "../../template_react/doob/src/elements/service/ServiceOne";
import ServiceA from "../../template_react/doob/src/elements/service/ServiceA";
import ServiceB from "../../template_react/doob/src/elements/service/ServiceB";
import ServiceC from "../../template_react/doob/src/elements/service/ServiceC";
import ServiceD from "../../template_react/doob/src/elements/service/ServiceD";
import ServiceE from "../../template_react/doob/src/elements/service/ServiceE";
import SectionTitle from "../../template_react/doob/src/elements/sectionTitle/SectionTitle";

import AboutTwo from "../../template_react/doob/src/elements/about/AboutTwo";
import SlipThree from "../../template_react/doob/src/elements/split/SlipThree";
import TestimonialOne from "../../template_react/doob/src/elements/testimonial/TestimonialOne";
import BlogList from "../../template_react/doob/src/components/blog/itemProp/BlogList";
import FooterOne from '../../template_react/doob/src/common/footer/FooterOne';

import ServiceTwo from '../../template_react/doob/src/elements/service/ServiceTwo';

import Separator from "../../template_react/doob/src/elements/separator/Separator";
import CounterUpTwo from "../../template_react/doob/src/elements/counterup/CounterUpTwo";
import TeamFour from '../../template_react/doob/src/elements/team/TeamFour';
import PricingTwo from '../../template_react/doob/src/elements/pricing/PricingTwo';
import CalltoActionFive from '../../template_react/doob/src/elements/calltoaction/CalltoActionFive';

import { CardView } from 'smart-webcomponents-react/cardview';

import BlogClassicData from '../../template_react/doob/src/data/blog/BlogList.json';
import { Divider } from 'antd';

import news from './images/news.svg';

import Particles from './particles/src/App';
import Token from './token.png';
import NFT from './nft.png';

import devices from './fortemDevices-Laptop.png';
import deviceLaptop from './fortemDevices-Laptop.png';
import devicePhone from './fortemDevices-iPhone.png';
import mobile from './fortem-mobile.png';


import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import { Parallax } from 'react-scroll-parallax';




var BlogListData = BlogClassicData.slice(0, 3);




const particleOptions: ParticleOptions = {
	filter: ({ x, y, image }) => {
	  // Get pixel
	  const pixel = image.get(x, y);
	  // Make a particle for this pixel if blue > 50 (range 0-255)
	  return pixel.b > 50;
	},
	color: ({ x, y, image }) => "#61dafb"
  };

//import HomePage from './home-business.html';

//import "./home-business.html";

//const mainPage = require('./home-business.html');

const Logo = require('../../assets/images/logo_branca_bandeira_verde.svg');

const Logo_Capital = require ('../../assets/images/svg/branco_capital_bandeira_verde.svg');

const Anime1 = require ('../../assets/animation/Bigscene-1-.json');

const mainBanner = require ('./main_banner.jpg');


const Skeleton = () => {
	return <div>Cool loading screen</div>;
  };

//const logo1 = require ('url(https://doob.rainbowit.net/images/bg/bg-image-5.jpg)')

//import mainPage  from "./home-business.html" as HTMLElement;




//var mainPage = require('./home-business.html');

const Wrap = styled.div`
  padding: 30px 30px 0 0;
  display: inline-block;
  background-image: ${encodeSVG(serviceBorder)};
`;

var symbols = /[\r\n"%#()<>?\[\\\]^`{|}]/g;

function addNameSpace(data) {
  if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
    data = data.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }

  return data;
}

function encodeSVG(data) {
  // Use single quotes instead of double to avoid encoding.
  if (data.indexOf('"') >= 0) {
    data = data.replace(/"/g, "'");
  }

  data = data.replace(/>\s{1,}</g, '><');
  data = data.replace(/\s{2,}/g, ' ');

  return data.replace(symbols, encodeURIComponent);
}

var encode = function(svg, fill) {
  if (fill) {
    svg = svg.replace(/<svg/g, `<svg fill="${fill}"`);
  }
  var namespaced = addNameSpace(svg);
  var dimensionsRemoved = namespaced
    .replace(/height="\w*" /g, '')
    .replace(/width="\w*" /g, '')
    .replace(/height='\w*' /g, '')
    .replace(/width='\w*' /g, '');
  var encoded = encodeSVG(dimensionsRemoved);

  var header = 'data:image/svg+xml,';
  var dataUrl = header + encoded;  

  return `url("${dataUrl}")`;
};
export const SALE_UDON_CONFIG = {
	udonTotalNumber: 2 * 10 ** 12,
	udonTotalText: '2.000.000.000.000',
	endTime: 'Nov 5,2021',
	priceText: '0,000001 USD',
	priceNumber: '0.000001',
	saleCurrencies: ['bnb', 'usdt', 'busd'],
	address: '0x8606d59312150A2970377502b607c36084aC4806',
};



const BannerData = [
    {
        image: Logo,
        title: "Conecte-se com ",
        description: "Aqui, a gente respira o novo e constrói a nova geração de investimentos." ,
		image_background: mainBanner,
    },
    
]

const BannerData2 = [
    {
        image: Logo,
        title: "Conecte-se com ",
        description: "ativos digitais" ,
		image_background: mainBanner,
    },
	{
        image: Logo,
        title: "Conecte-se com ",
        description: "crédito" ,
		image_background: mainBanner,
    },
    
]


export const FortemIOHomePage = () => {
	setDocumentTitle('Homepage');



	const intl = useIntl();

	const dispatch = useDispatch();
	const history = useHistory();
	const isLogin = useSelector(selectUserLoggedIn);
	//const statistics = useSelector(selectStatistics);
	
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
	};


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

	const BannerSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 6000,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};


	
	

	React.useEffect(() => {
		//dispatch(eventFetch());
		//dispatch(transactionsListFetch({ limit: 20, page: 0 }));
		//dispatch(statisticFetch());
	}, []);

	const events = useSelector(selectEvents);

	

	const translate = (key: string) => intl.formatMessage({ id: key });

	const redirectSingUP = () => {
		history.push('/banner/authentication/sign-up/basic');
	};
	const redirectTrading = () => {
		history.push('/trade');
	};

	{/*
	// index.js
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload0");
    image.style.transform = "rotateX(" + window.scrollY/4 + "deg)";
	
}
*/}



	const renderBanner = () => (
		
<>
		
		<Slider className="slider-area slider-style-4 variation-2 " {...BannerSettings}>
		
		{BannerData.map((data, index) => (
			<div key={1} className="single-slide">
				<div className="bg-overlay bg_image" style={{ width: '100%', height: '800px', backgroundPosition: '1% 80%',}}>
				<img src={data.image_background} style={{filter: 'blur(1px)', backgroundPosition: '1% 80%', backgroundSize: 'cover', opacity: '0.2', width: '100%', height: '800px'}}/>
				<img className="logo" src={Logo} style={{ opacity: '1 !important', position: 'absolute', color: 'white', background: 'transparent', width: '460px',  top: '210px', paddingLeft: '30px'}}  />
					<div className="container2 position-relative">
						
						

						<div className="row row--30 align-items-center">
							<div className="col-lg-12">
								<div className="align-items-center justify-items-center" style={{display: 'flex', justifyContent: 'center'}}>
										<h3 className="description justify-center animate_flash" style={{fontFamily: 'Alliance1', fontSize: '40px', fontWeight: 'bold', justifyContent: 'center', position: 'absolute', left: '100px', top: '-420px', color: 'white', display: 'flex',  width: '680px', }}> Fortem ONE é a plataforma especializada em  </h3>
										<br/>
										<h3  className=" animate__animated animate__bounce animate__animated animate_flash" style={{opacity: '0.8', fontFamily: 'Alliance1', fontSize: '36px', fontWeight: 'bold', position: 'absolute', left: '100px', top: '-310px', width: '680px', color: '#1EDED0'}} > 
										<Typed
                                            strings={[
                                                "ativos digitais",
												"melhores créditos",
                                                "alta rentabilidade",
                                                "diversificação",
												"segurança",
												
                                            ]}
                                            typeSpeed={100}
                                            backSpeed={50}
                                            backDelay={1900}
                                            loop
                                        />
										</h3>
										
										<Zoom interval={20000} delay={10000} forever={false} duration={8000}>
											<h3 className="description justify-center animate__animated animate__bounce" style={{position: 'absolute',  top: '-220px', left: '104px',  display: 'flex', fontSize: '20px', width: '100%', }}> {data.description}</h3>
										</Zoom>
										<Zoom interval={20000} delay={18000} forever={false} duration={6000}>
											<h3 className="description justify-center animate__animated animate__bounce" style={{opacity: '0.2', position: 'absolute',  top: '-180px', left: '104px',  display: 'flex', fontSize: '20px', width: '100%', }}> Re-escrevendo o futuro dos investimentos</h3>
										</Zoom>

										{isLogin ? (
								<button className="btn-Register btn-none" onClick={redirectTrading} style={{position: 'absolute',   bottom: '370px', left: '60%'}}>
									{translate('page.homePage.trade.btn.trade')}
								</button>
							) : (
								<><a className="btn-default btn-icon icon-btn-wrap" href="/banner/authentication/sign-in/basic" style={{fontSize: '20px', position: 'absolute',  bottom: '370px', left: '50%', background: 'transparent'}}>Acessar plataforma <i className="icon"><FiArrowRight /></i></a>
							
																<button className="btn-icon btn-default" onClick={redirectSingUP} style={{fontSize: '20px', position: 'absolute',  bottom: '370px', left: '65%'}}>
																{translate('page.homePage.trade.btn.signup')}
															</button></>
							)}


										</div>
							</div>
						</div>
						</div>
				</div>
				<div style={{}} >{renderMarketSlick()}	</div>
			</div>




		))}
		
	</Slider>
	

	
	<div className="overflow-hidden" >
		<section className='section pd-top-300px wf-section'>
			<div className='container-default w-container'>
				<div className='mg-bottom-48px'> 
					<div className="inner-container _912px center">
						<div className="text-center">
							<div className="position-relative">
								<div className="position-relative z-index-1">
								<Parallax rotateX={[-90, 0]} easing="easeInOutCirc">

									<h2 data-w-id="2f13477a-efb0-0f82-999f-982786d80614" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1}} className="display-2">
										Plataforma 
										<span className="color-accent">.<br /></span>
										<span>para todas as suas necessidades</span>
										<span className="color-accent">.</span>
									</h2>
									</Parallax>
								</div>
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}></ScrollAnimation>
								<div className="position-absolute top number-01">
									<div className="text-big-outline" style={{opacity: 1}}>
										<TextDecrypt text={`01`} /></div>
								</div>
								<ScrollAnimation />
							</div>
						</div>
					</div>
				</div>

				<div className="container rn-section-gap" style={{display: 'flex', flexDirection: 'row', }}>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className='servicesFortem'>
							<div className=" bg_image servicesFortem-inner"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginLeft: '-240px'  }} >
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceA cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className='servicesFortem'>
							<div className=" bg_image servicesFortem-inner"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginTop: '280px', marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceB cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className='servicesFortem'>
							<div className=" bg_image servicesFortem-inner"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceC cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className='servicesFortem'>
							<div className=" bg_image servicesFortem-inner"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginTop: '280px', marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceD cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className='servicesFortem'>
							<div className=" bg_image servicesFortem-inner"  style={{  width: '460px', height: '450px', backgroundImage: `url(${serviceBorder})`,  marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceE cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</div>
							</ScrollAnimation>
						</div>


						<div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = ""
                                    title = "Nosso desejo implacável de revolucionar flui através de tudo o que fazemos"
                                    description = "Os mercados e as relações de consumo estão constantemente sendo transformados pela tecnologia.  Aqui no Portal da Fortem ONE você encontra soluções completas e inovadoras, estruturadas através de ativos digitais. <br /> Seja para você diversificar seus investimentos com segurança, planejar a sua indepência financeira, ou construir a sua reserva de emergência. <br /> Seja para sua empresa ou projeto, sair do papel ou  expandir sua base de clientes, otimizar sua captação de recursos e fluxo de caixa, ou diminuir seus custos operacionais. <br /> Estamos aqui para construirmos juntos uma nova era, democratizando o acesso aos melhores investimentos, expandindo e descentralizando ofertas de crédito e colocando você no controle e na posse do que é seu.  "
                                    />
                            </div>
                        </div>
					</div>
</div>


				<Slider {...settings} className='rn-section-gap'>
				
	
				<div key={1} className="single-slide">
				<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
					<div className="w-layout-grid grid-2-columns cta-part-section-grid">
						<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
							<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
								<div className="mg-bottom-16px">
									<div className="title-border-left">
										<h3 className="animate__animated animate__bounce">
											Invista em
											<span className="color-accent">+300 <br /></span>
											Ativos Digitais com  <br /> liquidez global
											

										</h3>
									</div>
								</div>
								<div className="inner-container _628px">
									<p className="animate__animated animate__bounce">
										"A Fortem ONE é a única plataforma nacional conectada diretamente às maiores exchanges de cripto ativos do mundo.  "
										<span className="text-no-wrap">dui egestas.</span>
									</p>
									
									<button className='btn-Register' > 
										<span>Abra sua conta</span> 
									</button> 
										
									
								</div>
							</div> 
						</div>
						<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper">
								<img src="https://assets.website-files.com/624f34ee3b91afefdf14076f/625448c88ca8d4a32d63674c_image-stats-blockchain-template.png" loading="eager" alt="Buy 100+ Crypto Assets Fast And Secure - Blockchain X Webflow Template" className="image cover" />
							<div className="position-absolute top-left world-stats-01" style={{willChange: 'opacity, transform', opacity: 0.89327, transform: 'translate3d(0px, 0px, 0px) scale3d(0.997865, 0.997865, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
								<div className="world-stats-wrapper">
									<div className="display-4 display-shadow" style={{marginLeft: '80px', marginTop: '-30px'}}>
										1M
										<span className="color-accent">+</span>
									</div>
									<h3 className="display-4 mg-bottom-0" style={{fontSize: '18px', marginLeft: '80px', }}>Usuários ativos</h3>
								</div> 
							</div>
							<Parallax translateY={[-20, 10]} style={{ background: 'blue' }} className="test">
							<div className="position-absolute bottom-left world-stats-02" style={{willChange: 'opacity, transform', opacity: 0.9401, transform: 'translate3d(0px, 0px, 0px) scale3d(0.998802, 0.998802, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
							
								<div className="world-stats-wrapper">
									<div className="display-4 display-shadow" style={{marginLeft: '160px'}}>
										80
										<span className="color-accent">%</span>
									</div>
									<h3 className="display-4 mg-bottom-0" style={{fontSize: '18px', marginLeft: '160px'}}>de spread</h3>
								</div> 
								
							</div>
							</Parallax>
							
							<div className="position-absolute top-right world-stats-03" style={{willChange: 'opacity, transform', opacity: 0.9401, transform: 'translate3d(0px, 0px, 0px) scale3d(0.998802, 0.998802, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
								<div className="world-stats-wrapper">
									<div className="display-4 display-shadow" style={{marginLeft: '-490px'}}>
										80
										<span className="color-accent">%</span>
									</div>
									<h3 className="display-4 mg-bottom-0" style={{fontSize: '18px', marginLeft: '-490px'}}>de spread</h3>
								</div> 
							</div>

							<div className="position-absolute bottom-right world-stats-04" style={{willChange: 'opacity, transform', opacity: 0.62273, transform: 'translate3d(0px, 0px, 0px) scale3d(0.992455, 0.992455, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
								<div className="world-stats-wrapper">
									<div className="display-4 display-shadow" style={{marginLeft: '-290px'}}>
										80
										<span className="color-accent">%</span>
									</div>
									<h3 className="display-4 mg-bottom-0" style={{fontSize: '18px', marginLeft: '-290px'}}>de spread</h3>
								</div> 
							</div>


							<div className="position-absolute bg-circle cta-part-section"></div>

						</div>
					</div>
				</div>
				</div>

<div key={2} className="single-slide">

<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
<div>

	<div className="w-layout-grid grid-2-columns cta-part-section-grid">
		<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
			<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
				<div className="mg-bottom-16px">
					<div className="title-border-left">
						<h3 className="display-3 mg-bottom-0">
							Invista em
							<span className="color-accent">+300 <br /></span>
							Ativos Criptos 
						</h3>
					</div>
				</div>
				<div className="inner-container _628px">
					<p className="mg-bottom-32px">
						"Compre, venda ou converta criptoativos com os melhores preços, em poucos cliques. Aproveite a diversidade de criptoativos em uma interface intuitiva e completa para todos os perfis."
						<span className="text-no-wrap">dui egestas.</span>
					</p>

					<button className='btn-Register' > 
						<span>Abra sua conta</span> 
					</button> 

					
				</div>
			</div> 
		</div>
		<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper"  style={{backgroundColor: 'transparent', height: '100%', backgroundImage: `url("https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-800.png")`}}>
		

		<div className='container-default w-container' >
			<div className='position-relative' >
				<div className='w-layout-grid grid-2-columns text-left-large'>
					<div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1' >
						< div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1'>
						</div>
					</div>
					<div id="w-node-_9f488382-c649-058f-76bd-e6c17d1dd59e-2e306f0f" data-w-id="9f488382-c649-058f-76bd-e6c17d1dd59e" style={{opacity: 1, willChange: 'transform', transform: 'translate3d(0px, 4.01px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d',}}>
		

					</div>

				</div>
			</div>
		</div>
		</div>
		<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg" loading="eager" alt='position-absolute full section-bg' className='position-absolute full section-bg'/> 
		

			<div className='position-absolute bottom fade' />

		</div>
	</div>
</div>
</div>




<div key={3} className="single-slide">

<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
<div>

	<div className="w-layout-grid grid-2-columns cta-part-section-grid">
		<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
			<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
				<div className="mg-bottom-16px">
					<div className="title-border-left" >
						<h3 className="display-3 mg-bottom-0">
							Invista em
							<span className="color-accent">+300 <br /></span>
							Ativos Criptos 
						</h3>
					</div>
				</div>
				<div className="inner-container _628px">
					<p className="mg-bottom-32px" style={{textRendering: 'optimizeLegibility'}}>
						"Compre, venda ou converta criptoativos com os melhores preços, em poucos cliques. Aproveite a diversidade de criptoativos em uma interface intuitiva e completa para todos os perfis."
						<span className="text-no-wrap">dui egestas.</span>
					</p>
					
					<button className='btn-Register' > 
						<span>Abra sua conta</span> 
					</button> 
						
					
				</div>
			</div> 
		</div>
		<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper"  style={{backgroundColor: 'transparent', height: '100%' }}>
		
			<ParticleImage
      src={Particles1}
      scale={0.75}
      entropy={20}
      maxParticles={6200}
      particleOptions={particleOptions} style={{width: '100%', backgroundColor: 'transparent', borderRadius: '100px'}}
							/>
	 


		</div>
		

			<div className='position-absolute bottom fade' />

		</div>
	</div>
</div>
</div>

<div key={4} className="single-slide">

<div data-w-id="49ba8199-44af-7440-391c-d9656fe42200" className="card cta-part-section" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
<div>

	<div className="w-layout-grid grid-2-columns cta-part-section-grid">
		<div id="w-node-_99dc8130-6570-a167-3af8-c9281f72c055-2e306f0f" className="position-relative z-index-2">
			<div id="w-node-_5cc181b4-8b75-cd7a-679b-c9ede103bf72-2e306f0f" className="inner-container _97 _100---tablet">
				<div className="mg-bottom-16px">
					<div className="title-border-left" >
						<h3 className="display-3 mg-bottom-0">
							Invista em
							<span className="color-accent">+300 <br /></span>
							NFTs 
						</h3>
					</div>
				</div>
				<div className="inner-container _628px">
					<p className="mg-bottom-32px">
						"Compre, venda ou converta criptoativos com os melhores preços, em poucos cliques. Aproveite a diversidade de criptoativos em uma interface intuitiva e completa para todos os perfis."
						<span className="text-no-wrap">dui egestas.</span>
					</p>
					
					<button className='btn-Register' > 
						<span>Abra sua conta</span> 
					</button> 
						
					
				</div>
			</div> 
		</div>
		<div id="w-node-_63999b7c-6bb5-477e-a990-ce743ee613f1-2e306f0f" className="cta-part-section-mockup-wrapper"  style={{backgroundColor: 'transparent', height: '100%' }}>
		
		{/*	<ParticleImage
      src={Particles1}
      scale={0.75}
      entropy={20}
      maxParticles={6200}
      particleOptions={particleOptions} style={{width: '100%', backgroundColor: 'transparent', borderRadius: '100px'}}
							/>	*/}
	 <img src={NFT} />


		</div>
		

			<div className='position-absolute bottom fade' />

		</div>
	</div>
</div>
</div>


				
				</Slider>
			
			<div className="w-layout-grid grid-3-columns gap-48px _1-col-tablet gap-row-100px">
				<div id="w-node-_2f13477a-efb0-0f82-999f-982786d80619-2e306f0f" className="border-bottom">
					<div className="mg-bottom-50px">
						<div className="inner-container _82px">
							<div className="image-wrapper">
								<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c64a9306f78_icon-1-features-section-blockchain-template.svg" loading="eager" alt="Secure & Encrypted Crypto Wallet - Blockchain X Webflow Template" className="image cover"></img>
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"Secure & encrypted crypto wallet"
					<span className="color-accent">.</span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>  
			</div>
			<div id="w-node-_0cbf1d8f-f8bb-0b9d-a837-f1a2579de295-2e306f0f" className="border-bottom">
				<div className="mg-bottom-50px">
					<div className="inner-container _82px">
						<div className="image-wrapper">
							<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c0b8f306f76_icon-2-features-section-blockchain-template.svg" loading="eager" alt="Send & Receive Crypto Tokens - Blockchain X Webflow Template" className="image cover" /> 
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"TRANSFERENCIAS"
					<span className="color-accent"></span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>
			</div>
			<div id="w-node-_0cbf1d8f-f8bb-0b9d-a837-f1a2579de295-2e306f0f" className="border-bottom">
				<div className="mg-bottom-50px">
					<div className="inner-container _82px">
						<div className="image-wrapper">
							<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c0b8f306f76_icon-2-features-section-blockchain-template.svg" loading="eager" alt="Send & Receive Crypto Tokens - Blockchain X Webflow Template" className="image cover" /> 
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"TRANSFERENCIAS"
					<span className="color-accent"></span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>
			</div>
			<div id="w-node-_0cbf1d8f-f8bb-0b9d-a837-f1a2579de295-2e306f0f" className="border-bottom">
				<div className="mg-bottom-50px">
					<div className="inner-container _82px">
						<div className="image-wrapper">
							<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c0b8f306f76_icon-2-features-section-blockchain-template.svg" loading="eager" alt="Send & Receive Crypto Tokens - Blockchain X Webflow Template" className="image cover" /> 
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"TRANSFERENCIAS"
					<span className="color-accent"></span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>
			</div>
			<div id="w-node-_0cbf1d8f-f8bb-0b9d-a837-f1a2579de295-2e306f0f" className="border-bottom">
				<div className="mg-bottom-50px">
					<div className="inner-container _82px">
						<div className="image-wrapper">
							<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c0b8f306f76_icon-2-features-section-blockchain-template.svg" loading="eager" alt="Send & Receive Crypto Tokens - Blockchain X Webflow Template" className="image cover" /> 
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"TRANSFERENCIAS"
					<span className="color-accent"></span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>
			</div>
			<div id="w-node-_88ce9b50-bb11-0f4f-93a1-6542e5992bbc-2e306f0f" className="border-bottom">
				<div className="mg-bottom-50px">
					<div className="inner-container _82px">
						<div image-wrapper>
							<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c9c88306f77_icon-3-features-section-blockchain-template.svg" loading="eager" alt="Watch And Analyze Charts In Real-time - Blockchain X Webflow Template" className="image cover"></img>
						</div>
					</div>
				</div>
				<h3 className="display-4">
					"VOLUME"
					<span className="color-accent">.</span>
				</h3>
				<p className="mg-bottom-0">
					"Quam facilisi gravida in morbi blandit imperdiet urna ut metus pharetra orci ut cursus diam ut urna mi pharetra nibh neque mi cursus nec donec morbi non hendrerit "
					<span className="text-no-wrap">in gravida .</span>
				</p>
			</div>
			</div>
			</div>

			
		</section>



	</div>




{/*
		<div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url("https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg")`}}>
		<section className='section pd-top-390 wf-section section-2143' > 
		<div className='container-default w-container' >
			<div className='position-relative' >
				<div className='w-layout-grid grid-2-columns text-left-large'>
					<div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1' >
						< div id="w-node-_8739d627-4653-f82b-1c08-3d2b5647b690-2e306f0f" className='position-relative z-index-1'>
						</div>
					</div>
					<div id="w-node-_9f488382-c649-058f-76bd-e6c17d1dd59e-2e306f0f" data-w-id="9f488382-c649-058f-76bd-e6c17d1dd59e" style={{opacity: 1, willChange: 'transform', transform: 'translate3d(0px, 4.01px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d',}}>
						<img src='https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template.png' loading="eager" sizes='(maxWidth: 479px) 100vw, (maxWidth: 767px) 432px, (maxWidth: 991px) 73vw, (maxWidth: 1439px) 74vw, 1010.234375px' srcSet="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-500.png 500w, https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template-p-800.png 800w, https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c4e1f306f7a_image-features-blockchain-template.png 1520w" alt="A Crypto Wallet From The Future - Blockchain X Webflow Template" className='image' />

					</div>

				</div>
			</div>
		</div>
		<img src="https://assets.website-files.com/62a9184508598c19a1306f0c/62a9184508598c1542306f75_image-mesh-hero-blockchain-template.svg" loading="eager" alt='position-absolute full section-bg' className='position-absolute full section-bg'/> 
		

			<div className='position-absolute bottom fade' />

	</section>
	</div>
						*/}
	</>


	);

const renderServices = () => (
<>
	               {/* Start Service Area  */}

				   <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = ""
                                    title = "Nosso desejo implacável de revolucionar flui através de tudo o que fazemos"
                                    description = "Os mercados e as relações de consumo estão constantemente sendo transformados pela tecnologia.  Aqui no Portal da Fortem ONE você encontra soluções completas e inovadoras, estruturadas através de ativos digitais. <br /> Seja para você diversificar seus investimentos com segurança, planejar a sua indepência financeira, ou construir a sua reserva de emergência. <br /> Seja para sua empresa ou projeto, sair do papel ou  expandir sua base de clientes, otimizar sua captação de recursos e fluxo de caixa, ou diminuir seus custos operacionais. <br /> Estamos aqui para construirmos juntos uma nova era, democratizando o acesso aos melhores investimentos, expandindo e descentralizando ofertas de crédito e colocando você no controle e na posse do que é seu.  "
                                    />
                            </div>
                        </div>
					</div>
                    
						<div className="container" style={{display: 'flex', flexDirection: 'row', }}>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className=" bg_image"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginLeft: '-240px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceA cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className=" bg_image"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginTop: '280px', marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceB cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className=" bg_image"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceC cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className=" bg_image"  style={{  width: '470px', height: '460px', backgroundImage: `url(${serviceBorder})`, marginTop: '280px', marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceD cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={false}>
							<div className=" bg_image"  style={{  width: '460px', height: '450px', backgroundImage: `url(${serviceBorder})`,  marginLeft: '-140px'}}>
								<div className="container position-relative">
									<div className="inner" style={{display: 'flex',}}>
						
                 
										<ServiceE cardStyle = "card-style-2" textAlign = "center"/>
					
									</div>
								</div>
							</div>
							</ScrollAnimation>
						</div>
						

					  
				   </div>
			   
			   {/* End Service Area  */}








			   </>


)

	

const renderBlog = () => (
<main className="page-wrapper">



<Separator />
<div className="blog-area rn-section-gap">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<SectionTitle
					textAlign = "text-center"
					radiusRounded = ""
					subtitle = ""
					title = "Veja o que está acontecendo através do nosso Blog"
					description = ""
				/>
			</div>
		</div>      
		<div className="row row--15">
			{BlogListData.map((item) => (
				<div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
					<BlogList StyleVar="box-card-style-default" data={item} />
				</div>
			))}
		</div>
	</div>
</div> 

</main>


	);

	

	const renderInfo = () => {
		const InfoItem = ({ name, value, color = '' }) => {
			return (
				<div className="homepage-info">
					<div>
						<h2 className="homepage-info__number" style={{ border: `5px solid ${'#1EDED0'}`, color: `${'#fff'}` }}>
							{value}
						</h2>
					</div>
					<div>
						<h4 className="homepage-info__text">{name}</h4>
					</div>
				</div>
			);
		};

		return (
			<div className="container mt-3">
				<div className="row px-3">
					<div className="col-4">
						{/*<InfoItem name={'Currencies'} value={statistics.currencies} color="#99FFE7" />*/}
						<InfoItem name={'Cripto'} value={240} color="#fff" />
					</div>
					<div className="col-4">
						<InfoItem name={'Tokens'} value={8} color="#fff" />
					</div>
					<div className="col-4">
						<InfoItem name={'Mercados'} value={219} color="#fff" />
					</div>
				</div>
			</div>
		);
	};
	
	const renderMarketSlick = () => <NewMarketSlick />;
	
	const RedirectMarketList = () => {
		history.push('/markets');
	};


	const renderEvent = () => {
		return (
		
			<div className="homepage-event  rn-header header-default " style={{background: '#000',  margin: '0px auto', marginLeft: '5px', display: 'flex', flexDirection: 'row', height: '36px', borderTop: '2px solid #46473E', borderBottom: '2px solid #46473E', minWidth: '100px', }}> 
			
				<div  className="news-event "  style={{margin: '0 auto', maxWidth: '80px', background: '#000', alignItems: 'center',  color: '#1EDED0', borderRight: '1px solid gray', fontSize: '16px',  maxHeight: '32px' }}>
				<Pulse forever={true}>	<img src={news} style={{ marginTop: '-5px', minWidth: '30px', }}></img></Pulse>
									
				</div>

				<div className="container2  theme-shape-root"  style={{  background: '#000', color: '#1EDED0', alignItems: 'center',   marginLeft: '10px', height: '26px', backgroundColor: '#000'}}>


					<Slider {...settingEvents}>
						{[...events.payload].map(event => {
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



	const renderMarket = () => (
		<div className="market bg-transparent  theme-shape-root content-wrapper bg-transparent slider-style-1">
			<div className="container">
								<div className="home-market">
					<HomepageMarket />
				
				
					<button className="btn-mainPage-AllMarkets" onClick={RedirectMarketList}><span>Ver mais ativos</span></button>
				</div>
			</div>
		</div>
	);
	//
	const renderFeature = () => (
		<div className="feature">
			<div className="container"  style={{   border: '400px solid', borderImage: `url(${serviceBorder})`, width: '100%',   background: 'transparent', position: 'relative'}}>
				<img src={Feature2} alt="Feature12" style={{position: 'absolute'}}/>
				<div className="feature-row">
					<div className="feature-row__col">
						<div className="feature-box feature-box__top">
							<div className="feature-box__icon ">
								<img src={Feature1} alt="Feature1" style={{ position: 'absolute' }}/>
							</div>
							<span className="feature-box__title">User-friendly and customizable interfaces with conventional tools.</span>
						</div>
						<div className="feature-box2"   style={{   border: '200px solid', borderImage: `url(${serviceBorder})`, width: '290px', height: '290px', padding: '10px'}}>
							<div className="feature-box__icon" >
								<div >
						
								<img src={Feature2} alt="Feature12" />
								</div>
					
							</div>
						</div>
					</div>
					<div className="feature-row__col">
						<div className="feature-box feature-box__top">
							<div className="feature-box__icon">
								<img src={Feature3} alt="Feature1" />
							</div>
							<span className="feature-box__title">Security of user information and funds is our first priority.</span>
						</div>
						<div className="feature-box">
							<div className="feature-box__icon">
								<img src={Feature4} alt="Feature1" />
							</div>
							<span className="feature-box__title">Professional market analytics</span>
						</div>
					</div>
					<div className="feature-row__col">
						<div className="feature-box feature-box__top">
							<div className="feature-box__icon">
								<img src={Feature5} alt="Feature1" />
							</div>
							<span className="feature-box__title">Processing speed transactions and TCP connections.</span>
						</div>
						<div className="feature-box">
							<div className="feature-box__icon">
								<img src={Feature6} alt="Feature1" />
							</div>
							<span className="feature-box__title">API Documentation.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	//


	const renderDownloadDevices = () => {
		return (
			<div className="homepage-download rn-section-gap">
				<div className="container">
					<div className="main-homepage-download">
						<div className="row dowdload-box">
							<div className="col-5 dowdload-box__box-1" style={{ paddingTop: 100 }}>
								<div className="row ">
									<div className="col-12">
										<div className="d-flex justify-content-start">
										<h3 className="trading-title">Agora não há mais motivos para você ficar de fora. </h3>
									</div>
									<div>
									<p className="trading-description">
							Download Fortem APP, you will be able to easily at any time, anywhere trading global mainstream,
							popular digital assets.
						</p>
										</div>
					
									</div>
								</div>
								<div className="row pt-5">
									<div className="col-12">
										<div
											className="grid-container"
											style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}
										>
											<div>
												<img
													className="img-fluid"
													src={DownloadAPP}
													style={{ borderRadius: 10 }}
													alt="google+play"
												/>
											</div>
											<div style={{ marginLeft: -100 }}>
												<img
													className="img-fluid"
													src={DownloadGG}
													style={{ borderRadius: 10 }}
													alt="android+store"
												/>
											</div>
											<div className="mt-3">
												<img
													className="img-fluid"
													src={Download2}
													style={{ borderRadius: 10 }}
													alt="app+store"
												/>
											</div>
											<div className="mt-3" style={{ marginLeft: -100 }}>
												<img
													className="img-fluid"
													src={Download1}
													style={{ borderRadius: 10 }}
													alt="scan+qrcode"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-7 dowdload-box__box-2" style={{ position: 'relative' }}>
							<Flip top cascade>

							<img
									src={devicePhone}
									alt="exchange"
									style={{ position: 'absolute', zIndex: 100, top: -30, left: -145, width: '45%' }}
								/>

								<img
									src={deviceLaptop}
									alt="exchange"
									style={{ position: 'absolute', zIndex: 100, top: -98, left: 0, width: '100%' }}
								/>
							</Flip>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	};

	const renderTrade = () => {
		return (
			<div className="homepage-trade rn-section-gap circle-1 circle-2 circle-3">
				<div className="circle-2 theme-shape content-wrapper bg-transparent slider-style-1 ">
					<div className="circle-2 theme-shape content-wrapper bg-transparent slider-style-1 circle-1">
						<h3>{translate('page.homePage.trade.start')} </h3>
						<p>{translate('page.homePage.trade.title')}</p>
						<div className="main-homepage-trade__btn">
							{isLogin ? (
								<button className="main-homepage-trade__btn__button btn-none" onClick={redirectTrading}>
									{translate('page.homePage.trade.btn.trade')}
								</button>
							) : (
								<button className="main-homepage-trade__btn__button btn-active" onClick={redirectSingUP}>
									{translate('page.homePage.trade.btn.signup')}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
        <div className="fortem-mainPage">
		
	


     {/*
		
			<div className="marketSlick">
                {renderMarketSlick()}
			</div>							        			
	*/}
	
		
	
			{renderEvent()}				
			

			{renderBanner()}
			

			{renderMarket()}

			{renderDownloadDevices()}

            {renderMarket()}

			<Parallax rotateX={[-120, 0]} easing="easeOutQuart" >
				<img src={mobile} style={{backgroundImage: 'radial-gradient(300px at center, #4a4a4a, transparent )', display: 'block', transformOrigin: '80% 0px', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', height: '740px', width: '680px', objectFit: 'contain', }} className="theme-shape-center" />
			</Parallax>

			{renderBlog()}

			<CalltoActionFive />
			
		
          
	
		
			{/*<Player
  autoplay
  loop
  src="https://assets1.lottiefiles.com/packages/lf20_8wuout7s.json"
  style={{ height: '640px', width: '640px', background: 'black' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>*/}



	
            </div>
		
 
	);
};
