import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
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
                        <NavLink to="/index" exact><img src="images/logo.png" alt=""/></NavLink>
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
                                    <p><NavLink to="/checkout" className="simpleCart_empty" exact>Empty Cart</NavLink></p>

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
                                    <li className=" grid"><NavLink to="/index" exact>Home</NavLink></li>
                                    <li><a href="#">Men</a>
                                        <div className="mepanel">
                                            <div className="row">
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>All Clothing</h4>
                                                        <ul>
                                                            <li><NavLink to="/category" exact>Shirts</NavLink></li>
                                                            <li><NavLink to="/category" exact>Sports Wear</NavLink></li>
                                                            <li><a href="products.html">Shorts</a></li>
                                                            <li><a href="products.html">Suits & Blazers</a></li>
                                                            <li><a href="products.html">Formal Shirts</a></li>
                                                            <li><a href="products.html">Sweatpants</a></li>
                                                            <li><a href="products.html">Swimwear</a></li>
                                                            <li><a href="products.html">Trousers & Chinos</a></li>
                                                            <li><a href="products.html">T-Shirts</a></li>
                                                            <li><a href="products.html">Underwear & Socks</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Footwear</h4>
                                                        <ul>
                                                            <li><a href="products.html">Formal Shoes</a></li>
                                                            <li><a href="products.html">Boots</a></li>
                                                            <li><a href="products.html">Sports Shoes</a></li>
                                                            <li><a href="products.html">Casual Shoes</a></li>
                                                            <li><a href="products.html">Running Shoes</a></li>
                                                            <li><a href="products.html">Sneakers</a></li>
                                                            <li><a href="products.html">Loafers</a></li>
                                                            <li><a href="products.html">Slippers</a></li>
                                                            <li><a href="products.html">Sandals</a></li>
                                                            <li><a href="products.html">Flip-flops</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Popular Brands</h4>
                                                        <ul>
                                                            <li><a href="products.html">Levis</a></li>
                                                            <li><a href="products.html">Persol</a></li>
                                                            <li><a href="products.html">Nike</a></li>
                                                            <li><a href="products.html">Edwin</a></li>
                                                            <li><a href="products.html">New Balance</a></li>
                                                            <li><a href="products.html">Jack & Jones</a></li>
                                                            <li><a href="products.html">Paul Smith</a></li>
                                                            <li><a href="products.html">Ray-Ban</a></li>
                                                            <li><a href="products.html">Wood Wood</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="grid"><a href="#">	Women</a>
                                        <div className="mepanel">
                                            <div className="row">
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>All Clothing</h4>
                                                        <ul>
                                                            <li><a href="products.html">Shirts & Tops</a></li>
                                                            <li><a href="products.html">Sports Wear</a></li>
                                                            <li><a href="products.html">Kurtas & Kurties</a></li>
                                                            <li><a href="products.html">Suits & Blazers</a></li>
                                                            <li><a href="products.html">Sarees</a></li>
                                                            <li><a href="products.html">Sweatpants</a></li>
                                                            <li><a href="products.html">Swimwear</a></li>
                                                            <li><a href="products.html">Night-Suits</a></li>
                                                            <li><a href="products.html">T-Shirts</a></li>
                                                            <li><a href="products.html">Jeans</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Footwear</h4>
                                                        <ul>
                                                            <li><a href="products.html">Heels</a></li>
                                                            <li><a href="products.html">Flats</a></li>
                                                            <li><a href="products.html">Sports Shoes</a></li>
                                                            <li><a href="products.html">Casual Shoes</a></li>
                                                            <li><a href="products.html">Running Shoes</a></li>
                                                            <li><a href="products.html">Wedges</a></li>
                                                            <li><a href="products.html">Boots</a></li>
                                                            <li><a href="products.html">Pumps</a></li>
                                                            <li><a href="products.html">Slippers</a></li>
                                                            <li><a href="products.html">Flip-flops</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Popular Brands</h4>
                                                        <ul>
                                                            <li><a href="products.html">Levis</a></li>
                                                            <li><a href="products.html">Persol</a></li>
                                                            <li><a href="products.html">Nike</a></li>
                                                            <li><a href="products.html">Edwin</a></li>
                                                            <li><a href="products.html">New Balance</a></li>
                                                            <li><a href="products.html">Jack & Jones</a></li>
                                                            <li><a href="products.html">Paul Smith</a></li>
                                                            <li><a href="products.html">Ray-Ban</a></li>
                                                            <li><a href="products.html">Wood Wood</a></li>
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