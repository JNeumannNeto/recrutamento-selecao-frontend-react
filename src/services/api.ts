import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, ApiError } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost';

export const AUTH_SERVICE_URL = `${API_BASE_URL}:8083/api/v1`;
export const JOB_SERVICE_URL = `${API_BASE_URL}:8081/api/v1`;
export const CANDIDATE_SERVICE_URL = `${API_BASE_URL}:8082/api/v1`;

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
              const authClient = new ApiClient(AUTH_SERVICE_URL);
              const response = await authClient.post<{ token: string; refresh_token: string }>('/auth/refresh', { refresh_token: refreshToken });
              const { token, refresh_token } = response.data;
              
              localStorage.setItem('token', token);
              localStorage.setItem('refreshToken', refresh_token);
              
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return this.client(originalRequest);
            }
          } catch (refreshError) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login';
          }
        }

        const apiError: ApiError = {
          message: error.response?.data?.message || error.message || 'Erro desconhecido',
          status: error.response?.status || 500,
          data: error.response?.data,
        };

        return Promise.reject(apiError);
      }
    );
  }

  async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data);
    return response.data;
  }

  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data);
    return response.data;
  }

  async patch<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response = await this.client.patch<ApiResponse<T>>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url);
    return response.data;
  }

  async upload<T>(url: string, formData: FormData): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}

export const authApi = new ApiClient(AUTH_SERVICE_URL);
export const jobApi = new ApiClient(JOB_SERVICE_URL);
export const candidateApi = new ApiClient(CANDIDATE_SERVICE_URL);

export default ApiClient;
