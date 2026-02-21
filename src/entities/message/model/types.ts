export interface IMessage {
    id: string;
    text: string;
    user: string;
    status: 'pending' | 'sent';
}