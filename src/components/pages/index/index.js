import React, { Component } from 'react';
import ProductItem from '../../reuse/single_product';
import Banner from '../../reuse/banner';
import axios from '../../../axios';
import _ from 'lodash';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Notifications, {notify} from 'react-notify-toast';

class Index extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
    }

    state = {
        cartItems : 0,
        newProducts : [],
        featureProducts : [],
        category : []
    }

    addToCart =  (productId) => {
        axios.get('/shoping-cart/add/' + productId)
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
        axios.get('index-data')
        .then((response) => {
            this.setState({
                cartItems : response.data.cart_items,
                newProducts : response.data.newProducts,
                featureProducts : response.data.featuresProduct,
                category : response.data.category
            });
        });
    }

    render() {
        let lineOneNews = null;
        let lineTwoNews = null;
        let lineThreeFeature = null;
        let lineFourFeature = null;

        if(this.state.newProducts.length !== 0 && this.state.featureProducts !== 0 && this.state.category !==0 ){
            let news = _.chunk(this.state.newProducts, 4);
            let features = _.chunk(this.state.featureProducts, 4);

            lineOneNews = news[0].map((item) => {
                return (
                    <div key={item._id}>
                        <ProductItem infor = { item } addcart = { this.addToCart }/>
                    </div>
                )
            });

            lineTwoNews = news[1].map((item) => {
                return (
                    <div key={item._id}>
                        <ProductItem infor = { item } addcart = { this.addToCart }/>
                    </div>
                )
            });

            lineThreeFeature = features[0].map((item) => {
                return (
                    <div key={item._id}>
                        <ProductItem infor = { item } addcart = { this.addToCart }/>
                    </div>
                )
            });

            lineFourFeature = features[1].map((item) => {
                return (
                    <div key={item._id}>
                        <ProductItem infor = { item } addcart = { this.addToCart }/>
                    </div>
                )
            });
        }

        return (
            <div>
                <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
                <Banner/>
                <div>
                    <Notifications />
                    <div className="content">
                        <div className="container">
                            <div className="content-top">
                                <h1>Recent Products</h1>
                                <div className="content-top1">
                                    { lineOneNews }
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="content-top1">
                                    { lineTwoNews }
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>

                         <div className="container">
                            <div className="content-top">
                                <h1>Feature Products</h1>
                                <div className="content-top1">
                                    { lineThreeFeature }
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="content-top1">
                                    { lineFourFeature }
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Index;