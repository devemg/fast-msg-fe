import { Message } from './message.model';

export class Chat {
    constructor(
        public id:number,
        public contactName:string,
        public contactImage:string,
        public messages:Message[]
    ){}
}