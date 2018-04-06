import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';

class Login extends Component {
    state = {
        category : [],
        cartItems : 0,
        username : '',
        password : '',
        showAlert : false,
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

    login = () => {
        axios.post('/login/client', {
            username : this.state.username,
            password : this.state.password
        })
        .then((response) => {
            if(response.data.status === 401){
                this.setState({
                    showAlert : true
                });
            }else{
                this.props.history.push("/");
            }
        });
    }

    setUserName = (event) => {
        this.setState({
            username : event.target.value
        });
    }

    setPassWord = (event) => {
        this.setState({
            password : event.target.value
        });
    }

    render() {
        return (
            <Aux>
                <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
                <div className="account">
                    <div className="container">
                        <h1>Account</h1>
                        <div className="account_grid">
                            <div className="col-md-6 login-right">
                                <form>
                                    <span>Email Address</span>
                                    <input type="text" autoComplete='' value={this.state.username} onChange={this.setUserName.bind(this)}/> 
                                    <span>Password</span>
                                    <input type="password" style={ { width: '96%',padding: '10px', } } autoComplete='' value={this.state.password} onChange={this.setPassWord.bind(this)}/> 
                                   { (this.state.showAlert) ?
                                     <small id="emailHelp" className="form-text text-muted">
                                            <p className="alertLogin">Invalid username or password!</p>
                                    </small> : null }
                                    <div className="word-in">
                                        <a className="forgot" >Forgot Your Password? </a>
                                        <button type="button" onClick={this.login}>Login</button>
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
                <Footer/>
            </Aux>
        )
    }

}

export default Login;