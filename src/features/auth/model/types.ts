import { IUser } from "entities/user";

export interface ILoginResponse {
    user: IUser;
    token: string;
};

export interface ILoginRequest {
    email: string;
    password: string;
};

export interface IRegistrationResponse {
    
};

export interface IRegistrationRequest {
    userId: string;
    token: string;
};

export interface IInviteCheckResponse {
    isValid: boolean;
};