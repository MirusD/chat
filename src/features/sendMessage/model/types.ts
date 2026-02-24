export interface IMessageRequest {
    text: String;
    chatId: String;
}

export interface IMessageResponse {
    messageId: string,
    timestamp: number,
}