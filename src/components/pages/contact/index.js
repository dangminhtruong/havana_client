import React, { Component } from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';
import Aux from '../../../hocs/Aux';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import axios from '../../../axios';
import SidePanel from './sidePannel';
import Messages from './messages';
import Profile from './profile';

class ChatBox extends Component {

    state = {
        cartItems : 0,
        category : [],
        user : null,
        message :  [],
        onlineAdmins : []
    }

    componentDidMount(){
        axios.get('chatbox')
        .then((responese) => {
            this.setState({
                category : responese.data.category,
                cartItems : responese.data.cart,
                user : responese.data.user
            });
        });
    }

	render() {
		return (
            <Aux>
            <Header cart = {this.state.cartItems}
                    menu = { this.state.category }/>
            <div className="container">
			    <div id="frame">
                    <SidePanel/>
                    <div className="content">
                        <Profile/>
                        <Messages/>
                        <div className="message-input">
                            <div className="wrap">
                            <input type="text" placeholder="Write your message..." />
                            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </Aux>
		);
	}
}

export default ChatBox;