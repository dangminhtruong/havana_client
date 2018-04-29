import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../reuse/header';
import Aux from '../../../hocs/Aux';
import Footer from '../../reuse/footer';
import axios from '../../../axios';
import $ from 'jquery';
import config from '../../../config';
import History from './history';
import ChangePass from './changePassword';
import InfoUpdate from './info';

class Profile extends Component {
    state = {
        category: [],
        cartItems: [],
        user : {},
        bills : [],
        tab : 1
    }

    componentDidMount() {
        axios.get('profile')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    category: response.data.category,
                    cartItems: response.data.cart,
                    user : response.data.user,
                    bills : response.data.bills
                });
            });
    }

   
        changeAvata = () => {
            $('#profile-image-upload').click();
            /* let data = new FormData();
            data.append('file', document);
            data.append('name', name); */
        };      

        changeTab = (val) => {
            this.setState({
                tab : val
            });
        }

    //---------------------------
  
       /*  $('#profile-image-upload').change(function(){
            $('#submit_change_avata').click();
        }); */
  


    render() {
        return (
            <Aux>
                <Header cart={this.state.cartItems}
                    menu={this.state.category} />
                <div className="container" style = {{ minHeight : '65vh', marginTop : '10vh', fontSize : '15px' }}>
                    <div className="col-md-3">
                        <div className="col-md-12">
                            <div align="left"> 
                            <img alt="User Pic"src= { (this.state.user) ? `${config.BASE_API_URL}img/${this.state.user.avata}` : `${config.BASE_API_URL}img/avtar.jpg}` } 
                                onClick={ this.changeAvata } className="img-circle img-responsive" 
                                id="profile-image1"/>
                                <form method="post" encType="multipart/form-data">
                                    <input id="profile-image-upload" className="hidden" type="file" />
                                    <button type="submit" style={{ display: 'none' }} id="submit_change_avata"></button>
                                </form>
                                <div className="changeAvata">Click on avata to change profile image</div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p style= {{ float : 'left', marginTop : '5vh' }}>Họ tên: { this.state.user.username }</p>
                        </div>
                        <div className="col-md-12">
                            <p style= {{ float : 'left', marginTop : '5vh' }}>Số điện thoại : { this.state.user.phone }</p>
                        </div>
                        <div className="col-md-12">
                            <p style= {{ float : 'left', marginTop : '5vh' }}>Địa chỉ: { this.state.user.address }</p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="nav nav-tabs">
                        { (this.state.tab === 1) ? 
                            <li className="active">
                                <a >Lịch sử mua hàng</a>
                            </li> 
                            :
                            <li onClick={ () => this.changeTab(1)}> 
                                <a style={{ color : '#555' }}>Lịch sử mua hàng</a>
                            </li> 
                        }

                        { (this.state.tab === 2) ? 
                            <li className="active">
                                <a >Cập nhât thông tin cá nhân</a>
                            </li> 
                            :
                            <li onClick={ () => this.changeTab(2) }>
                                <a style={{ color : '#555' }}>Cập nhât thông tin cá nhân</a>
                            </li>
                        }

                         { (this.state.tab === 3) ? 
                            <li className="active">
                                <a >Đổi mật khẩu</a>
                            </li>
                            :
                            <li onClick={ () => this.changeTab(3) }>
                                <a style={{ color : '#555' }}>Đổi mật khẩu</a>
                            </li>
                        }
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade in active">
                                {
                                    (this.state.tab === 1) ?
                                    <History bills = { this.state.bills }/> :
                                    (this.state.tab === 2) ? 
                                    <InfoUpdate user = { this.state.user }/> :
                                    <ChangePass user = { this.state.user }/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Aux>
        )
    }
}

export default Profile;