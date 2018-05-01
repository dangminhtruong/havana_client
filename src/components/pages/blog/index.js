import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import config from '../../../config';
import { NavLink } from 'react-router-dom';

class Blog extends Component {

    state = {
        cartItems: [],
        category: [],
        blogs: []
    }

    componentDidMount() {
        axios.get('/blog')
            .then((response) => {
                this.setState({
                    cartItems: response.data.cart,
                    category: response.data.category,
                    blogs: response.data.blogs
                });
            });
    }

    render() {
        let list;
        if (this.state.blogs.length !== 0) {
            list = this.state.blogs.map((item) => {
                return (
                    <div className="col-sm-12" key={ item._id }>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">{ item.title }</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-3">
                                <img src= { `${config.BASE_API_URL}img/${item.avata}` } 
                                className="img-responsive" alt="" style={{ height : '150px' }}/>
                                </div>    
                                <div className="col-md-9">
                                    <div className="col-md-12" style = {{  textAlign : 'left', overflowY : 'hidden', marginBottom : '3vh', textOverflow : 'ellipsis', maxHeight : '14vh' }}>
                                     <p dangerouslySetInnerHTML={{__html: item.content }} />
                                    </div>
                                    <div className="col-md-12"> 
                                    <NavLink className="btn btn-primary" to ={ `/post/${item._id}`} exact style={{ float : 'left', backgroundColor: '#52d0c4', borderColor: '#52d0c4' }}>
                                        <span>Xem thêm </span>
                                        <span className="glyphicon agileits w3layouts glyphicon-arrow-right" aria-hidden="true"></span>
                                    </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <Aux>
                <Header cart={this.state.cartItems}
                    menu={this.state.category} />
                <div className="account">
                    <div className="page-header">
                        <h1>Blogs</h1>
                    </div>
                    { list }
                </div>
                <Footer />
            </Aux>
        )
    };
}

export default Blog;