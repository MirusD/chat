import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IUser } from './types';

interface UserContextType {
    user: IUser | null;
    login: (name: string) => void;
    logout: () => void;
    isAuth: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children } : { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('chat_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (name: string) => {
        const newUser: IUser = {
            id: Date.now().toString(),
            name,
        };
        setUser(newUser);
        localStorage.setItem('chat_user', JSON.stringify(newUser));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('chat_user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, isAuth: !!user}}>
            {children}
        </UserContext.Provider>
    )
};

    export const useUser = () => {
        const ctx = useContext(UserContext);
        if (!ctx) throw new Error('useUser error');
        return ctx;
    };