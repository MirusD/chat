export interface ApiClient {
    get: <T>(url: string) => Promise<T>;
    post: <T, D>(url: string, data: D) => Promise<T>;
    put: <T, D>(url: string, data: D) => Promise<T>;
    patch: <T, D>(url: string, data: D) => Promise<T>;
    delete: <T>(url: string) => Promise<T>;
}

export let api: ApiClient;

export const setApiClient = (client: ApiClient) => {
    api = client;
}
