import React, { Component } from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';
import Aux from '../../../hocs/Aux';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import axios from '../../../axios';

class ChatBox extends Component {

    state = {
        cartItems : 0,
        category : []
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
                <div className="col-md-4">
                    <div className="col-md-12">
                        <img className="img-responsive avata-chat" style={{width:'10vh', height : '10vh'}} src={`${config.BASE_API_URL}img/avata.jpg`} alt="" /> 
                    </div>
                    <div className="col-md-12">
                    

                    </div>
                </div>
                <div className="col-md-8">
                <div className="container-chat">
                    <img className="img-responsive" style={{width:'100%'}} src={`${config.BASE_API_URL}img/avata.jpg`} alt="" />
                    <p>Hello. How are you today?</p>
                    <span class="time-right">11:00</span>
                    </div>

                    <div class="container-chat darker">
                    <img className="img-responsive" style={{width:'100%'}} src={`${config.BASE_API_URL}img/avata.jpg`} className="right" alt="" />
                    <p>Hey! I'm fine. Thanks for asking!</p>
                    <span className="time-left">11:01</span>
                    </div>

                    <div className="container-chat">
                    <img className="img-responsive" style={{width:'100%'}} src={`${config.BASE_API_URL}img/avata.jpg`} alt="" />
                    <p>Sweet! So, what do you wanna do today?</p>
                    <span className="time-right">11:02</span>
                    </div>

                    <div className="container-chat darker">
                    <img className="img-responsive" style={{width:'100%'}} src={`${config.BASE_API_URL}img/avata.jpg`} className="right" alt="" />
                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                    <span className="time-left">11:05</span>
                </div>
                </div>
		    </div>
            <Footer/>
            </Aux>
		);
	}
}

export default ChatBox;