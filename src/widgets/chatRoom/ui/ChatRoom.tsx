import React, { useEffect, useRef } from 'react';
import { useMessages, MessageCard } from '../../../entities/message';
import { SendMessageForm } from '../../../features/sendMessage';

export const ChatRoom = () => {
    const { messages } = useMessages();

    const messageEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div style={{ maxWidth: '600px', margin: '0, auto', padding: '20px'}}>
            <h2>Chat Room</h2>

            {/*Список сообщений*/}
            <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #eee' }}>
                {messages.map((msg) => (
                    <MessageCard key={msg.id} message={msg} />
                ))}

                {/*Форма отправки*/}
                <SendMessageForm />
            </div>
        </div>
    );
};