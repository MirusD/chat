import { IUser, IUserResponse } from "../model/types";
import { api } from "shared/api";

export const userApi = {
    async updateUser(userData: Partial<IUser>): Promise<IUser> {
        return await api.patch<IUser, Partial<IUser>>('/api/user', userData);
    },

    async getUser(): Promise<IUser> {
        return await api.get<IUser>('/users');
    }
}