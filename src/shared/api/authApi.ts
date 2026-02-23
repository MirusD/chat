const INVITES_KEY = 'chat_valid_invites';

const getStoredInvites = (): string[] => {
    return JSON.parse(localStorage.getItem(INVITES_KEY) || '[]');
};

const saveStoredInvites = (invites: string[]) => {
    localStorage.setItem(INVITES_KEY, JSON.stringify(invites));
};

export const generateInviteToken = async (): Promise<string> => {
    await new Promise((r) => setTimeout(r, 300));

    const token = `invite-${Math.random().toString(36).substr(2, 9)}`;

    const currentInvites = getStoredInvites();
    saveStoredInvites([...currentInvites, token]);

    return token;
}

export const checkInviteToken = async (token: string | null): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 500));

    if (!token) return false;
    
    const dynamicInvites = getStoredInvites();
    const staticInvites = ['secret-invite-123', 'welcome-2024'];

    return [...staticInvites, ...dynamicInvites].includes(token);
}