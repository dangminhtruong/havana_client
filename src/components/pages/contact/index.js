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
        messages :  [],
        onlineStaff : []
    }

    componentDidMount(){
        axios.get('chatbox')
        .then((response) => {
            this.setState({
                category : response.data.category,
                cartItems : response.data.cart,
                user : response.data.user,
                onlineStaff : response.data.onlineStaff
            });
        });
    }

    fetchMessages = (id) => {
        axios.post('chatbox/fetch/message', {
            userId : id
        })
        .then((response) => {
            console.log(response);
           if(response.status !== 500 && response.data.messages !== null){
            this.setState({
                messages : response.data.messages[0].messages
            });
           }else{
            this.setState({
                messages : []
            });
           }
        });
    }

	render() {
		if(this.state.user){
            return (
                <Aux>
                <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
                <div className="container">
                    <div id="frame">
                        <SidePanel user = { this.state.user } 
                                    staff = { this.state.onlineStaff }
                                    fetch = { this.fetchMessages }/>
                        <div className="content">
                            <Profile user = {this.state.user}/>
                            <Messages messages = { this.state.messages } user = {this.state.user}/>
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
        
        return(
            <Aux>
                <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
                    <div className="container">
                        <div className="container" style={ { minHeight : '60vh', marginTop : '10vh' } }>
                            <div className="check-out">
                                <div className="text-xs-center">
                                <h1 className="display-3">Login Require!</h1>
                                <p className="lead">
                                    <i>Vui lòng đăng nhập để tiếp tục</i> <br/>
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
             </Aux>
        )
	}
}

export default ChatBox;