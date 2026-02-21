import React from 'react';
import { MessageProvider } from '../entities/message';
import { MainPage } from '../pages/main';

export const App = () => {
    return (
        <>
            <MessageProvider>
                <MainPage />
            </MessageProvider>
        </>
    )
}