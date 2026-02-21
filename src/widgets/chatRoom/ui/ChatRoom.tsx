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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
                <h2>Chat Room</h2>

                <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #eee', padding: '10px', marginBottom: '10px', background: '#fff' }}>
                    {messages.map((msg) => (
                        <MessageCard key={msg.id} message={msg} />
                    ))}

                    <div style={{ marginBottom: '20px' }}>
                        <SendMessageForm />
                    </div>
                </div>
            </div>
        </div>
    );
};