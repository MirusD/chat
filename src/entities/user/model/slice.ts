import { IUser } from './types';

export interface UserState {
    user: IUser | null;
}

export type Action = 
    | { type: 'UPDATE_USER'; payload: {userData: Partial<IUser>}}
    | { type: 'CLEAR_USER'; payload: null };

export const initialState: UserState = {user: null};

export const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case 'UPDATE_USER': 
            const { userData } = action.payload;
            if (!userData || Object.keys(userData).length === 0) return state;

            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.userData,
                } as IUser
            };
            console.log(state);

        case 'CLEAR_USER':
            return {
                ...state,
                user: null
            }

        default: 
            return state;
    }
};