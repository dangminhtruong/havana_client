import React, { Component } from 'react';

class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="col-md-8 top-footer">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238373.52527856285!2d105.8045042476706!3d21.00921288016024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a8d23cf703b1%3A0x7ba8444601994739!2zSOG7jWMgVmnhu4duIE7DtG5nIE5naGnhu4dwIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1526394235448" title="map"></iframe>
						</div>
						<div className="col-md-4 top-footer1">
							<h2>Hotline</h2>
							<h2 style={{ color : 'black' }}>01292007776</h2>
			            </div>
						<div className="clearfix"> </div>	
		            </div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="col-sm-3 footer-bottom-cate">
							<h6>Diamonds Fashion</h6>
							<ul>
								<li><a href="/">Tốc độ, hiệu năng cáo</a></li>
								<li><a href="/">Áp dụng những công nghệ mới nhất</a></li>
							</ul>
						</div>
						<div className="col-sm-3 footer-bottom-cate">
							<h6>Thông tin liên hệ</h6>
							<ul>
								<li><a href="/">01292007776</a></li>
								<li><a href="/">xdangminhtruongx@gmail.com</a></li>
							</ul>
						</div>
						<div className="col-sm-3 footer-bottom-cate">
							<h6>Công nghệ</h6>
							<ul>
								<li><a href="/">Nodejs</a></li>
								<li><a href="/">MongoDB</a></li>
								<li><a href="/">Reactjs/Vuejs</a></li>
								<li><a href="/">Docker</a></li>
							</ul>
						</div>
						<div className="col-sm-3 footer-bottom-cate cate-bottom">
							<h6>Địa chỉ</h6>
							<ul>
								<li>Học viện nông nghiệp Việt Nam </li>
								<li>Khoa CNTT - FITA</li>
							</ul>
						</div>
						<div className="clearfix"> </div>
						<p className="footer-className"> © Diamonds fashion | Design by <a href="https://github.com/dangminhtruong" target="_blank">Dang Minh Truong</a> </p>
					</div>
				</div>
			</div>
		);
	}
}
            
export default Footer;