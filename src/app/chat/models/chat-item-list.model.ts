import { Message } from './message.model';

export class ChatItemList{
    constructor(
        public id:number,
        public name:string,
        public image:string,
        public lastMessage:Message
    ){}
}