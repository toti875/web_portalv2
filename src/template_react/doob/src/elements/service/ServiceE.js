import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/serviice-01.jpg',
        title: 'Pagamentos',
        description: 'Para você ou sua empresa, realize transações com ativos digitais de forma segura e instantânea'
    }
]
const ServiceE = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                  <div className="col-12" key={i}>
       
                  <div className={`card-box ${cardStyle} ${textAlign}`}>
                      <div className="inner" style={{ margin: '0 auto', }}>
                          <div className="image-service" style={{display: 'flex', alignContent: 'center', alignItems: 'center'}} >
                             
            
                          </div>
                          <div className="content" >
                              <h4 className=" title-text-serviceA mb--20 ml-10 align-items-center text-center mt--100"><Link to="#" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                              <p className="b1 description-text-serviceA ml--60  mr-20 align-items-center text-center" dangerouslySetInnerHTML={{__html: val.description}}></p>
                              <Link className="btn-default btn-small btn-border btn-marketplace-soon mt--20" to="#">Em breve</Link>
                          </div>
                      </div>
                  </div>
          </div>
            ))}
        </div>
    )
}
export default ServiceE;