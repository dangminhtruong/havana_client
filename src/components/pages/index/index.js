import React, { Component } from 'react';
import ProductItem from '../../reuse/single_product';
import Banner from '../../reuse/banner';
import * as indexActions from '../../../store/actions/indexPageActions';
import { connect } from 'react-redux';

class Index extends Component {

    componentDidMount () {
        console.log(this.props.newProducts);
        this.props.onMouted();
    }

    render() {

        let news = this.props.newProducts.map((item) => {
            return (
                <div key={item}>
                    <ProductItem/>
                </div>
            )
        });
        return (
            <div>
                <Banner/>
                <div>
                    <div className="content">
                        <div className="container">
                            <div className="content-top">
                                <h1>Recent Products</h1>
                                <div className="content-top1">
                                   {news}
                                    <div className="clearfix"> </div>
                                </div>
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


const mapStateToProps = state => {
    return {
        newProducts: state.idp.newProducts,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onMouted: () => dispatch(indexActions.retrieveNewProducs),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);