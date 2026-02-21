import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IMessage } from './types';
import { MessageState, Action, messageReducer, initialState } from './slice';

interface MessageContextType {
    getMessages: (chatId: string) => IMessage[];
    addMessage: (chatId: string, tempId: string, text: string, user: string) => void;
    updateStatus: (chatId: string, id: string, status: IMessage['status']) => void;
    confirmMessage: (chatId: string, tempId: string, realId: string) => void;
}

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider =  ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    const getMessages = (chatId: string) => state[chatId] || [];

    const addMessage = (chatId: string, tempId: string, text: string, user: string) => {
        dispatch({ 
            type: 'ADD', 
            payload: {
                chatId,
                msg: {id: tempId, text, user, status: 'pending' }
            }
        });
    };

    const updateStatus = (chatId: string, id: string, status: IMessage['status']) => {
        dispatch({ type: 'UPDATE_STATUS', payload: { chatId, id, status }});
    };

    const confirmMessage = (chatId: string, tempId: string, realId: string) => {
        dispatch({ type: 'CONFIRM_MESSAGE', payload: { chatId, tempId, realId }});
    };

    return (
        <MessageContext.Provider value={{ 
            getMessages,
            addMessage, 
            updateStatus,
            confirmMessage
        }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessages = () => {
    const context = useContext(MessageContext);
    if (!context) throw new Error('useMessages должен использовать MessageProvider');
    return context;
}