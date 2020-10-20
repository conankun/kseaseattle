import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/event-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" />                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">Second slide</text></svg>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">Third slide</text></svg>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Banner;