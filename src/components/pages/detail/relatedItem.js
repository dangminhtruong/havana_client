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
                    <h3><a href="single.html">{ this.props.infor.name}</a></h3>
                    <div className="price">
                        <h5 className="item_price">${ (this.props.infor.promo_price) ? this.props.infor.promo_price : this.props.infor.unit_price }</h5>
                        <a href="#" className="item_add">Add To Cart</a>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default relatedItem;