import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import LoadingIframe from 'react-loading-iframe';


const Skeleton = () => {
    return <div>Cool loading screen</div>;
  };


const Data = [
    {
        countNum : 316,
        countTitle: 'Moedas',
    },
    {
        countNum : 372,
        countTitle: 'Mercados',
    },

];

const SlipThree = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
            
                        
                        {/*<iframe src="http://local.fortem-financial.io:3001/market/compusdt" style={{overflowY: 'hidden', minWidth: '800px', maxWidth:'1300px', height:'880px',   webkitTransform:'scale(0.9, 0.9)', mozTransform:'scale(0.2, 0.2)', pointer: 'none',   pointerEvents: 'none'}}>*/}

                        
                        <LoadingIframe
      skeleton={<Skeleton />}
      src="https://big.one/en/trade/BTC-USDT"
      className="iframe-tradingScreen"
      frameBorder={0}
      style={{minWidth: '800px', maxWidth:'1300px', height:'880px', minHeight: '712px', minHeight: '832px',  webkitTransform:'scale(0.9, 0.9)', mozTransform:'scale(0.2, 0.2)', pointer: 'none',   pointerEvents: 'none'}}
    />
        
                    </div>
                    <div className="col-lg-10 col-xl-6 col-10">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Fortem Cripto Pro</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">Para os traders mais experientes, oferecemos nossa plataforma Cripto Pro. Desenvolvida com componentes voltados a sistemas de missão crítica, a plataforma possui utra baixa latência, desempenho otimizado e alta estabilidade. Para que você aproveite os momentos de volatilidade dos mercados com segurança.</p>
                            </ScrollAnimation>
                            <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Trading Screen desenvolvida por especialistas e traders profissionais, com layout personalizável</li>
                                        <li><span className="icon"><FiCheck /></span> Alavancagem de até 20x</li>
                                        <li><span className="icon"><FiCheck /></span> Book de ofertas com baixíssimo spread, agregando as ordens das maiores exchanges do mundo</li>
                                        <li><span className="icon"><FiCheck /></span> Ordens avançadas: stop-market, stop-limit, trailing-stop, take-profit, take-profit limit</li>
                                        <li><span className="icon"><FiCheck /></span> Relatórios de desempenho em tempo real [em breve]</li>
                                    </ul>
                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once >
                                                
                                                    <div className="homepage-info__number">
                                                        <CountUp end={data.countNum} /> </div>
                                            </TrackVisibility >
                                            <h5 className="homepage-info__text">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipThree;