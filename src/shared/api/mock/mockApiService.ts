import { ApiClient } from '../api';
import { IDeleteResponse } from '../types';

const mockData = {
  '/api/auth/login': { token: 'mock-token' },
  '/api/auth/registration': {link: 'https://app.com/register?token=abc'},
  '/api/user/profile': { id: 1, email: 'test@test.com' },
};

type MockDataKeys = keyof typeof mockData;

const mockApiClient: ApiClient = {
  async get<T>(url: string): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 200));
    if (url in mockData) {
        if(url === '/api/user/') {
            return { id: 1, name: 'Пользователь', avatar: null} as T;
        }
      return mockData[url as MockDataKeys] as T;
    }
    throw new Error(`Mock endpoint not found: ${url}`);
  },

  async post<T, D>(url: string, data: D): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 200));
    if (url === '/api/auth/login') {
      return { token: 'mock-token', user: { id: 1, name: 'Пользователь', avatar: null } } as T;
    }
    return {} as T; // Общий случай
  },

  async patch<T, D>(url: string, data: D): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Возвращаем то же, что и прислали — чистая имитация
    return data as unknown as T;
  },

  async put<T, D>(url: string, data: D): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return data as unknown as T
  },

  async delete<IDeleteResponse>(url: string): Promise<IDeleteResponse> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const isSuccess = Math.random() < 0.8;

    if (isSuccess) {
        return { status: 204, statusText: 'No Content' } as IDeleteResponse;
    } else {
        return { status: 404, statusText: 'Not Found' } as IDeleteResponse;
    }
  }
};

export default mockApiClient;
