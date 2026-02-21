import React, { useState } from 'react';
import { Button, Input } from '../../../shared';
import { useMessages } from '../../../entities/message';

export const SendMessageForm = () => {
    const [text, setText] = useState('');
    const { addMessage, updateStatus } = useMessages();

    const handleSend = () => {
        if (!text) return;

        const tempId = Date.now().toString();
        addMessage(tempId, text);

        setTimeout(() => {
            updateStatus(tempId, 'sent');
            console.log('Message delivered (mock)');
        }, 1000);

        setText('');
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
