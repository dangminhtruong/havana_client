import React, { Component } from 'react';
import config from '../../../config';
import axios from '../../../axios';

class Comments extends Component {

    render() {
        let comments;

        if(this.props.comments){
            comments = this.props.comments.map((item, index) => {
                return (
                    <ul id="comments-list" className="comments-list" key={ `main${index}` }>
                    <li>
                        <div className="comment-main-level">
                            <div className="comment-avatar">
                                <img  src={`${config.BASE_API_URL}img/${item.avata}`} alt="" /></div>
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name">
                                        <a href="http://creaticode.com/blog">{ item.user_name }</a>
                                    </h6>
                                    <span>{ item.createdOn }</span>
                                    <i className="fa fa-reply"></i>
                                    <i className="fa fa-heart"></i>
                                </div>
                                <div className="comment-content">
                                { item.content }                                    
						</div>
                            </div>
                        </div>
                        <ul className="comments-list reply-list">
                            {
                               item.reply.map((reply, id) => {
                                    return (
                                        <li key={ `reply${id}` }>
                                        <div className="comment-avatar">
                                            <img  src={`${config.BASE_API_URL}img/${reply.avata}`} alt="" />
                                        </div>
        
                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6 className="comment-name"><a href="http://creaticode.com/blog">{ reply.user_name }</a></h6>
                                                <span>{ reply.createdOn }</span>
                                                <i className="fa fa-reply"></i>
                                                <i className="fa fa-heart"></i>
                                            </div>
                                            <div className="comment-content">
                                                { reply.content }
                                    </div>
                                        </div>
                                    </li>
                                    )
                               })
                           }
                        </ul>
                    </li>
                </ul>
                )
            });
        }

        return (
            <div className="comments-container">
                <h1 id="comments">Bình luận</h1>
                { comments }
                <div className="form-group" style={{ textAlign : 'left' }}>
                    <label htmlFor="comment">Viết bình luận:</label>
                    <textarea className="form-control" rows="5" id="comment"
                             value={this.props.comment} onChange={this.props.handleChangeComment}></textarea>
                    <button type="button" className="btn btn-primary" 
                            onClick = { () => this.props.handleComment() }
                            style={{ marginTop : '2vh', backgroundColor : '#52D0C4' }}>
                        Bình luận
                    </button>
                </div>
            </div>
        );
    }
}

export default Comments;