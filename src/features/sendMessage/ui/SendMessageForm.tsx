import { useState } from 'react';
import { Button, Input } from 'shared';
import { useMessages } from 'entities/message';
import { sendMessageToServer } from 'shared/api/chatApi';
import { useChats } from 'entities/chat';

export const SendMessageForm = () => {
    const [text, setText] = useState('');
    const { activeChatId, updateLastMessage } = useChats();
    const { addMessage, updateStatus, confirmMessage } = useMessages();
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!text || isLoading || !activeChatId) return;

        const tempId = Date.now().toString();

        addMessage(activeChatId, tempId, text, 'User');
        setText('');

        setIsLoading(true);

        try {
            const response = await sendMessageToServer(text);
            confirmMessage(activeChatId, tempId, response.messageId);
            updateLastMessage(text);
        } catch (error) {
            console.error('Fail to send', error);
            updateStatus(activeChatId, tempId, 'error');
            alert('Ошибка отправки сообщения!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите сообщение"
            />
            <Button onClick={handleSend}>Отправить</Button>
        </div>
    );
};
