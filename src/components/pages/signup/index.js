import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import Notifications, {notify} from 'react-notify-toast';

class Signup extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.show = notify.createShowQueue();
    }


    state = {
        category : [],
        cartItems : 0,
        userName : '',
        password : '',
        email : '',
        phone : '',
        address : '',
        repass : '',
        nullName : false,
        nullAddress : false,
        notMatchPass : false,
        nullPhone : false,
        nullEmail : false,
        nullPass : false,
        invalidEmail : false
    }

    componentDidMount(){
        axios.get('category')
        .then((responese) => {
            this.setState({
                category : responese.data.category,
                cartItems : responese.data.cart
            });
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    validateEmail =  (email) => {
        if (!/^.+@.+\..+$/.test(email)) {
          return true;
        }
        return false;
    }

    registerValidate = () => {
        if( this.state.userName === '' || this.state.phone === '' || this.state.email === '' ||
            this.state.address === '' || this.state.password === '' || 
            this.state.password !== this.state.repass || this.validateEmail(this.state.email))
        {
            (this.state.userName === '') ? this.setState({ nullName : true }) : this.setState({ nullName : false });
            (this.state.phone === '') ? this.setState({ nullPhone : true }) : this.setState({ nullPhone : false });
            (this.state.email === '') ? this.setState({ nullEmail : true }) : this.setState({ nullEmail : false });
            (this.state.address === '') ? this.setState({ nullAddress : true }) : this.setState({ nullAddress : false });
            (this.state.password === '') ? this.setState({ nullPass : true }) : this.setState({ nullPass : false }) ;
            (this.state.password !== this.state.repass) ? this.setState({  notMatchPass : true }) : this.setState({  notMatchPass : false });
            (this.validateEmail(this.state.email)) ? this.setState({ invalidEmail : true }) : this.setState({ invalidEmail : false });
            return false;
        }
        return true;
    }

    register = () => {
        if(this.registerValidate()) {
            axios.post('/register', {
                username : this.state.userName,
                userphone : this.state.phone,
                useremail : this.state.email,
                useraddress : this.state.address,
                password : this.state.password
            })
            .then((response) => {
                if(response.status === 200){
                    this.show('Register successfull, Direct to login !', 'success', 2000);
                    setTimeout(() => { this.props.history.push("/login"); }, 3000);
                }else{
                    this.show('Opps, Something went wrong !', 'error', 2000);
                }
            });
        }
    }

    render() {
        return (
            <Aux>
                <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
                <Notifications />
                <div className="container">
                    <div className="register">
                        <h1>Đăng ký</h1>
                            <form> 
                                <div className="col-md-6  register-top-grid">
                                    <div className="mation">
                                        <span>Tên đăng nhập</span>
                                        <input type="text" name="userName" onChange={this.handleInputChange}/> 
                                        { (this.state.nullName) ?
                                        <small id="emailHelp" className="form-text text-muted">
                                                <p className="alertLogin">Tên đăng nhập không để trống!</p>
                                        </small> : null }
                                        <span>Address</span>
                                        <input type="text" name="address" onChange={this.handleInputChange}/> 
                                        { (this.state.nullAddress) ?
                                        <small id="emailHelp" className="form-text text-muted">
                                                <p className="alertLogin">Your address is require!</p>
                                        </small> : null }
                                        <span>Số điện thoại</span>
                                        <input type="text" name="phone" onChange={this.handleInputChange}/> 
                                        { (this.state.nullPhone) ?
                                        <small id="emailHelp" className="form-text text-muted">
                                                <p className="alertLogin">Không để trống số điện thoại!</p>
                                        </small> : null }
                                    </div>
                                    <div className="clearfix"> </div>
                                    <span className="news-letter" onClick={ this.register }>
                                        <label className="acount-btn">Đăng ký</label>
                                    </span>
                                    </div>
                                    <div className=" col-md-6 register-bottom-grid">
                                            <div className="mation">
                                                <span>Email</span>
                                                <input type="text" name="email" onChange={this.handleInputChange}/> 
                                                { (this.state.nullEmail) ?
                                                <small id="emailHelp" className="form-text text-muted">
                                                        <p className="alertLogin">Địa chỉ email không để trống!</p>
                                                </small> : null }
                                                { (this.state.invalidEmail) ?
                                                <small id="emailHelp" className="form-text text-muted">
                                                        <p className="alertLogin">Đây không phải là một email ?</p>
                                                </small> : null }
                                                <span>Password</span>
                                                <input type="password" name="password" 
                                                    style={ { width: '100%',padding: '0.5em', border: '1px solid #EEE', margin: '0.5em 0' } } 
                                                    onChange={this.handleInputChange}/>
                                                { (this.state.nullPass) ?
                                                <small id="emailHelp" className="form-text text-muted">
                                                        <p className="alertLogin">Mật khẩu!</p>
                                                </small> : null }
                                                <span>Xác nhận mât khẩu</span>
                                                <input type="password" name="repass" 
                                                    style={ { width: '100%',padding: '0.5em', border: '1px solid #EEE', margin: '0.5em 0' } } 
                                                    onChange={this.handleInputChange}/>
                                                { (this.state.notMatchPass) ?
                                                    <small id="emailHelp" className="form-text text-muted">
                                                        <p className="alertLogin">Gõ lại mật khẩu không chính xác!</p>
                                                    </small> : null }
                                            </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </form>
                        </div>
                </div>
                <Footer/>
            </Aux>
        )
    }

}

export default Signup;