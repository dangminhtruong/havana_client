import React, { Component } from 'react';
import Tags from '../../reuse/tags';
import BestSaller from '../../reuse/best_seller';
import RightCategory from '../../reuse/right_category';
import Slider from 'react-slick';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import config from '../../../config';
import Related from './relatedItem';


class Details extends Component {

    state = {
        currentInfor : {},
        related :  [],
        cartItems : 0,
        category : [],
        bestSaller : []
    }

    componentDidMount () {
         axios.get(`/product-data/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({
                currentInfor : response.data.product,
                related : response.data.related_product,
                category : response.data.category,
                cartItems : response.data.cart,
                bestSaller : response.data.best_sales
            });
        });
    }

    render() {
        let relates = null;
        const settings = {
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          if(this.state.related.length !== 0){
            relates = this.state.related.map((item) => {
                return (
                    <div key={item._id}>
                        <Related infor = {item} />
                    </div>
                )
            });
          }

        return (
            
            <Aux>
            <Header cart = {this.state.cartItems}
                    menu = { this.state.category }/>
            <div className="single">
                <div className="container">
                <div className="col-md-9">
                    <div className="col-md-5 grid">
                        <div className="detail_slider">
                            <Slider {...settings}>
                                <div><img src={ `${config.BASE_API_URL}img/${this.state.currentInfor.image}` } height="300px"/></div>
                                <div><img src="/images/si1.jpg" height="300px"/></div>
                                <div><img src="/images/si2.jpg" height="300px"/></div>
                                <div><img src="/images/si1.jpg" height="300px"/></div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-7 single-top-in">
                        <div className="single-para simpleCart_shelfItem">
                            <h1>{ this.state.currentInfor.name }</h1>
                            <p>{ this.state.currentInfor.descript }</p>
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
                            <label className="add-to item_price">
                                ${ (this.state.currentInfor.promo_price) ? this.state.currentInfor.promo_price : this.state.currentInfor.unit_price }
                            </label>
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
                            { relates }
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-3 product-bottom">
                        <RightCategory/>
                    <div className="product-bottom">
                        <BestSaller bestSale = {this.state.bestSaller}/>
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