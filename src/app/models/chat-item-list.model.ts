import { Message } from './message.model';

export class ChatItemList{
    constructor(
        public id:number,
        public contactName:string,
        public contactImage:string,
        public lastMessage:Message
    ){}
}