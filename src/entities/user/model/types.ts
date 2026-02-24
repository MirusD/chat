export interface IUser {
    id: string;
    name: string;
    avatar?: string | null;
}

export interface IUserResponse {
    user: IUser;
    timestamp: number;
}