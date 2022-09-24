import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className="container main-content">
                <div className="footer-logo">
                    <a href="#">
                        <img src={footerLogo} alt="" />
                    </a>
                </div>
                <div className='footer-mid'>
                    <p><a href="#">About Online food</a></p>
                    <p><a href="#"> Read Out blog</a></p>
                    <p><a href="#"> Sign up to deliver</a></p>
                    <p><a href="#">Add your restaurant</a></p>
                </div>
                <div className='footer-end'>
                    <p><a href="#">Get help</a></p>
                    <p><a href="#"> Read FAQs</a></p>
                    <p><a href="#"> View all cities</a></p>
                    <p><a href="#">Restaurant near me</a></p>
                </div>
            </div>

            <div>
                <p className='copy-right'> &copy; All right reserved Soad Anam</p>
            </div>
        </div>
    );
};

export default Footer;