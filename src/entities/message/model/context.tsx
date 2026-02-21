import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IMessage } from './types';
import { MessageState, Action, messageReducer, initialState } from './slice';

interface MessageContextType {
    messages: IMessage[];
    addMessage: (tempId: string, text: string) => void;
    updateStatus: (id: string, status: IMessage['status']) => void;
    confirmMessage: (tempId: string, realId: string) => void;
}

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider =  ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    const addMessage = (tempId: string, text: string) => {
        const newMsg: IMessage = {
            id: tempId,
            text,
            user: 'User',
            status: 'pending'
        };
        dispatch({ type: 'ADD', payload: newMsg });
    };

    const updateStatus = (id: string, status: IMessage['status']) => {
        dispatch({ type: 'UPDATE_STATUS', payload: { id, status }});
    };

    const confirmMessage = (tempId: string, realId: string) => {
        dispatch({ type: 'CONFIRM_MESSAGE', payload: { tempId, realId }});
    };

    return (
        <MessageContext.Provider value={{ 
            messages: state.messages, 
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