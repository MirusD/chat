const VALID_INVITES = ['secret-invire-123', 'welcome-2024'];

export const checkInviteToken = async (token: string | null): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 500));

    if (!token) return false;
    return VALID_INVITES.includes(token);
}