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
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }

    state = {
        currentInfor : {},
        related :  [],
        cartItems : 0,
        category : [],
        bestSaller : [],
        color : '' ,
        size : ''
    }

    addToCart =  (productId) => {
        axios.post(`/shoping-cart/add/${productId}`, {
            color : this.state.color,
            size : this.state.size
        })
        .then((response) => {
            this.setState({
                cartItems : response.data.cart_items
            });
            this.show('Add cart successfull !', 'success', 2000);
        })
        .catch((error) => {
            throw new error;
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
                bestSaller : response.data.best_sales,
                color : _.head(response.data.product.colors).code,
                size :  _.head(response.data.product.size).code,
            });
        });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/product-data/${nextProps.match.params.id}`)
            .then((response) => {
                this.setState({
                    currentInfor : response.data.product,
                    related : response.data.related_product,
                    category : response.data.category,
                    cartItems : response.data.cart,
                    bestSaller : response.data.best_sales,
                    color : _.head(response.data.product.colors).code,
                    size :  _.head(response.data.product.size).code,
                });
            });
        }
    }

    handleChangeSize(event){
        this.setState({size: event.target.value});

    }

    handleChangeColor(code){
        this.setState({color: code});
    }

    render() {
        let relates = null;
        let colors = null;
        let sizes = null;
        let imgDetails = null;
        let defaultSize = (this.state.currentInfor.size) ? _.head(this.state.currentInfor.size).code : 'XXL';
;
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
            colors = this.state.currentInfor.colors.map((color, index) => {
                let style = {
                    background: color.code,
                }

                return (
                    <label className="containerr" key={ index  }>
                            <input type="radio" 
                            name="color" defaultChecked={ ( index === 0 ) ? true : false }
                            onClick={() => this.handleChangeColor(color.code)}/>
                            <span className="checkmark" style={ style }></span>
                    </label>
                );
            });
          }

          if(! _.isEmpty(this.state.currentInfor.size)){
            sizes = this.state.currentInfor.size.map((size, index) => {
                return (
                    <option key={size.code} value={size.code} >{ size.code }</option>
                )
            });
          }


          if(! _.isEmpty(this.state.currentInfor.image_details)){
            imgDetails = this.state.currentInfor.image_details.map((img) => {
                return (
                    <div key={img}><img src={`${config.BASE_API_URL}img/${img}`} height="300px"/></div>
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
                                <li><a ><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a ><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a ><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a ><i className="glyphicon glyphicon-star"> </i></a></li>
                                <li><a ><i className="glyphicon glyphicon-star"> </i></a></li>
                            </ul>
                            <div className="review">
                                <a > 3 reviews </a>/    
                                <a >  Write a review</a>
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
                                    <select value={this.state.size} onChange={this.handleChangeSize}>
                                        { sizes }
                                    </select>
                                </li>
                                <li>
                                    Color:
                                   
                                       { colors }
                                    
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