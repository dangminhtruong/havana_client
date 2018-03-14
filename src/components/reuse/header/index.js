import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

class Header extends Component {
    render() {
        let menCategory = null;
        let womenCategory = null;
        /* console.log(this.props.categories);
        if(this.props.category.length !== 0){
            let men  = _.filter(this.props.category, function(o) { return o.type !== 1; });
            let women = _.find(this.props.category, function(o) { return o.type !== 0; });;
            menCategory = men.map((item) => {
                return (
                    <li><NavLink to="/category" exact>{item.name}</NavLink></li>
                )
            });
            
            womenCategory = women.map((item) => {
                return (
                    <li><NavLink to="/category" exact>{item.name}</NavLink></li>
                )
            });
        } */
        return (
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="col-sm-4 world">
                            <ul >
                                <li>
                                    <select className="in-drop">
                                        <option>English</option>
                                        <option>Japanese</option>
                                        <option>French</option>
                                    </select></li>
                                <li><select className="in-drop1">
                                    <option>Dollar</option>
                                    <option>Euro</option>
                                    <option>Yen</option>
                                </select>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 logo">
                        <NavLink to="/" exact><img src="/images/logo.png" alt=""/></NavLink>
				        </div>

                            <div className="col-sm-4 header-left">
                                <p className="log"><NavLink to="/login" exact>Login</NavLink>
                                    <span>or</span><NavLink to="/signup" exact>Signup</NavLink></p>
                                <div className="cart box_1">
                                    <NavLink to="/checkout" className="simpleCart_empty" exact>
                                        <h3> <div className="total">
                                            <span className="simpleCart_total"></span></div>
                                            <img src="images/cart.png" alt="" /></h3>
                                    </NavLink>
                                    <p><NavLink to="/checkout" className="simpleCart_empty" exact>{ this.props.cart } items</NavLink></p>

                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="head-top">
                            <div className="col-sm-2 number">
                                <span><i className="glyphicon glyphicon-phone"></i>01292007776</span>
                            </div>
                            <div className="col-sm-8 h_menu4">
                                <ul className="memenu skyblue">
                                    <li className=" grid"><NavLink to="/" exact>Home</NavLink></li>
                                    <li><a href="#">Men</a>
                                        <div className="mepanel">
                                            <div className="row">
                                                <div className="col3">
                                                    <div className="h_nav">
                                                        <h4>Men Fashion</h4>
                                                        <ul>
                                                           { menCategory }

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col3">
                                                    <div className="h_nav">
                                                        <h4>Footwear</h4>
                                                        <ul>
                                                            <li><img src="https://p.w3layouts.com/demos/n_air/web/images/menu3.jpg"/></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                    <li className="grid"><a href="#">	Women</a>
                                        <div className="mepanel">
                                            <div className="row">
                                                <div className="col3">
                                                    <div className="h_nav">
                                                        <h4>All Clothing</h4>
                                                        <ul>
                                                          {womenCategory}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col3">
                                                    <div className="h_nav">
                                                        <h4>Footwear</h4>
                                                        <ul>
                                                            <li><img src="https://p.w3layouts.com/demos/n_air/web/images/menu3.jpg"/></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="typo.html">Blog</a></li>
                                    <li><a className="color6" href="contact.html">Conact</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 search">
                                <a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search"> </i> </a>
                            </div>
                            <div className="clearfix"> </div>

                            <script type="text/javascript" src="js/modernizr.custom.min.js"></script>
                            <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                            <script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
                            <div id="small-dialog" className="mfp-hide">
                                <div className="search-top">
                                    <div className="login">
                                        <input type="submit"/>
                                            <input type="text" placeholder="Type something..."/>		
						            </div>
                                            <p>	Shopping</p>
					            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                
                }
                
export default Header;