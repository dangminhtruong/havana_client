import React, { Component } from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';

class relatedItem extends Component {
	render() {
		return (
			<div className="col-md-4 col-md3">
				<div className="col-md1 simpleCart_shelfItem">
					<Link to ={ `/details/${this.props.infor._id}` }>
						<img className="img-responsive" src={`${config.BASE_API_URL}img/${this.props.infor.image}`} alt="" />
					</Link>
					<h3>
						<Link to ={ `/details/${this.props.infor._id}` }>
							{ this.props.infor.name}</Link>
						</h3>
					<div className="price">
						<h5 className="item_price">${ (this.props.infor.promo_price) ? this.props.infor.promo_price : this.props.infor.unit_price }</h5>
						<Link to={`/details/${this.props.infor._id}`}>
							<button type="button" className="item_add">View more</button>
						</Link>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
		);
	}
}

export default relatedItem;