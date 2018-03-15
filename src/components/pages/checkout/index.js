import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import config from '../../../config';

class Checkout extends Component {

    state = {
        category : [],
        cartItems : 0,
        products : []
    }

    componentDidMount(){
        axios.get('shoping-cart/cart-data-api')
        .then((response) => {
            console.log(response);
            this.setState({
                category : response.data.category,
                cartItems : response.data.cart,
                products : response.data.products
            });
        });
    }

    render() {
       let list = null;
       if(this.state.products.length !== 0){
        list = this.state.products.map(item => {
            return (
                <tr key={item._id}>
                    <td className="ring-in">
                    <a href="single.html" className="at-in"><img src= { `${config.BASE_API_URL}img/${item.product_img}` } className="img-responsive" alt=""/></a>
                    <div className="sed">
                        <h5>{ item.product_name }</h5>
                    </div>
                    <div className="clearfix"> </div>
                    </td>
                    <td className="check"><input type="text" defaultValue={ item.product_quantity  }/></td>
                    <td>${ (item.promo_price) ? item.promo_price : item.unit_price}</td>
                    <td>FREE SHIPPING</td>
                    <td>${ (item.promo_price) ? item.product_quantity * item.promo_price: item.product_quantity * item.unit_price }</td>
                </tr>
            )
        });
       }


        return (
            <Aux>
            <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
            <div className="container">
                <div className="check-out">
                    <h1>Checkout</h1>
                    <table >
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Prices</th>
                                <th>Delery Detials</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            { list }
                        </tbody>
                    </table>
                    <a href="#" className="to-buy">PROCEED TO BUY</a>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <Footer/>
            </Aux>
        )
    }

}

export default Checkout;