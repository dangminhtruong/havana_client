import React, { Component } from 'react';
import axios from '../../../../axios';
import Notifications, {notify} from 'react-notify-toast';

class ChangePass extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.show = notify.createShowQueue();
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }


    state = {
        currentPass : '',
        newPass : '',
        rePass : '',
        alert : false
    }

    updatePassword = () => {
        if(this.state.newPass !== this.state.rePass){
            this.setState({
                alert : true
            });
        }else if(this.state.currentPass !== this.props.user.password){
            this.setState({
                alert : true
            });
        }else if(this.state.currentPass === '' || this.state.newPass === '') {
            this.setState({
                alert : true
            });
        }else{
            axios.post('password/change', 
                { newPass : this.state.newPass,  userId : this.props.user._id}
            ).then((response) => {
                if(response.data.status === 200){
                    this.show('Cập nhật thành công !', 'success', 1000);
                }else{
                    this.show(`Có lỗi xảy ra !`, 'error', 1000);
                }
                console.log(response);
            });
        }
    }

    render() {
        return (
            <div className="col-md-12 login-right">
                <Notifications />
                <form>
                    <span>Mật khẩu hiện tại</span>
                    <input type="password" style={{ width: '96%', padding: '10px', }}  autoComplete='' name="currentPass" onChange = { this.handleChange }/>
                    
                    <span>Mật khẩu mới</span>
                    <input type="password" style={{ width: '96%', padding: '10px', }} autoComplete='' 
                            name="newPass" onChange = { this.handleChange }/>
                    <span>Xác nhận mật khẩu mới</span>
                    <input type="password" style={{ width: '96%', padding: '10px', }} autoComplete='' 
                            name="rePass" onChange = { this.handleChange }/>
                     {(this.state.alert) ?
                        <small id="emailHelp" className="form-text text-muted">
                            <p className="alertLogin">Sai mật khẩu hoặc gõ lại không trùng khớp!</p>
                        </small> : null}
                    <div className="word-in">
                        <button type="button" onClick={this.updatePassword}>Xong</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChangePass;