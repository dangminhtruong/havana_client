import React, { Component } from 'react';

class InfoUpdate extends Component {

    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        email : '',
        phone : '',
        address : '',
        username : ''
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    updateInfo = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="col-md-12 login-right">
                <form>
                    <span>Họ tên</span>
                    <input type="text" autoComplete='' value={this.props.user.username} 
                            name='username' onChange={this.handleChange}/>

                    <span>Số điện thoại</span>
                    <input type="text" style={{ width: '96%', padding: '10px', }} autoComplete='' 
                            value={this.props.user.phone} onChange={this.handleChange} name="phone"/>
                    
                    <span>Email</span>
                    <input type="text" style={{ width: '96%', padding: '10px', }} 
                            value={this.props.user.email} autoComplete='' onChange={this.handleChange} name="email"/>
                    
                    <span>Địa chỉ</span>
                    <input type="text" style={{ width: '96%', padding: '10px', }} autoComplete='' 
                            value={this.props.user.address} onChange={this.handleChange} name="address"/>

                    <div className="word-in">
                        <button type="button" onClick={this.updateInfo}>Cập nhật</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InfoUpdate;