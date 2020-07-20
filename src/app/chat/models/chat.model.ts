import { Message } from './message.model';

export class Chat {
    constructor(
        public id:number,
        public name:string,
        public image:string,
        public messages:Message[]
    ){}
}