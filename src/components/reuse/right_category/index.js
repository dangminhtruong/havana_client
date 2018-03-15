import React, { Component } from 'react';
import $ from 'jquery';

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
					<li className="item1"><a href="#">Men </a>
						<ul className="cute">
							<li className="subitem1"><a href="single.html">Cute Kittens </a></li>
							<li className="subitem2"><a href="single.html">Strange Stuff </a></li>
							<li className="subitem3"><a href="single.html">Automatic Fails </a></li>
						</ul>
					</li>
					<li className="item2"><a href="#">Women </a>
						<ul className="cute">
							<li className="subitem1"><a href="single.html">Cute Kittens </a></li>
							<li className="subitem2"><a href="single.html">Strange Stuff </a></li>
							<li className="subitem3"><a href="single.html">Automatic Fails </a></li>
						</ul>
					</li>
					<li className="item3"><a href="#">Kids</a>
						<ul className="cute">
							<li className="subitem1"><a href="single.html">Cute Kittens </a></li>
							<li className="subitem2"><a href="single.html">Strange Stuff </a></li>
							<li className="subitem3"><a href="single.html">Automatic Fails</a></li>
						</ul>
					</li>
					<li className="item4"><a href="#">Accesories</a>
						<ul className="cute">
							<li className="subitem1"><a href="single.html">Cute Kittens </a></li>
							<li className="subitem2"><a href="single.html">Strange Stuff </a></li>
							<li className="subitem3"><a href="single.html">Automatic Fails</a></li>
						</ul>
					</li>
                            
					<li className="item4"><a href="#">Shoes</a>
						<ul className="cute">
							<li className="subitem1"><a href="product.html">Cute Kittens </a></li>
							<li className="subitem2"><a href="product.html">Strange Stuff </a></li>
							<li className="subitem3"><a href="product.html">Automatic Fails </a></li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default RightCategory;