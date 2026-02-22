import { INotification } from "./types";

export interface NotificationState {
    items: INotification[];
};

export type NotificationAction = 
    | { type: 'ADD'; payload: INotification }
    | { type: 'REMOVE'; payload: string };

export const initialState: NotificationState = {
    items: []
};

export const notificationReducer = (state: NotificationState = initialState, action: NotificationAction): NotificationState => {
    switch (action.type) {
        case 'ADD':
            return { items: [...state.items, action.payload] };

        case 'REMOVE':
            return { items: state.items.filter(n => n.id !== action.payload) };
        
        default:
            return state;
    };
};