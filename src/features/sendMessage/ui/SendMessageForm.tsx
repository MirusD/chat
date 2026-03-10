import { useState } from 'react';
import { Button, Input } from 'shared';
import { useMessages } from 'entities/message';
import { messageApi } from '../api/messageApi';
import { useChats } from 'entities/chat';
import { useNotification } from 'entities/notification';

import './SendMessageForm.module.css';

const ECHO_RESPONSES = [
    'Интересно!',
    'Понял, спасибо!',
    'Хорошо, договорились 👍',
    'Ага, ясно',
    'Круто!',
    'Да, согласен',
    'Расскажи подробнее',
    '😄',
    'Окей',
    'Принято!',
];

export const SendMessageForm = () => {
    const [text, setText] = useState('');
    const { activeChatId, updateLastMessage } = useChats();
    const { addMessage, updateStatus, confirmMessage } = useMessages();
    const { showNotification } = useNotification();
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!text || isLoading || !activeChatId) return;

        const tempId = Date.now().toString();

        addMessage(activeChatId, tempId, text, 'Вы');
        setText('');

        setIsLoading(true);

        try {
            const response = await messageApi.sendMessage();
            confirmMessage(activeChatId, tempId, response.messageId);
            updateLastMessage(text);
            showNotification('Сообщение отправлено', 'success');

            // Имитация ответа от собеседника (эхо)
            setTimeout(() => {
                const randomResponse = ECHO_RESPONSES[Math.floor(Math.random() * ECHO_RESPONSES.length)];
                const echoTempId = (Date.now() + 1).toString();
                addMessage(activeChatId, echoTempId, randomResponse, 'Собеседник');
                
                // Через небольшую задержку подтверждаем сообщение
                setTimeout(() => {
                    const echoRealId = `msg-${Math.random().toString(36).substr(2, 9)}`;
                    confirmMessage(activeChatId, echoTempId, echoRealId);
                    updateLastMessage(randomResponse);
                }, 500);
            }, 1000 + Math.random() * 2000); // Ответ через 1-3 секунды
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
