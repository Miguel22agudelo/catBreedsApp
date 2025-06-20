import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface HttpAdapter {
    get<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
}

export class AxiosAdapter implements HttpAdapter {
    private axiosInstance: AxiosInstance;

    constructor(options: { baseURL: string; headers?: Record<string, string> }) {
        this.axiosInstance = axios.create({
            baseURL: options.baseURL,
            headers: options.headers,
        });
    }

    async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get<T>(url, options);
            return data;
        } catch (error) {
            throw new Error(`Error fetching: ${error}`);
        }
    }
}
