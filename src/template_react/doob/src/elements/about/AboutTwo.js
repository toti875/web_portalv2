import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import LoadingIframe from 'react-loading-iframe';

const Skeleton = () => {
    return <div>Cool loading screen</div>;
  };


const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
            <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                        {/*<iframe src="http://local.fortem-financial.io:3001/market/compusdt" style={{overflowY: 'hidden', width:'1024px', height:'880px',   webkitTransform:'scale(0.9, 0.9)', mozTransform:'scale(0.2, 0.2)', pointer: 'none',   pointerEvents: 'none'}}>*/}
                        <LoadingIframe
      skeleton={<Skeleton />}
      src="https://google.com"
      className="your-class"
      frameBorder={0}
    />
                        Your browser doesn't support iframes
                        
                        
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">Corporate About.</span></h4>
                                    <h2 className="title mt--10">About Our Business.</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!</p>

                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Track your teams progress with mobile app.</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Your teams progress with mobile app.</li>
                                    </ul>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">More About Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
