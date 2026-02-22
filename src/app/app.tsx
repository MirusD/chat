import { UserProvider } from 'entities/user';
import { AppRouter } from './routes';


export const App = () => {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    )
}