import { IChat } from './types';

export interface ChatState {
    chats: IChat[];
    activeChatId: string | null;
}

export type ChatAction =
    | { type: 'SET_ACTIVE'; payload: string }
    | { type: 'UPDATE_LAST_MESSAGE'; payload: { chatId: string; text: string }};

export const initialState: ChatState = {
    chats: [
        { id: 'chat-1', title: 'Общий чат', lastMessage: 'Привет всеь!' },
        { id: 'chat-2', title: 'Рабочий чат', lastMessage: 'Созвон в 15:00' },
        { id: 'chat-3', title: 'Флудилка', lastMessage: 'Как дела?'},
    ],
    activeChatId: 'chat-1',
};

export const chatReducer = ( state: ChatState = initialState, action: ChatAction ): ChatState => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return { ...state, activeChatId: action.payload };
        
        case 'UPDATE_LAST_MESSAGE':
            return { 
                ...state,
                chats: state.chats.map(chat =>
                    chat.id === action.payload.chatId
                    ? { ...chat, lastMessage: action.payload.text }
                    : chat
                ),
            };

        default:
            return state;
    }
};