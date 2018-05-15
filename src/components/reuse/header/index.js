import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';
import dropdown from './dropdown';
import axios from '../../../axios';

class Header extends Component {


	constructor() {
		super();
		this.handleSearch = this.handleSearch.bind(this);
	  }

	state = {
		user: {},
		result: [],
	}

	componentDidMount() {
		dropdown();
		axios.get('/authenticate')
			.then((respone) => {
				this.setState({
					user: respone.data.user
				});
			});
	}

	handleSearch(event) {
		axios.get(`/product/find/${event.target.value}`)
			.then((respone) => {
				this.setState({
					result: respone.data.result
				});
			});
	}

	myFunction = () => {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	render() {
		let menCategory = null;
		let womenCategory = null;
		let user = null;
		let searchResult = null;

		if (this.state.user) {
			user = (
				<p className="log">
					<NavLink to="/profile">Hi !</NavLink>
					<span> </span><NavLink to="/profile">
						<span className="glyphicon glyphicon-user"></span> {this.state.user.username}</NavLink>
				</p>
			)
		} else {
			user = (
				<p className="log">
					<NavLink to="/login">Login</NavLink>
					<span>~</span><NavLink to="/signup">Signup</NavLink>
				</p>
			)
		}

		if (this.props.menu.length !== 0) {
			let men = _.filter(this.props.menu, function (o) { return o.type === 1; });
			let women = _.filter(this.props.menu, function (o) { return o.type === 2; });

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

		if (this.state.result.length !== 0) {
			searchResult = this.state.result.map((item) => {
				return (
					<NavLink to={`/details/${item._id}`}>{item.name}</NavLink>
				)
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
							<NavLink to="/" exact><img src="/images/diamond.jpg" alt="" /></NavLink>
						</div>

						<div className="col-sm-4 header-left">
							{user}
							<div className="cart box_1">
								<NavLink to="/checkout" className="simpleCart_empty" exact>
									<h3> <div className="total">
										<span className="simpleCart_total"></span></div>
										<img src="/images/cart.png" alt="" /></h3>
								</NavLink>
								<p><NavLink to="/checkout" className="simpleCart_empty" exact>{this.props.cart} sản phẩm</NavLink></p>

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
								<li><a>Thời trang nam</a>
									<div className="mepanel">
										<div className="row">
											<div className="col3">
												<div className="h_nav">
													<h4>Thời trang nam</h4>
													<ul>
														{menCategory}
													</ul>
												</div>
											</div>
											<div className="col3">
												<div className="h_nav">
													<h4>Chất lượng đảm bảo</h4>
													<ul>
														<li><img src="https://p.w3layouts.com/demos/n_air/web/images/menu3.jpg" /></li>
													</ul>
												</div>
											</div>

										</div>
									</div>
								</li>
								<li className="grid"><a>Thời trang nữ</a>
									<div className="mepanel">
										<div className="row">
											<div className="col3">
												<div className="h_nav">
													<h4>Thời trang nữ</h4>
													<ul>
														{womenCategory}
													</ul>
												</div>
											</div>
											<div className="col3">
												<div className="h_nav">
													<h4>Nhiều kiểu dáng</h4>
													<ul>
														<li><img src="https://p.w3layouts.com/demos/n_air/web/images/menu3.jpg" /></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li><NavLink className="color6" to="/blog" exact>Tin tức</NavLink></li>
								<li><NavLink className="color6" to="/chat" exact>Nhân viên tư vấn</NavLink></li>
							</ul>
						</div>
						<div className="col-sm-2 search">
							<span onClick={this.myFunction} className="play-icon popup-with-zoom-anim">
								<i className="glyphicon glyphicon-search"> </i>
							</span>

							<div className="cdropdown">

								<div id="myDropdown" className="cdropdown-content">
									<input type="text" className="form-control form-control-lg" style={{ borderRadius: '0px' }} placeholder="Search" onChange={this.handleSearch} />
									{searchResult}
									<NavLink to="/" style={{ color : 'red', textAlign : 'center' }}>Kết quả tìm kiếm</NavLink>
								</div>
							</div>



						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
		);
	}

}

export default Header;