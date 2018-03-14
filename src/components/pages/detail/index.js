import React, { Component } from 'react';
import Tags from '../../reuse/tags';
import BestSaller from '../../reuse/best_seller';
import RightCategory from '../../reuse/right_category';
import Slider from 'react-slick';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';

class Details extends Component {
    render() {

        const settings = {
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <Aux>
            <Header/>
            <div className="single">
                <div className="container">
                <div className="col-md-9">
                    <div className="col-md-5 grid">
                        <div className="detail_slider">
                            <Slider {...settings}>
                                <div><img src='/images/si2.jpg' height="300px"/></div>
                                <div><img src="/images/si1.jpg" height="300px"/></div>
                                <div><img src="/images/si2.jpg" height="300px"/></div>
                                <div><img src="/images/si1.jpg" height="300px"/></div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-7 single-top-in">
                        <div className="single-para simpleCart_shelfItem">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className="star-on">
                            <ul>
                                <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                            </ul>
                            <div className="review">
                                <a href="#"> 3 reviews </a>/    
                                <a href="#">  Write a review</a>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                            <label className="add-to item_price">$32.8</label>
                            <div className="available">
                            <h6>Available Options :</h6>
                            <ul>
                                <li>
                                    Size:
                                    <select>
                                        <option>Large</option>
                                        <option>Medium</option>
                                        <option>small</option>
                                        <option>Large</option>
                                        <option>small</option>
                                    </select>
                                </li>
                                <li>
                                    Color:
                                    <select>
                                        <option>U.S.Dollar</option>
                                        <option>Euro</option>
                                    </select>
                                </li>
                            </ul>
                            </div>
                            <a href="#" className="cart item_add">More details</a>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                    <div className="content-top1">
                        <div className="col-md-4 col-md3">
                            <div className="col-md1 simpleCart_shelfItem">
                            <a href="single.html">
                            <img className="img-responsive" src="images/pi6.png" alt="" />
                            </a>
                            <h3><a href="single.html">Jeans</a></h3>
                            <div className="price">
                                <h5 className="item_price">$300</h5>
                                <a href="#" className="item_add">Add To Cart</a>
                                <div className="clearfix"> </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-md3">
                            <div className="col-md1 simpleCart_shelfItem">
                            <a href="single.html">
                            <img className="img-responsive" src="images/pi7.png" alt="" />
                            </a>
                            <h3><a href="single.html">Tops</a></h3>
                            <div className="price">
                                <h5 className="item_price">$300</h5>
                                <a href="#" className="item_add">Add To Cart</a>
                                <div className="clearfix"> </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-md3">
                            <div className="col-md1 simpleCart_shelfItem">
                            <a href="single.html">
                            <img className="img-responsive" src="images/pi.png" alt="" />
                            </a>
                            <h3><a href="single.html">Tops</a></h3>
                            <div className="price">
                                <h5 className="item_price">$300</h5>
                                <a href="#" className="item_add">Add To Cart</a>
                                <div className="clearfix"> </div>
                            </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-3 product-bottom">
                        <RightCategory/>
                    <div className="product-bottom">
                        <BestSaller/>
                    </div>
                    <Tags/>
                </div>
                <div className="clearfix"> </div>
                </div>
            </div>
            <Footer/>
            </Aux>
        )
    }
                                    
}
                                    
export default Details;