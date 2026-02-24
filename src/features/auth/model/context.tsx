import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useUser } from 'entities/user'
import { authApi } from "../api/authApi";
 
interface AuthContextType {
    isAuth: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children : ReactNode }) => {
    const { updateUser, clearUser } = useUser();
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                setIsAuth(true);
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);


    const login = useCallback(async (email: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await authApi.login(email, password);
            localStorage.setItem('authToken', response.token);
            setIsAuth(true);
            updateUser(response.user);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Ошибка авторизации';
            setError(message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, [updateUser])

    const logout = useCallback(() => {
        localStorage.removeItem('authToken');
        setIsAuth(false);
        clearUser();
    }, [clearUser]);
    
    return (
        <AuthContext.Provider value={{ isAuth, isLoading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
    return ctx;
}

