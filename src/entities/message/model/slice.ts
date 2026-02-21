import { IMessage } from './types';

export interface MessageState {
    [chatId: string]: IMessage[];
}

export type Action = 
    | { type: 'ADD'; payload: { chatId: string; msg: IMessage } }
    | { type: 'UPDATE_STATUS'; payload: { chatId: string; id: string; status: IMessage['status'] }}
    | { type: 'CONFIRM_MESSAGE'; payload: { chatId: string; tempId: string; realId: string }};

export const initialState: MessageState = {};

export const messageReducer = (state: MessageState = initialState, action: Action): MessageState => {
    switch (action.type) {
        case 'ADD':
            const { chatId, msg } = action.payload;
            const currentMessages = state[chatId] || [];
            return {
                ...state,
                [chatId]: [...currentMessages, msg] 
            };

        case 'UPDATE_STATUS':
            {
                const messages = state[action.payload.chatId] || []
                return {
                    ...state,
                    [action.payload.chatId]: messages.map(msg =>
                        msg.id === action.payload.id ? {...msg, status: action.payload.status } : msg
                    ),
                };
            }

        case 'CONFIRM_MESSAGE':
            const messages = state[action.payload.chatId] || [];
            return {
                ...state,
                [action.payload.chatId]: messages.map(msg =>
                    msg.id === action.payload.tempId
                        ? { ...msg, Id: action.payload.realId, status: 'sent' }
                        : msg
                ),        
            };    

        default: 
            return state;
    }
};