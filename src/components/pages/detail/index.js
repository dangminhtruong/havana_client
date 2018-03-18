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
import Notifications, {notify} from 'react-notify-toast';
import _ from 'lodash';

class Details extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
    }

    state = {
        currentInfor : {},
        related :  [],
        cartItems : 0,
        category : [],
        bestSaller : []
    }

    addToCart =  (productId) => {
        axios.post(`/shoping-cart/add/${productId}`, {
            color : '#ffff',
            size : 'XXl'
        })
        .then((response) => {
            this.setState({
                cartItems : response.data.cart_items
            });
            this.show('Add cart successfull !', 'success', 3000);
        })
        .catch((error) => {
            console.log(error);
        });  
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

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/product-data/${nextProps.match.params.id}`)
            .then((response) => {
                console.log(response.data.product);
                this.setState({
                    currentInfor : response.data.product,
                    related : response.data.related_product,
                    category : response.data.category,
                    cartItems : response.data.cart,
                    bestSaller : response.data.best_sales
                });
            });
        }
    }

    render() {
        let relates = null;
        let colors = null;
        let sizes = null;
        let imgDetails = null;

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
                        <Related infor = {item} addCart = { this.addToCart }/>
                    </div>
                )
            });
          }

          if(! _.isEmpty(this.state.currentInfor.colors)){
            colors = this.state.currentInfor.colors.map((color) => {
                let inlineStyle = {
                    color : color.code
                };
                return (
                    <option style={inlineStyle} key={color.code}>color</option>
                )
            });
          }

          if(! _.isEmpty(this.state.currentInfor.size)){
            sizes = this.state.currentInfor.size.map((size) => {
                return (
                    <option key={size.code}>{ size.code }</option>
                )
            });
          }


          if(! _.isEmpty(this.state.currentInfor.image_details)){
            imgDetails = this.state.currentInfor.image_details.map((img) => {
                return (
                    <div><img key={img} src={`${config.BASE_API_URL}img/${img}`} height="300px"/></div>
                )
            });
          }


        return (
            
            <Aux>
            <Header cart = {this.state.cartItems}
                    menu = { this.state.category }/>
            <Notifications />
            <div className="single">
                <div className="container">
                <div className="col-md-9">
                    <div className="col-md-5 grid">
                        <div className="detail_slider">
                            <Slider {...settings}>
                                <div><img src={ `${config.BASE_API_URL}img/${this.state.currentInfor.image}` } height="300px"/></div>
                                {imgDetails}
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
                                        { sizes }
                                    </select>
                                </li>
                                <li>
                                    Color:
                                    <select>
                                       { colors }
                                    </select>
                                </li>
                            </ul>
                            </div>
                            <button className="cart item_add" onClick={ () => this.addToCart(this.props.match.params.id) }>Add to cart</button>
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