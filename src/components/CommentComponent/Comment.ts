export default class Comment {
    constructor(id: string, username: string, date: string, time: string, text: string, parentId: string | null) {
        this.id = id;
        this.username = username;
        this.date = date;
        this.time = time;
        this.text = text;
        this.parentId = parentId;
    }

    public id: string;
    public username: string;
    public date: string;
    public time: string;
    public text: string;
    public parentId: string | null;
}