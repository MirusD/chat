import { IInviteCheckResponse, ILoginRequest, ILoginResponse } from '../model/types';
import { api } from 'shared/api';

const INVITES_KEY = 'chat_valid_invites';

const getStoredInvites = (): string[] => {
    return JSON.parse(localStorage.getItem(INVITES_KEY) || '[]');
};
const saveStoredInvites = (invites: string[]) => {
    localStorage.setItem(INVITES_KEY, JSON.stringify(invites));
};

export const authApi = {
    async generateInvite(): Promise<string> {
        await new Promise((r) => setTimeout(r, 300));

        const token = `invite-${Math.random().toString(36).substr(2, 9)}`;

        const currentInvites = getStoredInvites();
        saveStoredInvites([...currentInvites, token]);

        return token;
    },

    async checkInvite(token: string): Promise<IInviteCheckResponse> {
        await new Promise((r) => setTimeout(r, 500));
        
        const dynamicInvites = getStoredInvites();
        const staticInvites = ['secret-invite-123', 'welcome-2024'];
        const isValid = [...staticInvites, ...dynamicInvites].includes(token);

        return { isValid };
    },

    async login(email: string, password: string): Promise<ILoginResponse> {
        return await api.post<ILoginResponse, ILoginRequest>('/api/auth/login', {email, password});
    },

    
    async logout() {
        return true;
    }
}