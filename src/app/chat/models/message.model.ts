export class Message{
    constructor(
        public _id:number,
        public content:string,
        public date:Date,
        public owner:number
    ){}
}