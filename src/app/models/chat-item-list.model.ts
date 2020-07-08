import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export class ChatItemList{
    constructor(
        public id:number,
        public contactName:string,
        public contactImage:string,
        public lastMessage:Message
    ){}
}