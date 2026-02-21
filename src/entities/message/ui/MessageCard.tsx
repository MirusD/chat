import React from 'react';
import { IMessage } from '../model/types';

export const MessageCard = ({ message }: { message: IMessage }) => {
    return (
        <div style={{ 
            border: '1px solid #ccc', 
            margin: '5px 0', 
            padding: '10px',
            backgroundColor: message.status === 'pending' ? '#f0f0f0' : '#fff',
            fontStyle: message.status === 'pending' ? 'italic' : 'normal'
        }}>
            <strong>{message.user}: </strong>
            <span>{message.text}</span>
      {message.status === 'pending' && <span style={{float: 'right', fontSize: '10px'}}>⏳</span>}
      {message.status === 'sent' && <span style={{float: 'right', fontSize: '10px'}}>✅</span>}
        </div>
    )
}