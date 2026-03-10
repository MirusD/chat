export interface IMessageRequest {
    text: string;
    chatId: string;
}

export interface IMessageResponse {
    messageId: string;
    timestamp: number;
}