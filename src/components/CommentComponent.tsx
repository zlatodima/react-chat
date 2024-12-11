import React from "react";
import {getDate, getTime} from "../utils/utils";
import Comment from "./Comment"
import './CommentComponent.css';

interface CommentState {
    comments: Comment[];
}

class CommentComponent extends React.Component<{}, CommentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [
                new Comment(
                    "Dima",
                    getDate(),
                    getTime(),
                    "message"
                ),
                new Comment(
                    "Roma",
                    getDate(),
                    getTime(),
                    "Hello Roma"
                )
            ]
        }
    }
    render() {
        return this.state.comments.map((comment) => {
            return <div className="comment_container">
                <div className="autor_panel">
                    <p className="username">{comment.username}</p>
                    <p className="fullDate">{comment.date} в {comment.time}</p>
                </div>
                <div className="comment_panel">
                    <p className="text">{comment.text}</p>
                </div>
            </div>
        });
    }
}
export default CommentComponent;