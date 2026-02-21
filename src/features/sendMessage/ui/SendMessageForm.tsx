import React, { useState } from 'react';
import { Button, Input } from '../../../shared';
import { useMessages } from '../../../entities/message';
import { sendMessageToServer } from '../../../shared/api/chatApi';

export const SendMessageForm = () => {
    const [text, setText] = useState('');
    const { addMessage, updateStatus, confirmMessage } = useMessages();
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!text || isLoading) return;

        const tempId = Date.now().toString();

        addMessage(tempId, text);
        setText('');

        setIsLoading(true);

        try {
            const response = await sendMessageToServer(text);
            confirmMessage(tempId, response.messageId);
        } catch (error) {
            console.error('Fail to send', error);
            updateStatus(tempId, 'error');
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
