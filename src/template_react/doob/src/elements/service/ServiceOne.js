import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Fortem SIMPLE - Tokens',
        description: 'There are many variations variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <FiCast />,
        title: 'Fortem EXCHANGE - Criptoativos',
        description: 'Compre, venda ou converta criptomoedas. Negocie mais de 300 opções de criptomoedas com os melhores preços do mercado. Seja você um investidor iniciante ou um trader experiente,  '
    },
    {
        icon: <FiMap />,
        title: 'Fortem NFT - Colecionáveis',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <FiMap />,
        title: 'Fortem PAY - Soluções de Pagamento',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;