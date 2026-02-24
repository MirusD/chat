import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useReducer } from 'react';
import { userReducer, initialState } from './slice';
import { userApi } from '../api/userApi';
import { IUser } from './types';

interface UserContextType {
    user: IUser | null;
    updateUser: (userData: Partial<IUser>) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children } : { children: ReactNode }) => {
    const [userPrev, setsUserPrev] = useState<IUser | null>(null);
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            dispatch({ type: 'UPDATE_USER', payload: { userData: JSON.parse(savedUser) } });
        }
    }, []);

    const updateUser = useCallback(async (userData: Partial<IUser>) => {
        // setUser(prev => {
        //     if (!prev) return { ...userData as IUser };
        //     return { ...prev, ...userData };
        // });
        console.log(userData);
        dispatch({ type: 'UPDATE_USER', payload: { userData } });
        localStorage.setItem('user', JSON.stringify(userData));
        
        try {
            await userApi.updateUser(userData);
        } catch (err) {
            if (userPrev) {
                dispatch({ type: 'UPDATE_USER', payload: { userData: userPrev } });
            }
        }
    }, []);

    const clearUser = useCallback(() => {
        //setUser(null);
        dispatch({type: 'CLEAR_USER', payload: null});
        localStorage.removeItem('user');
    }, []);

    return (
        <UserContext.Provider value={{ user: state.user, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )
};

    export const useUser = () => {
        const ctx = useContext(UserContext);
        if (!ctx) throw new Error('useUser error');
        return ctx;
    };