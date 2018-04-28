import React, { Component } from 'react';
import config from '../../../../config';

class Messages extends Component {
    render() {
        let messages = null;
        if(this.props.messages.length !== 0){
            messages = this.props.messages.map((message) => {
                return(
                   (message.user_name === this.props.user.username) ?  
                   <li className="replies" key={ message._id }>
                    <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p>{ message.message }</p>
                   </li> 
                   : 
                   <li className="sent" key={ message._id }>
                    <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p style={{ float : 'left' }}>{ message.message }</p>
                   </li> 
                )
            });
        }
        return (
            <div className="messages" id="messages-container">
                <ul>
                    { messages }
                </ul>
            </div>
        )
    }

}

export default Messages;