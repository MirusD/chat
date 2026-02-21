import { IMessage } from './types';

export interface MessageState {
    messages: IMessage[];
}

export type Action = 
    | { type: 'ADD'; payload: IMessage }
    | { type: 'UPDATE_STATUS'; payload: { id: string; status: IMessage['status'] }}
    | { type: 'CONFIRM_MESSAGE'; payload: { tempId: string; realId: string }};

export const initialState: MessageState = {
    messages: []
};

export const messageReducer = (state: MessageState = initialState, action: Action): MessageState => {
    switch (action.type) {
        case 'ADD':
            return { messages: [...state.messages, action.payload] };

        case 'UPDATE_STATUS':
            return {
                messages: state.messages.map(msg =>
                    msg.id === action.payload.id ? {...msg, status: action.payload.status } : msg
                ),
            };

        case 'CONFIRM_MESSAGE':
            return {
                messages: state.messages.map(msg =>
                    msg.id === action.payload.tempId
                        ? { ...msg, id: action.payload.realId, status: 'sent'}
                        : msg
                ),
            };

        default: 
            return state;
    }
};