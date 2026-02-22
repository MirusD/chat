import { UserProvider } from 'entities/user';
import { AppRouter } from './routes';
import { Toaster } from 'widgets/toaster';
import { NotificationProvider } from 'entities/notification';


export const App = () => {
    return (
        <UserProvider>
            <NotificationProvider>
                <AppRouter />
                <Toaster />
            </NotificationProvider>
        </UserProvider>
    )
}