export default class Comment {
    constructor(username: string, date: string, time: string, text: string) {
        this.username = username;
        this.date = date;
        this.time = time;
        this.text = text;
    }

    public username: string;
    public date: string;
    public time: string;
    public text: string;
}