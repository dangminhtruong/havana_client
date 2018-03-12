import React, { Component } from 'react';

class CategoryItem extends Component {

    render() {
        return (
            <div className="col-md-4 col-md3">
            <div className="col-md1 simpleCart_shelfItem">
                <a href="single.html">
                    <img className="img-responsive" src="images/pi.png" alt="" />
                </a>
                <h3><a href="single.html">Tops</a></h3>
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

export default CategoryItem;