import React, { Component } from 'react';
import config from '../../../config';

class BestSeller extends Component {

    render() {

		let bestSale = this.props.bestSale.map((item) => {
			return (
				<div className="product-go" key={item._id}>
					<div className=" fashion-grid">
						<a href="single.html"><img className="img-responsive " src={ `${config.BASE_API_URL}img/${item.image}` } alt=""/></a>	
					</div>
					<div className=" fashion-grid1">
						<h6 className="best2"><a href="single.html" >{ item.name }</a></h6>
						<span className=" price-in1"> ${ (item.promo_price !== 0) ? item.promo_price :  item.unit_price}</span>
					</div>	
					<div className="clearfix"> </div>
				</div>
			)
		});

        return (
            <div className="product-bottom">
				<h3 className="cate">Best Sellers</h3>
				{ bestSale }	
			</div>
        )
    }

}

export default BestSeller;