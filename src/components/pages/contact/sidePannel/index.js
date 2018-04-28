import React, { Component } from 'react';
import config from '../../../../config';

class SidePanel extends Component {

    render() {
        let onlineStaffs = null;

        if(this.props.staff.length !== 0){
            onlineStaffs = this.props.staff.map((staff) => {
                if(staff._id !== this.props.user._id){
                    return (
                        <li className="contact active" onClick = { () => this.props.fetch(staff._id) } key={staff._id}>
                            <div className="wrap">
                                <span className="contact-status busy"></span>
                                <img src= { `${config.BASE_API_URL}img/${staff.avata}` } alt="" />
                                <div className="meta">
                                    <p className="name">{staff.username}</p>
                                    <p className="preview">Đang online...</p>
                                </div>
                            </div>
                        </li>
                    );
                }
                return (
                    <li className="contact active">
                        <div className="wrap">
                            <div className="meta">
                                <p className="name">Hiện không có nhân viên online</p>
                            </div>
                        </div>
                    </li>
                );
            });
        }else{
            onlineStaffs = (
               
                    <li className="contact active">
                        <div className="wrap">
                            <div className="meta">
                                <p className="name">Hiện không có nhân viên online</p>
                            </div>
                        </div>
                    </li>
               
            )
        }
        return (
            <div id="sidepanel">
                        <div id="profile">
                            <div className="wrap">
                            <img src= { `${config.BASE_API_URL}img/${this.props.user.avata}` } alt="" />
                                <p>{this.props.user.username}</p>
                                <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                                <div id="status-options">
                                    <ul>
                                        <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                                        <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                                        <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                                        <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                                    </ul>
                                </div>
                                <div id="expanded">
                                    <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                                    <input name="twitter" type="text"  />
                                    <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                                    <input name="twitter" type="text"  />
                                    <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                                    <input name="twitter" type="text"  />
                                </div>
                            </div>
                        </div>
                        <div id="search">
                          <hr/>
                        </div>
                        <div id="contacts">
                            <ul>
                               { onlineStaffs }
                            </ul>
                        </div>
                        <div id="bottom-bar">
                            
                        </div>
                    </div>
        )
    }

}

export default SidePanel;