import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="col-md-8 top-footer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.91163207516!2d2.3470599!3d48.85885894999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C+France!5e0!3m2!1sen!2sin!4v1436340519910"></iframe>
                        </div>
                        <div className="col-md-4 top-footer1">
                            <h2>Newsletter</h2>
                            <form>
                                <input type="text"/>
                                    <input type="submit" value={ "SUBSCRIBE" }/>
					        </form>
			            </div>
                                <div className="clearfix"> </div>	
		            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="col-sm-3 footer-bottom-cate">
                                    <h6>Categories</h6>
                                    <ul>
                                        <li><a href="#">Curabitur sapien</a></li>
                                        <li><a href="#">Dignissim purus</a></li>
                                        <li><a href="#">Tempus pretium</a></li>
                                        <li><a href="#">Dignissim neque</a></li>
                                        <li><a href="#">Ornared id aliquet</a></li>

                                    </ul>
                                </div>
                                <div className="col-sm-3 footer-bottom-cate">
                                    <h6>Feature Projects</h6>
                                    <ul>
                                        <li><a href="#">Curabitur sapien</a></li>
                                        <li><a href="#">Dignissim purus</a></li>
                                        <li><a href="#">Tempus pretium</a></li>
                                        <li><a href="#">Dignissim neque</a></li>
                                        <li><a href="#">Ornared id aliquet</a></li>

                                    </ul>
                                </div>
                                <div className="col-sm-3 footer-bottom-cate">
                                    <h6>Top Brands</h6>
                                    <ul>
                                        <li><a href="#">Curabitur sapien</a></li>
                                        <li><a href="#">Dignissim purus</a></li>
                                        <li><a href="#">Tempus pretium</a></li>
                                        <li><a href="#">Dignissim neque</a></li>
                                        <li><a href="#">Ornared id aliquet</a></li>
                                        <li><a href="#">Ultrices id du</a></li>
                                        <li><a href="#">Commodo sit</a></li>

                                    </ul>
                                </div>
                                <div className="col-sm-3 footer-bottom-cate cate-bottom">
                                    <h6>Our Address</h6>
                                    <ul>
                                        <li>Aliquam metus  dui. </li>
                                        <li>orci, ornareidquet</li>
                                        <li> ut,DUI.</li>
                                        <li>nisi, dignissim</li>
                                        <li>gravida at.</li>
                                        <li className="phone">PH : 6985792466</li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                                <p className="footer-className"> © 2015 Fashion Mania. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                            </div>
                        </div>
                    </div>
                    )
                }
            }
            
export default Footer;