import React, { Component } from 'react';
import ProductItem from '../../reuse/single_product';
import Banner from '../../reuse/banner';
class Index extends Component {

    render() {
        return (
            <div>
                <Banner/>
                <div>
                    <div className="content">
                        <div className="container">
                            <div className="content-top">
                                <h1>Recent Products</h1>
                                <div className="content-top1">
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="content-top1">
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index;