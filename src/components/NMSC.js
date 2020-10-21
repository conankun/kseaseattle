import React from 'react';

const NMSC = () => {
    return (
        <section id="nmsc" className="nmsc">
            { /* TODO(conankun): Remove or refactor as a component. */ }
            <div className="alert alert-danger" style={{borderRadius: 0}} role="alert">
                <h4 className="alert-heading">NMSC 2020 IN SEATTLE CANCELED</h4>
                <p>Due to rising COVID-19 concerns in the Seattle Area, the National Math &amp; Science Competition 2020 hosted at Microsoft HQ in Redmond, WA has been <span className="alert-link">CANCELED</span>.</p>
                <p>This comes as part of our responsibility to ensure the health and safety of our participants, volunteers, staff, and their families.</p>
                <hr />
                <p className="mb-0">If you have already paid for the exam please note that registration cancellation and fee refund request will be accepted by <span className="alert-link">April 16th</span>.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-centered">
                        <h2 className="section-heading">KSEA NATIONAL MATHEMATICS &amp; SCIENCE COMPETITION</h2>
                        <h4 className="section-subheading">KSEA 전미 수학 과학 경시 대회</h4>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm" novalidate="">
                            <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="btn btn-success btn-xl" id="emailprez" href="https://nmsc.ksea.org/" target="_blank">Learn More</a>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NMSC;