import axiosApiInstance from './http';
import { UserLoginDto } from '@/models/UserLoginDto';
import { LoginRequest } from './requests/LoginRequest';
import { RegisterRequest } from './requests/RegisterRequest';

const baseUrl = '/users';

const userApi = {
  async login(): Promise<UserLoginDto> {
    const response = await axiosApiInstance.get(
      `${baseUrl}/showCurrent`,
    );
    return response.data;
  },
};

export default userApi;
