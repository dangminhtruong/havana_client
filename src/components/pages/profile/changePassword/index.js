import React, { Component } from 'react';

class ChangePass extends Component {
    render() {
        return (
            <div className="col-md-12 login-right">
                <form>
                    <span>Mật khẩu hiện tại</span>
                    <input type="text" autoComplete=''/>
                    <span>Mật khẩu mới</span>
                    <input type="password" style={{ width: '96%', padding: '10px', }} autoComplete='' />
                    <span>Xác nhận mật khẩu mới</span>
                    <input type="password" style={{ width: '96%', padding: '10px', }} autoComplete='' />
                    <div className="word-in">
                        <button type="button">Xong</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChangePass;