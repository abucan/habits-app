/* eslint-disable @typescript-eslint/no-explicit-any */
import authApi from '@/api/authApi';
import { LoginRequest } from '@/api/requests/LoginRequest';
import { RegisterRequest } from '@/api/requests/RegisterRequest';
import userApi from '@/api/userApi';
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
      return user;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk<string, RegisterRequest>(
  'user/registerUser',
  async (data, thunkAPI) => {
    try {
      const response = await authApi.register(data);
      return response;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
      throw error;
    }
  }
);

export const fetchUser = createAsyncThunk<UserLoginDto, void>(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const user = await userApi.showCurrentUser();
      return user;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { payload } = action;
      state.user = payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.user = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { payload } = action;
      state.user = payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.user = null;
    });
  },
});
