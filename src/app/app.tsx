import { UserProvider } from 'entities/user';
import { AppRouter } from './routes';
import { Toaster } from 'widgets/toaster';
import { NotificationProvider } from 'entities/notification';
import { AuthProvider } from 'features/auth/model/context';


export const App = () => {
    return (
        <UserProvider>
            <NotificationProvider>
                <AuthProvider>
                    <AppRouter />
                    <Toaster />
                </AuthProvider>
            </NotificationProvider>
        </UserProvider>
    )
}