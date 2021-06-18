import { ChatMessage } from "./chat-message";

export interface Chat {
    id: string; 
    image: string; 
    title: string; 
    messages: Array<ChatMessage>;
}