interface IServerResponse {
    success: boolean;
    messageId: string;
    timestamp: number;
}

export const sendMessageToServer = async (text: string): Promise<IServerResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const isFail = Math.random() < 0.1;

    if (isFail) {
        throw new Error("Network Error");
    }

    return {
        success: true,
        messageId: `msg-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
    };
};