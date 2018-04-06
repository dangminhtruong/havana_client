import React, { Component } from 'react';

class SidePanel extends Component {

    render() {
        return (
            <div id="sidepanel">
                        <div id="profile">
                            <div className="wrap">
                                <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                                <p>Mike Ross</p>
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
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Louis Litt</p>
                                            <p className="preview">You just got LITT up, Mike.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact active">
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Harvey Specter</p>
                                            <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status away"></span>
                                        <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Rachel Zane</p>
                                            <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Donna Paulsen</p>
                                            <p className="preview">Mike, I know everything! I'm Donna..</p>
                                        </div>
                                    </div>
                                </li>
                            
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Harold Gunderson</p>
                                            <p className="preview">Thanks Mike! :)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Daniel Hardman</p>
                                            <p className="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                                        <div className="meta">
                                            <p className="name">Daniel Hardman</p>
                                            <p className="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                        </div>
                                    </div>
                                </li>
                              
                            </ul>
                        </div>
                        <div id="bottom-bar">
                            
                        </div>
                    </div>
        )
    }

}

export default SidePanel;