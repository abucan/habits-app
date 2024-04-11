import axiosApiInstance from './http';
import { UserLoginDto } from '@/models/UserLoginDto';

const baseUrl = '/users';

const userApi = {
  async showCurrentUser(): Promise<UserLoginDto> {
    const response = await axiosApiInstance.get(
      `${baseUrl}/showCurrent`,
    );
    return response.data;
  },
};

export default userApi;
