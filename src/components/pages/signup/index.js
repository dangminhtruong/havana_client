import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';

class Signup extends Component {

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
                    <div className="register">
                        <h1>Register</h1>
                            <form> 
                                <div className="col-md-6  register-top-grid">
                                    <div className="mation">
                                        <span>First Name</span>
                                        <input type="text"/> 
                                    
                                        <span>Last Name</span>
                                        <input type="text"/> 
                                    
                                        <span>Email Address</span>
                                        <input type="text"/> 
                                    </div>
                                    <div className="clearfix"> </div>
                                    <a className="news-letter" href="#">
                                        <label className="acount-btn">Sign Up</label>
                                    </a>
                                    </div>
                                    <div className=" col-md-6 register-bottom-grid">
                                            <div className="mation">
                                                <span>Password</span>
                                                <input type="text"/>
                                                <span>Confirm Password</span>
                                                <input type="text"/>
                                            </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </form>
                        </div>
                </div>
                <Footer/>
            </Aux>
        )
    }

}

export default Signup;