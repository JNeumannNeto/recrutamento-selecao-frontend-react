import { authApi } from './api';
import {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
  RefreshTokenRequest,
  ChangePasswordRequest,
  User,
} from '../types';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await authApi.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  async register(data: RegisterRequest): Promise<User> {
    const response = await authApi.post<User>('/auth/register', data);
    return response.data;
  },

  async refreshToken(data: RefreshTokenRequest): Promise<LoginResponse> {
    const response = await authApi.post<LoginResponse>('/auth/refresh', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await authApi.post('/auth/logout');
  },

  async getProfile(): Promise<User> {
    const response = await authApi.get<User>('/auth/profile');
    return response.data;
  },

  async changePassword(data: ChangePasswordRequest): Promise<void> {
    await authApi.put('/auth/change-password', data);
  },

  async validateToken(): Promise<User> {
    const response = await authApi.post<User>('/auth/validate');
    return response.data;
  },
};
