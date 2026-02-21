import React, { useEffect, useRef } from 'react';
import { useMessages, MessageCard } from '../../../entities/message';
import { SendMessageForm } from '../../../features/sendMessage';
import { useChats } from '../../../entities/chat';

export const ChatRoom = () => {
    const { activeChatId, activeChat } = useChats();
    const { getMessages } = useMessages();
    const messageEndRef = useRef<HTMLDivElement>(null);

    const messages = getMessages(activeChatId || '')
    ;
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!activeChat) return <div>Выберите чат</div>

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '15px', borderBottom: '1px solid #ccc', background: '#fff' }}>
                <h2 style={{ margin: 0 }}>{activeChat.title}</h2>

                <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                    {messages.map((msg) => (
                        <MessageCard key={msg.id} message={msg} />
                    ))}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <SendMessageForm />
                </div>
            </div>
        </div>
    );
};