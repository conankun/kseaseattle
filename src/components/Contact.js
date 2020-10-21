import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-centered">
                        <h2 className="section-heading">Contact Us</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm" novalidate="">
                            <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="btn btn-success btn-xl" id="emailprez" href="mailto:ksea.yg.seattle@gmail.com">Email: ksea.yg.seattle@gmail.com</a>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;