import { UserProvider } from 'entities/user';
import { AppRouter } from './routes';
import { Toaster } from 'widgets/toaster';
import { NotificationProvider } from 'entities/notification';
import { AuthProvider } from 'features/auth/model/context';
import { ThemeProvider } from 'features/switchTheme';

import './styles/reset.css';
import './styles/tokens.css';


export const App = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <NotificationProvider>
                    <AuthProvider>
                        <AppRouter />
                    <   Toaster />
                    </AuthProvider>
                </NotificationProvider>
            </UserProvider>
        </ThemeProvider>
    )
}