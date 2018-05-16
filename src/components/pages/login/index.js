import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';

class Login extends Component {
    state = {
        category: [],
        cartItems: 0,
        username: '',
        password: '',
        showAlert: false,
    }

    componentDidMount() {
        axios.get('category')
            .then((responese) => {
                this.setState({
                    category: responese.data.category,
                    cartItems: responese.data.cart
                });
            });
    }

    login = () => {
        axios.post('/login/client', {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                if (response.data.status === 401) {
                    this.setState({
                        showAlert: true
                    });
                } else {
                    this.props.history.push("/");
                }
            });
    }

    setUserName = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    setPassWord = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <Aux>
                <Header cart={this.state.cartItems}
                    menu={this.state.category} />
                <div className="account">
                    <div className="container">
                        <h1>Đăng nhập</h1>
                        <div className="account_grid">
                            <div className="col-md-6 login-right">
                                <form>
                                    <span>Email</span>
                                    <input type="text" autoComplete='' value={this.state.username} onChange={this.setUserName.bind(this)} />
                                    <span>Mật khẩu</span>
                                    <input type="password" style={{ width: '96%', padding: '10px', }} autoComplete='' value={this.state.password} onChange={this.setPassWord.bind(this)} />
                                    {(this.state.showAlert) ?
                                        <small id="emailHelp" className="form-text text-muted">
                                            <p className="alertLogin">Sai thông tin đăng nhập!</p>
                                        </small> : null}
                                    <div className="word-in">
                                        <a className="forgot" >Quên mật khẩu ? </a>
                                        <button type="button" onClick={this.login}>Đăng nhập</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 login-left">
                                <h4>Bạn là khách hàng mới ?</h4>
                                <p>Nếu chưa có tài khoản, vui lòng tạo mới tài khoản của bạn.<br/>
                                   Đăng ký tài khoản thành viên sẽ tăng quyền lợi cũng như hưởng nhiều khuyến mãi hơn. <br/>
                                   Lưu ý, bằng việc nhấn vào tạo tài khoản, bạn đã đống ý nhưng điều khoản sử dụng đối với website cửa hàng...</p>
                                <NavLink to="/signup" className="acount-btn" exact>Tạo mới tài khoản</NavLink>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Aux>
        )
    }

}

export default Login;