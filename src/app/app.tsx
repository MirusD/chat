import React from 'react';
import { UserProvider, useUser } from '../entities/user';
import { MessageProvider } from '../entities/message';
import { ChatProvider } from '../entities/chat';
import { LoginPage } from '../features/auth/ui/LoginPage';
import { MainPage } from '../pages/main';

const AppRouter = () => {
    const { isAuth } = useUser();

    if (!isAuth) {
        return <LoginPage />;
    };

    return (
        <ChatProvider>
            <MessageProvider>
                <MainPage />
            </MessageProvider>
        </ChatProvider>
    );
};

export const App = () => {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    )
}