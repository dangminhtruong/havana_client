import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';
import dropdown from './dropdown';
import axios from '../../../axios';

class Header extends Component {

	state = {
		user : {}
	}

	componentDidMount(){
		dropdown();
		axios.get('/authenticate')
		.then((respone) => {
			console.log(respone.data.user);
			this.setState({
				user : respone.data.user
			});
		});
	}



	render() {
		let menCategory = null;
		let womenCategory = null;
		let user = null;

		if(this.state.user){
			user = (
				<p className="log">
					<NavLink to="/profile" exact>Hi !</NavLink>
					<span> </span><NavLink to="/signup" exact>
					<span class="glyphicon glyphicon-user"></span> { this.state.user.username }</NavLink>
				</p>
			)
		}else{
			user =  (
				<p className="log">
					<NavLink to="/login" exact>Login</NavLink>
					<span>or</span><NavLink to="/signup" exact>Signup</NavLink>
				</p>
			)
		}

		if(this.props.menu.length !== 0){
			let men  = _.filter(this.props.menu, function(o) { return o.type === 1; });
			let women = _.filter(this.props.menu, function(o) { return o.type === 2; });

			menCategory = men.map((item) => {
				return (
					<li key={item._id}><NavLink to={`/category/${item._id}`} exact>{item.name}</NavLink></li>
				);
			});
            
			womenCategory = women.map((item) => {
				return (
					<li key={item._id}><NavLink to={`/category/${item._id}`} exact>{item.name}</NavLink></li>
				);
			});  
		} 
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
							{ user }
							<div className="cart box_1">
								<NavLink to="/checkout" className="simpleCart_empty" exact>
									<h3> <div className="total">
										<span className="simpleCart_total"></span></div>
									<img src="/images/cart.png" alt="" /></h3>
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
								<li><a href="/">Men</a>
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
								<li className="grid"><a href="/">	Women</a>
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
							<span className="play-icon popup-with-zoom-anim"><i className="glyphicon glyphicon-search"> </i> </span>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
		);
	}
                
}
                
export default Header;