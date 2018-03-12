import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
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
        )
    }

}

export default Signup;