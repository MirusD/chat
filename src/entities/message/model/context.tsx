import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IMessage } from './types';
import { MessageState, Action, messageReducer, initialState } from './slice';

interface MessageContextType {
    messages: IMessage[];
    addMessage: (id: string, text: string) => void;
    updateStatus: (id: string, status: IMessage['status']) => void;
}

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider =  ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    const addMessage = (id: string, text: string) => {
        const newMsg: IMessage = {
            id,
            text,
            user: 'User',
            status: 'pending'
        };
        dispatch({ type: 'ADD', payload: newMsg });
    };

    const updateStatus = (id: string, status: IMessage['status']) => {
        dispatch({ type: 'UPDATE_STATUS', payload: {id, status }});
    }

    return (
        <MessageContext.Provider value={{ messages: state.messages, addMessage, updateStatus}}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessages = () => {
    const context = useContext(MessageContext);
    if (!context) throw new Error('useMessages должен использовать MessageProvider');
    return context;
}