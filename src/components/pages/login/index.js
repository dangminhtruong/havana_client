import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

    render() {
        return (
            <div className="account">
                <div className="container">
                    <h1>Account</h1>
                    <div className="account_grid">
                        <div className="col-md-6 login-right">
                            <form>
                                <span>Email Address</span>
                                <input type="text"/> 
                            
                                <span>Password</span>
                                <input type="text"/> 
                                <div className="word-in">
                                    <a className="forgot" href="#">Forgot Your Password? </a>
                                    <input type="submit" value={"Login"}/>
                                </div>
                            </form>
                        </div>	
                            <div className="col-md-6 login-left">
                            <h4>NEW CUSTOMERS</h4>
                            <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                            <NavLink to="/signup" className="acount-btn" exact>Create an Account</NavLink>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                </div>
            </div>
        )
    }

}

export default Login;