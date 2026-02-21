import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ChatState, ChatAction, chatReducer, initialState } from './slice';
import { IChat } from './types';

interface ChatContextType {
    chats: IChat[];
    activeChatId: string | null;
    activeChat: IChat | undefined;
    setActiveChat: (id: string) => void;
    updateLastMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    const activeChat = state.chats.find(c => c.id === state.activeChatId);

    const setActiveChat = (id: string) => dispatch({ type: 'SET_ACTIVE', payload: id });

    const updateLastMessage = (text: string) => dispatch({ type: 'UPDATE_LAST_MESSAGE', payload: { chatId: activeChat?.id ?? '', text}})

    return (
        <ChatContext.Provider value={{
            chats: state.chats,
            activeChatId: state.activeChatId,
            activeChat,
            setActiveChat,
            updateLastMessage
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChats = () => {
    const ctx = useContext(ChatContext);
    if (!ctx) throw new Error('useChats error');
    return ctx;
};