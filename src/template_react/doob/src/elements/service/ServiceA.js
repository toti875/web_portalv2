import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import serviceImage from '../../assets/images/nft-animated.gif';

const ServiceList = [
    {
        image: serviceImage,
        title: "TOKENS",

        description: 'Invista nos tokens com os melhores rendimentos e com a segurança da blockchain'
    }
]
const ServiceA = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-12" key={i}>
       
                        <div className={`card-box ${cardStyle} ${textAlign}`}>
                            <div className="inner" style={{ margin: '0 auto', }}>
                                <div className="image-sservice" style={{display: 'flex', alignContent: 'center', alignItems: 'center'}} >
                                   
                  
                                </div>
                                <div className="content" >
                            <h3 className="title title-text-serviceA mb--20 ml-10 align-items-center text-center" style={{marginTop: '90px', fontFamily: 'Rubik Dirt'}} >{val.title}</h3>
                                    <p className="b1 description-text-serviceA ml--60  mr-20 align-items-center text-center" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                    <Link className="btn-default btn-border btn-marketplace" to="/tokens">Marketplace</Link>
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}
export default ServiceA;