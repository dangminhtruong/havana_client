import React, { Component } from 'react';
import Slider from 'react-slick';

class Banner extends Component {

    render() {

        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <div className="banner">
                <div className="col-sm-3 banner-mat">
                    <img className="img-responsive"	src="images/ba1.jpg" alt=""/>
                </div>
                <div className="col-sm-6 matter-banner">
                    <div className="slider">
                        <div className="callbacks_container">
                            <Slider {...settings}>
                                <div><img src="images/1.jpg" /></div>
                                <div><img src="images/2.jpg" /></div>
                                <div><img src="images/1.jpg" /></div>
                                <div><img src="images/2.jpg" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 banner-mat">
                    <img className="img-responsive" src="images/ba.jpg" alt=""/>
                </div>
                <div className="clearfix"> </div>
            </div>
        )
    }

}

export default Banner;