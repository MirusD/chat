import { useAuth } from 'features/auth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}