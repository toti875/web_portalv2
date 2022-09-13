import React from 'react';
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderTwo from '../common/header/HeaderTwo';
import FooterOne from '../common/footer/FooterOne';


import CalltoActionSix from "../elements/calltoaction/CalltoActionSix";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutTwo from "../elements/about/AboutTwo";
import SlipThree from "../elements/split/SlipThree";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);



const Finance = () => {
    return (
        <>
 
            <main className="page-wrapper">
    


         
                <Separator />

                 {/* Start Service Area  */}
                 <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--20 rbt-border"
                            textAlign = "text-start"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                <AboutTwo />

                {/* Start Elements Area  */}
                <div className="rwt-split-area">
                    <div className="wrapper">
                        <SlipThree />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Elements Area  */}
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "What People Say About Us."
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12" teamStyle="card-style-default testimonial-style-one style-two border-gradient" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
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

                <FooterOne />
            </main>
        </>
    )
}

export default Finance;
