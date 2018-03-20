import React, { Component } from 'react';
import ProductItem from '../../reuse/single_product';
import BestSeller from '../../reuse/best_seller';
import Tags from '../../reuse/tags';
import CategoryItem from './CategoryItem';
import RightCategory from '../../reuse/right_category';
import axios from '../../../axios';
import Aux from '../../../hocs/Aux';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import _ from 'lodash';
import Notifications, {notify} from 'react-notify-toast';
import Paginate from '../../reuse/paginate';

class Category extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
    }

    state = {
        cartItems : 0,
        category : [],
        items : [],
        bestSale : [],
        pages : 1,
        url : null
    }

    componentDidMount () {
        axios.get(`category-data/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                cartItems : response.data.cart,
                category : response.data.category,
                items: response.data.products,
                pages : response.data.pages,
                bestSale : response.data.best,
                currentPage : response.data.currentPage,
                url : this.props.match.params.id
            });
            
        });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`category-data/${nextProps.match.params.id}`)
            .then(response => {
                this.setState({
                    cartItems : response.data.cart,
                    category : response.data.category,
                    items: response.data.products,
                    pages : response.data.pages,
                    bestSale : response.data.best,
                    currentPage : response.data.currentPage,
                    url : nextProps.match.params.id
                });
                
            });
        }
    }


    addToCart =  (productId) => {
        axios.get('/shoping-cart/add/' + productId)
				.then(respon => {
                    this.setState({
                        cartItems : respon.data.cart_items
                    });
                    this.show('Add cart successfull !', 'success', 3000);
				})
				.catch((error) => {
					console.log(error);
				});  
    }

    paginate = (query) => {

        console.log(this.state.url);
        axios.get(`category-data/${this.state.url}?pages=${query}`)
        .then(response => {
            this.setState({
                cartItems : response.data.cart,
                category : response.data.category,
                items: response.data.products,
                pages : response.data.pages,
                bestSale : response.data.best,
                currentPage : response.data.currentPage
            });
        });
    }

    render() {
        let lineOne = null;
        let lineTwo = null;
        let lineThree = null;

        if(this.state.items.length !== 0){
            let items = _.chunk(this.state.items, 3);
            let reducerLine = (arr) => {
                    if(arr !== undefined){
                        return arr.map((item) => {
                            return (
                                <div key={item._id}>
                                    <CategoryItem infor = { item } addcart = { this.addToCart }/>
                                </div>
                            )
                        });
                    }
            }
            lineOne = reducerLine(items[0]);
            lineTwo = reducerLine(items[1]);
            lineThree = reducerLine(items[2]);
        }

        let list = [];
        for(var i=1; i<= this.state.pages; ++i){
            let page = i;
            list.push(<li key={i} onClick={ () => this.paginate(page) }><span>{i}</span></li>);
        }


        return (
                <Aux>
                <Header cart = {this.state.cartItems}
                    menu = { this.state.category }/>
                <Notifications />
                <div className="products">
                    <div className="container">
                        <h1>Products</h1>
                        <div className="col-md-9">
                            <div className="content-top1">
                                    {lineOne}
                                <div className="clearfix"> </div>
                            </div>
                            <div className="content-top1">
                                    { lineTwo }
                                <div className="clearfix"> </div>
                            </div>
                            <div className="content-top1">
                                    {lineThree}
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-12">
                                <ul className="pagination pagination-sm">
                                    {list}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 product-bottom">
                            <div className=" rsidebar span_1_of_left">
                                <RightCategory/>
                            </div>
                            <BestSeller bestSale = { this.state.bestSale }/>
                            <Tags/>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <Footer/>
                </Aux>
                )
            }
        }
                    
export default Category;