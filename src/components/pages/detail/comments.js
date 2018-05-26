import React, { Component } from 'react';
import config from '../../../config';

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
                                <img  src={`${config.BASE_API_URL}img/${item.avata}.jpg`} alt="" /></div>
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name by-author">
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
                                            <img  src={`${config.BASE_API_URL}img/${reply.avata}.jpg`} alt="" />
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
                <h1>Comentarios</h1>
                { comments }
            </div>
        );
    }
}

export default Comments;