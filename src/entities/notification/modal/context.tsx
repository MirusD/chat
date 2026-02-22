import { createContext, useContext, useReducer, ReactNode, useCallback } from "react";
import { notificationReducer, initialState } from "./slice";
import { INotification, NotificationType } from "./types";

interface NotificationContextType {
    notifications: INotification[];
    showNotification: (message: string, type: NotificationType) => void;
    removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode}) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const removeNotification = (id: string) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    const showNotification = useCallback((message: string, type: NotificationType) => {
        const id = Date.now().toString();
        dispatch({ type: 'ADD', payload: { id, message, type } });

        setTimeout(() => {
            removeNotification(id);
        }, 3000)
    }, []);

    return (
        <NotificationContext.Provider value={{ notifications: state.items, showNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const ctx = useContext(NotificationContext);
    if (!ctx) throw new Error('useNotification error');
    return ctx;
};