import axios from 'axios';
import { ApiClient } from '../api';

const realApiClient: ApiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    return response.data;
  },

  async post<T, D>(url: string, data: D): Promise<T> {
    const response = await axios.post(url, data);
    return response.data;
  },

  async put<T, D>(url: string, data: D): Promise<T> {
    const response = await axios.put(url, data);
    return response.data;
  },

  async patch<T, D>(url: string, data: D): Promise<T> {
    const response = await axios.patch(url, data);
    return response.data;
  },

  async delete<T>(url: string): Promise<T> {
    const response = await axios.delete(url);
    return response.data;
  }
};

export default realApiClient;
