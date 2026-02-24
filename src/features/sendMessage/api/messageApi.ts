import { IMessageRequest, IMessageResponse } from '../model/types';
import { api } from 'shared/api';

export const messageApi = {
    async sendMessage(text: string, chatId: string): Promise<IMessageResponse> {
        // Пока заглушка
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const isFail = Math.random() < 0.1;

        if (isFail) {
            throw new Error("Network Error");
        }

        return {
            messageId: `msg-${Math.random().toString(36).substr(2, 9)}`,
            timestamp: Date.now(),
        };
    }
}