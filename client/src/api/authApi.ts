import axiosApiInstance from './http';
import { UserLoginDto } from '@/models/UserLoginDto';
import { LoginRequest } from './requests/LoginRequest';
import { RegisterRequest } from './requests/RegisterRequest';

const baseUrl = '/auth';

const authApi = {
  async login(request: LoginRequest): Promise<UserLoginDto> {
    const response = await axiosApiInstance.post(`${baseUrl}/login`, request);
    return response.data;
  },

  async register(request: RegisterRequest): Promise<string> {
    const response = await axiosApiInstance.post(
      `${baseUrl}/register`,
      request
    );
    return response.data;
  },
};

export default authApi;
