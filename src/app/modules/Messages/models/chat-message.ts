export interface ChatMessage {
    id: string; 
    content: string; 
    date: Date;
    isOwn: boolean;
}