import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';

class Checkout extends Component {

    state = {
        category : [],
        cartItems : 0
    }

    componentDidMount(){
        axios.get('category')
        .then((responese) => {
            this.setState({
                category : responese.data.category,
                cartItems : responese.data.cart
            });
        });
    }

    render() {
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
                        <tr>
                            <td className="ring-in">
                            <a href="single.html" className="at-in"><img src="images/ce.jpg" className="img-responsive" alt=""/></a>
                            <div className="sed">
                                <h5>Sed ut perspiciatis unde</h5>
                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium) </p>
                            </div>
                            <div className="clearfix"> </div>
                            </td>
                            <td className="check"><input type="text" defaultValue={ 1 }/></td>
                            <td>$100.00</td>
                            <td>FREE SHIPPING</td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td className="ring-in">
                            <a href="single.html" className="at-in"><img src="images/ce1.jpg" className="img-responsive" alt=""/></a>
                            <div className="sed">
                                <h5>Sed ut perspiciatis unde</h5>
                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ) </p>
                            </div>
                            <div className="clearfix"> </div>
                            </td>
                            <td className="check"><input type="text" defaultValue={ 1 }/></td>
                            <td>$200.00</td>
                            <td>FREE SHIPPING</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td className="ring-in">
                            <a href="single.html" className="at-in"><img src="images/ce2.jpg" className="img-responsive" alt=""/></a>
                            <div className="sed">
                                <h5>Sed ut perspiciatis unde</h5>
                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium) </p>
                            </div>
                            <div className="clearfix"> </div>
                            </td>
                            <td className="check"><input type="text" defaultValue={ 1 }/></td>
                            <td>$150.00</td>
                            <td>FREE SHIPPING</td>
                            <td>$150.00</td>
                        </tr>
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