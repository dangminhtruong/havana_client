import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductItem extends Component {

    render() {
        return (
            <div className="col-md-3 col-md2">
                <div className="col-md1 simpleCart_shelfItem">
                    <NavLink to="/details" exact>
                        <img className="img-responsive" src="images/pi4.png" alt="" />
                    </NavLink>
                    <h3> <NavLink to="/details" exact>Shirt</NavLink></h3>
                    <div className="price">
                        <h5 className="item_price">$300</h5>
                        <a href="#" className="item_add">Add To Cart</a>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductItem;