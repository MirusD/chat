import { useEffect, useRef } from 'react';
import { useMessages, MessageCard } from 'entities/message';
import { SendMessageForm } from 'features/sendMessage';
import { useChats } from 'entities/chat';

import './ChatRoom.module.css';

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
        <div className='chat-room'>
            <div className='chat-room__container'>
                <h2 className='chat-room__title'>{activeChat.title}</h2>

                <div className='chat-room__messages'>
                    {messages.map((msg) => (
                        <MessageCard key={msg.id} message={msg} />
                    ))}
                </div>

                <div className='chat-room__send-message-field'>
                    <SendMessageForm />
                </div>
            </div>
        </div>
    );
};