import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import Header from '../components/reuse/header';
import Footer from '../components/reuse/footer';
import Index from '../components/pages/index';
import Category from '../components/pages/category';
import Details from '../components/pages/detail';
import Login from '../components/pages/login';
import Signup from '../components/pages/signup';
import Checkout from '../components/pages/checkout';

class Container extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/category" exact component={Category} />
                    <Route path="/details" exact component={Details} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/checkout" exact component={Checkout} />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Container;