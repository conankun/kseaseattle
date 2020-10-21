import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <span className="text-muted">Copyright © 2019 KSEA - Seattle Chapter</span>
                    </div>
                    <div className="offset-3"></div>
                    <div className="col-3 contact-icons">
                        <a href="https://www.facebook.com/kseaseattle" target="_blank"><i class="fab fa-facebook" /><span className="d-sm-none d-md-none d-lg-inline"> Facebook</span></a>
                        <a href="https://ksea.org/" target="_blank"><i class="fas fa-laptop" /><span className="d-sm-none d-md-none d-lg-inline"> KSEA Website</span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;