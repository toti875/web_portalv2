import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";

import bgCTA from './bgCTA.jpg';
import bgCTARegister from './bgCTA2.jpg';


const callToActionData = {
    title: "Pronto para iniciar sua jornada digital?",
    subtitle: "Os melhores investimentos globais agora à sua disposição. Comece a investir em ativos digitais hoje mesmo!",
    btnText: "Abra sua conta",
}

const CalltoActionFive = () => {
    return (
        <section className="parallax wow animate__fadeIn" data-parallax-background-ratio="0.2" style={{backgroundImage: `url(${bgCTARegister})`}}>

        <div className="rn-callto-action clltoaction-style-default style-5">
            {/*<div className="container">*/}
                <div className="row row--0 align-items-center content-wrapper theme-shape">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="call-to-btn text-center">
                                        <a className="btn-default btn-icon" href="/register">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
        </section>
    )
}
export default CalltoActionFive;