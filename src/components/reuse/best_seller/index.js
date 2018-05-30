import React, { Component } from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';

class BestSeller extends Component {
	render() {

		let bestSale = this.props.bestSale.map((item) => {
			return (
				<div className="product-go" key={item._id}>
					<div className=" fashion-grid">
						<Link to ={ `/details/${item._id}` }>
							<img className="img-responsive " src={ `${config.BASE_API_URL}img/${item.image}` } alt=""/>
						</Link>	
					</div>
					<div className=" fashion-grid1">
						<h6 className="best2">
							<Link to ={ `/details/${item._id}` }>{ item.name }</Link>
						</h6>
						<span className=" price-in1"> { (item.promo_price !== 0) ? item.promo_price :  item.unit_price} <u>vnđ</u></span>
					</div>	
					<div className="clearfix"> </div>
				</div>
			);
		});

		return (
			<div className="product-bottom">
				<h3 className="cate">Nổi bật</h3>
				{ bestSale }	
			</div>
		);
	}

}

export default BestSeller;