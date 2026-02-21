import React from 'react';
import { UserProvider, useUser } from '../entities/user';
import { MessageProvider } from '../entities/message';
import { LoginPage } from '../features/auth/ui/LoginPage';
import { MainPage } from '../pages/main';

const AppRouter = () => {
    const { isAuth } = useUser();

    if (!isAuth) {
        return <LoginPage />;
    };

    return (
        <MessageProvider>
            <MainPage />
        </MessageProvider>
    );
};

export const App = () => {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    )
}