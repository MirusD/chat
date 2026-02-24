import { IUser } from "entities/user";

export interface IMessageResponse {
    messageId: string;
    timestamp: number;
};

export interface ILoginResponse {
    user: IUser;
    token: string;
};

export interface IDeleteResponse {
    status: number; 
    statusText: string
}
