import Comment from "./Comment";

export default class NestedComment extends Comment{
    constructor(id: string, username: string, date: string, time: string, text: string, parentId: string | null) {
        super(id, username, date, time, text, parentId);
        this.replies = [];
    }

    public replies: NestedComment[];
}