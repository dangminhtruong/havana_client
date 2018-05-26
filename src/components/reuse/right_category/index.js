import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

class RightCategory extends Component {
	render() {

		$(function() {
			var menu_ul = $('.menu-drop > li > ul'),
				menu_a  = $('.menu-drop > li > a');
				menu_ul.hide();
				menu_a.click(function(e) {
					e.preventDefault();
					if(!$(this).hasClass('active')) {
						menu_a.removeClass('active');
						menu_ul.filter(':visible').slideUp('normal');
						$(this).addClass('active').next().stop(true,true).slideDown('normal');
					} else {
						$(this).removeClass('active');
						$(this).next().stop(true,true).slideUp('normal');
					}
				});
		});

		return (
			<div className=" rsidebar span_1_of_left">
				<h3 className="cate">Categories</h3>
				<ul className="menu-drop">
					<li className="item1"><NavLink to="/" exact>Home</NavLink>
					</li>
					<li className="item2"><a >Nam</a>
					</li>
					<li className="item3"><a >Nữ</a>
					</li>
					<li className="item4"><NavLink className="color6" to="/blog" exact>Tin tức</NavLink>
					</li>  
					<li className="item4"><NavLink className="color6" to="/chat" exact>Nhân viên tư vấn</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default RightCategory;