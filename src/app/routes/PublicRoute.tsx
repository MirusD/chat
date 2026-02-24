import { useAuth } from 'features/auth';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to="/" replace />
    }

    return <>{children}</>
};