import { UserProvider } from 'entities/user';
import { AppRouter } from './routes';
import { Toaster } from 'widgets/toaster';
import { NotificationProvider } from 'entities/notification';
import { AuthProvider } from 'features/auth/model/context';
import { ThemeProvider } from 'features/switchTheme';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset.css';
import './styles/tokens.css';


export const App = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <NotificationProvider>
                    <BrowserRouter>
                        <AuthProvider>
                            <AppRouter />
                            <Toaster />
                        </AuthProvider>
                    </BrowserRouter>
                </NotificationProvider>
            </UserProvider>
        </ThemeProvider>
    )
}