/* eslint-disable @typescript-eslint/no-explicit-any */
import authApi from '@/api/authApi';
import { LoginRequest } from '@/api/requests/LoginRequest';
import { UserLoginDto } from '@/models/UserLoginDto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: UserLoginDto | null;
}

const initialState: UserState = {
  user: null,
};

export const loginUser = createAsyncThunk<UserLoginDto, LoginRequest>(
  'user/loginUser',
  async (data, thunkAPI) => {
    try {
      const user = await authApi.login(data);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
      throw error;
    }
  },
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
