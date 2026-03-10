import { IMessageResponse } from '../model/types';

export const messageApi = {
    async sendMessage(): Promise<IMessageResponse> {
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