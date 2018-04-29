import React, { Component } from 'react';
import config from '../../../../config';

class Profile extends Component {

    render() {
        return (
            <div className="contact-profile">
                <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Profile;