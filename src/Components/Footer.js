import React from 'react';

const Footer = () => {
    return (
        <div className="Footer row py-5 social-media">
            <div className="col-lg-3 social-share">
                <p className="h4 pb-4">Social share</p>
                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-3">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Event info</p>
                    <p className="footer-paragraph ml-3"><a href="/">Enter Now</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Event Info</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Course Maps</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Race Pack</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">FAQs</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Am I Registered?</a></p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Registration</p>
                    <p className="footer-paragraph ml-3"><a href="/">Valunteers</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Gallery</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Press</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Privacy Policy</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Service Plus</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Contacts</a></p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Schedule</p>
                    <p className="footer-paragraph ml-3"><a href="/">Galery</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">About</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Videos</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">FAQs</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="/">Valunteers</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;