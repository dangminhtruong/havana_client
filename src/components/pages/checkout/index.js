import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Notifications, {notify} from 'react-notify-toast';
import Form from './formcheckout';
import List from './lists';

class Checkout extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
    }

    state = {
        category : [],
        cartItems : 0,
        tmpQuantity : 0,
        tmpSize : '',
        tmpColor : '',
        user : null,
        processToBuy : false
    }

    componentDidMount(){
        axios.get('shoping-cart/cart-data-api')
        .then((response) => {
            this.setState({
                category : response.data.category,
                cartItems : response.data.cart,
                products : response.data.products,
                user : response.data.user
            });
        });
    }
    

    render() {
       
        return (
            <Aux>
            <Header cart = {this.state.cartItems}
                menu = { this.state.category }/>
            <List user = { this.state.user }/>
            <Footer/>
            </Aux>
        )
    }

}

export default Checkout;