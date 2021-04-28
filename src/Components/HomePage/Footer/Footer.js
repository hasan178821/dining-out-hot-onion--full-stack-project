import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="row container-fluid px-5 pt-5 mt-5 footer-main">
            <div className="col-md-3">
                <h2 style={{fontWeight:'bold', fontSize:'41px'}}>Dining Out</h2>
            </div>
            <div className="col-md-3 footer-link">
                <p><a href="/home"> About Online Food </a></p>
                <p><a href="/home"> Read our Blog </a></p>
                <p><a href="/home"> Sign up to deliver </a></p>
                <p><a href="/home"> Add your restaurant</a></p>
            </div>
            <div className="col-md-3 footer-link">
                <p> <a href="/home"> Get Help </a> </p>
                <p> <a href="/home"> Read FAQs </a> </p>
                <p> <a href="/home"> View all cities </a> </p>
                <p> <a href="/home"> Restaurant near me </a> </p>
            </div>
            <div className="col-md-3 social-icon">
                <h4>Find Us in Social Media</h4>
                <a href="https://www.facebook.com/" target="blank" style={{color: '#0d8bf0'}}> <FontAwesomeIcon icon={faFacebook}/> </a>
                <a href="https://www.instagram.com/" target="blank" style={{color: '#c20d7a'}}> <FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://twitter.com/?lang=en" target="blank" style={{color: '#5da9dd'}}> <FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.linkedin.com/feed/" target="blank" style={{color: '#0077b5'}}> <FontAwesomeIcon icon={faLinkedinIn}/></a>
            </div>

            <div className="d-flex justify-content-between px-5 py-3">
                <small>&copy;2021 Dining Food || All right reserved </small>
                <div className="footer-link privacy-link">
                    <a href="/home">Privacy Policy</a>
                    <a href="/home">Terms of Use</a>
                    <a href="/home">Pricing</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;