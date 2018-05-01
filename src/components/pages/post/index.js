import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import config from '../../../config';

class Post extends Component {

    state = {
        cartItems: [],
        category: [],
        post: []
    }

    componentDidMount() {
        axios.get(`/post/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cartItems: response.data.cart,
                    category: response.data.category,
                    post: response.data.post
                });
            });
    }

    render() {

        return (
            <Aux>
                <Header cart={this.state.cartItems}
                    menu={this.state.category} />
                <div className="page" style={{ minHeight : '65vh' }}>
                    <div style={{ marginBottom : '5vh', textAlign : 'center' }}>
                        <h3 style={{ fontFamily : 'OleoScript-Regular' }}>{ this.state.post.title }</h3>
                    </div>
                    <div className="col-md-3">
                        <div className="col-md-12">
                        <img src= { `${config.BASE_API_URL}img/${(this.state.post.length !== 0) ? this.state.post.user.avata : 'product1a.jpg'}` } 
                                className="img-responsive" alt="" style={{ height : '150px' }}/>
                        </div>
                      <div className="col-md-12 rơ" style={{  textAlign : 'left', fontSize : '15px' }}>
                          <span>Đăng bởi <i class="fa fa-user-o" aria-hidden="true"></i>  </span>
                          <span style={{ color : '#52d0c4' }}> {(this.state.post.length !== 0) ? this.state.post.user.username : 'Admin'}</span>
                     </div> 
                     <div className="col-md-12 rơ" style={{  textAlign : 'left', fontSize : '15px' }}>
                          <span>Lượt bình luận <i class="fa fa-commenting-o" aria-hidden="true"></i> </span>
                          <span style={{ color : '#52d0c4' }}>{(this.state.post.length !== 0) ? this.state.post.comment.length : '0'} </span>
                     </div> 
             
                    </div>
                    <div className="col-md-9 row container" style={{ textAlign : 'left' }}>
                        { this.state.post.content }
                    </div>
                </div>
                <Footer/>
            </Aux>
        )
    };
}

export default Post