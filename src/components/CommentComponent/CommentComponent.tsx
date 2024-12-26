import React from "react";
import {getDate, getTime} from "../../utils/utils";
import Comment from "./Comment"
import './CommentComponent.css';
import NestedComment from "./NestedComment";

interface CommentState {
    comments: Comment[];
}

class CommentComponent extends React.Component<{}, CommentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [
            new Comment(
                "1",
                "Dima",
                getDate(),
                getTime(),
                "This is the root comment from Dima.",
                null // Root comment has no parent
            ),
            new Comment(
                "2",
                "Roma",
                getDate(),
                getTime(),
                "This is a reply to Dima's comment.",
                "1" // Parent is comment with ID "1"
            ),
            new Comment(
                "3",
                "Alex",
                getDate(),
                getTime(),
                "This is a reply to Roma's comment.",
                "2" // Parent is comment with ID "2"
            ),
            new Comment(
                "4",
                "Mike",
                getDate(),
                getTime(),
                "This is another root comment from Mike.",
                null // Another root comment
            ),
            new Comment(
                "5",
                "Anna",
                getDate(),
                getTime(),
                "This is a reply to Mike's comment.",
                "4" // Parent is comment with ID "4"
            ),
            new Comment(
                "6",
                "Sarah",
                getDate(),
                getTime(),
                "This is a reply to Anna's comment.",
                "5" // Parent is comment with ID "5"
            ),
            new Comment(
                "7",
                "John",
                getDate(),
                getTime(),
                "This is a standalone root comment.",
                null // Root comment with no replies
            )
        ]
        }
    }

    private getParentTree(comments: Comment[]) {
        let treeMap: Map<String, NestedComment> = new Map<String, NestedComment>();

        let nestedComments: NestedComment[] = comments.map((comment: Comment) => {
            let nestedComment: NestedComment = {
                ...comment,
                replies: []
            };

            treeMap.set(comment.id, nestedComment);

            return nestedComment;
        });

        let parentArray: NestedComment[] = [];
        nestedComments.forEach((nestComment: NestedComment) => {
            if (nestComment.parentId) {
               let parent: NestedComment | undefined = treeMap.get(nestComment.parentId);

               if (parent) {
                   parent.replies.push(nestComment);
               }
            }
            else {
                parentArray.push(nestComment);
            }
        });

        return parentArray;
    }

    private renderComments(comments: NestedComment[], depth: number) {
        return comments.map((comment: NestedComment) => {
            return <li className="comment_container" style={{ marginLeft: depth * 20 }}>
                <div className="autor_panel">
                    <p className="username">{comment.username}</p>
                    <p className="fullDate">{comment.date} в {comment.time}</p>
                </div>
                <div className="comment_panel">
                    <p className="text">{comment.text}</p>
                </div>
                {/*{ depth !== 0 &&*/}
                {/*    <img className="response_arrow" alt="Chat Arrow" style={{*/}
                {/*        left: -180 + depth * 50,*/}
                {/*        // '--react-left': `${depth * 20}px`*/}
                {/*    }}/>*/}
                {/*}*/}
                <ul>
                    {this.renderComments(comment.replies, depth + 1)}
                </ul>
            </li>
        });
    }

    render() {
        let parentTree: NestedComment[] = this.getParentTree(this.state.comments);
        console.log(parentTree)
        return <ul className="comments_container">
            {this.renderComments(parentTree, 0)}
        </ul>
    }
}
export default CommentComponent;