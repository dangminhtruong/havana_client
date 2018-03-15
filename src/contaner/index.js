import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import Index from '../components/pages/index';
import Category from '../components/pages/category';
import Details from '../components/pages/detail';
import Login from '../components/pages/login';
import Signup from '../components/pages/signup';
import Checkout from '../components/pages/checkout';
import axios from '../axios';
import Aux from '../hocs/Aux';

class Container extends Component {
    render() {
        return (
            <Aux>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/category/:id" exact component={Category} />
                    <Route path="/details/:id" exact component={Details} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/checkout" exact component={Checkout} />
                </Switch>
            </Aux>
        )
    }
}

export default Container;