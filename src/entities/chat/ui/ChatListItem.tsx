import React from 'react';
import { IChat } from '../model/types';

interface Props {
    chat: IChat;
    isActive: boolean;
    onClick: () => void;
}

export const ChatListItem = ({ chat, isActive, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            style={{
                padding: '15px',
                cursor: 'pointer',
                backgroundColor: isActive ? '#e0e0e0' : 'transparent',
                borderBottom: '1px solid #ddd',
            }}
        >
            <div style={{ fontWeight: 'bold'}}>{chat.title}</div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                {chat.lastMessage || 'Нет сообщений'}
            </div>
        </div>
    );
};