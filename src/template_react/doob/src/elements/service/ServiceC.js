import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/serviice-01.jpg',
        title: 'Fortem SIMPLE <br /> Emissor',
        description: 'Tire seus projetos do papel ou amplie seus negócios tokenizando seus ativos e obtendo crédito rápido e simplficado, com as melhores taxas'
    }
]
const ServiceC = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-12" key={i}>
       
                <div className={`card-box ${cardStyle} ${textAlign}`}>
                    <div className="inner" style={{ margin: '0 auto', }}>
                        <div className="image-service" style={{display: 'flex', alignContent: 'center', alignItems: 'center'}} >
                           
          
                        </div>
                        <div className="content" >
                            <h4 className="title title-text-serviceA mb--20 ml-70 align-items-center text-center"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                            <p className="b1 description-text-serviceA ml--50  mr-20" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            <Link className="btn-default btn-small btn-border btn-marketplace" to="/tokens">Saiba mais</Link>
                        </div>
                    </div>
                </div>
        </div>
            ))}
        </div>
    )
}
export default ServiceC;