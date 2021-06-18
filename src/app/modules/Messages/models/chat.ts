import { ChatMessage } from "./chat-message";
import { ChatPreview } from "./chat-preview";

export interface Chat extends ChatPreview{
    messages: Array<ChatMessage>;
}