export class Message{
    constructor(
        public id:number,
        public content:string,
        public date:Date,
        public owner:number
    ){}
}