import React, { Component } from 'react';
import ProductItem from '../../reuse/single_product';
import BestSeller from '../../reuse/best_seller';
import Tags from '../../reuse/tags';
import CategoryItem from './CategoryItem';
import RightCategory from '../../reuse/right_category';

class Category extends Component {

    render() {
        return (
            
                <div className="products">
                    <div className="container">
                        <h1>Products</h1>
                        <div className="col-md-9">
                            <div className="content-top1">
                                <CategoryItem/>
                                <CategoryItem/>
                                <CategoryItem/>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="content-top1">
                                <CategoryItem/>
                                <CategoryItem/>
                                <CategoryItem/>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="content-top1">
                                <CategoryItem/>
                                <CategoryItem/>
                                <CategoryItem/>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-bottom">
                            <div className=" rsidebar span_1_of_left">
                                <RightCategory/>
                            </div>
                            <BestSeller/>
                            <Tags/>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                          
                            )
                        }
                    
                    }
                    
export default Category;