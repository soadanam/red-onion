import React from 'react';
import './WhyChoose.css';
import img1 from '../../images/whyChoose/whyChoose (1).png'
import img2 from '../../images/whyChoose/whyChoose (2).png'
import img3 from '../../images/whyChoose/whyChoose (3).png'

const WhyChoose = () => {
    return (
        <div className='why-choose-use-main container mb-5'>
            <div className="why-choose-text text-start">
                <h3>Why you choose us</h3>
                <p>Barton waited twenty twenty always repair in within in we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded. </p>
            </div>

            <div className='choose-cards'>
                <div className='choose-card'>
                    <div className='choose-img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className="choose-info d-flex text-start">
                        <div className="choose-logo">
                            <i className="fa-solid fa-bus"></i>
                        </div>
                        <div className='choose-text'>
                            <h4>Fast Delivery </h4>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <a href="#">See more <i className="fa-solid fa-circle-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className='choose-card card-special'>
                    <div className='choose-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className="choose-info d-flex text-start">
                        <div className="choose-logo">
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <div className='choose-text'>
                            <h4>Fast Delivery </h4>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <a href="#">See more <i className="fa-solid fa-circle-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className='choose-card'>
                    <div className='choose-img'>
                        <img src={img3} alt="" />
                    </div>
                    <div className="choose-info d-flex text-start">
                        <div className="choose-logo">
                            <i className="fa-solid fa-truck-front"></i>
                        </div>
                        <div className='choose-text'>
                            <h4>Fast Delivery </h4>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <a href="#">See more <i className="fa-solid fa-circle-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;