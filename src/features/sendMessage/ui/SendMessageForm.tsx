import { useState } from 'react';
import { Button, Input } from 'shared';
import { useMessages } from 'entities/message';
import { messageApi } from '../api/messageApi';
import { useChats } from 'entities/chat';
import { useNotification } from 'entities/notification';

import './SendMessageForm.module.css';

export const SendMessageForm = () => {
    const [text, setText] = useState('');
    const { activeChatId, updateLastMessage } = useChats();
    const { addMessage, updateStatus, confirmMessage } = useMessages();
    const { showNotification } = useNotification();
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!text || isLoading || !activeChatId) return;

        const tempId = Date.now().toString();

        addMessage(activeChatId, tempId, text, 'User');
        setText('');

        setIsLoading(true);

        try {
            const response = await messageApi.sendMessage(text, activeChatId);
            confirmMessage(activeChatId, tempId, response.messageId);
            updateLastMessage(text);
            showNotification('Сообщение отправлено', 'success');
        } catch (error) {
            updateStatus(activeChatId, tempId, 'error');
            showNotification('Ошибка отправки сообщения!', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="send-message-form">
            <div className="send-message-form__input">
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Сообщение"
                />
            </div>
            <Button onClick={handleSend}>Отправить</Button>
        </div>
    );
};
