/* eslint-disable @typescript-eslint/no-explicit-any */
import userApi from '@/api/userApi';
import { User, UserLoginDto } from '@/models/UserLoginDto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const fetchUser = createAsyncThunk<UserLoginDto>(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const user = await userApi.showCurrentUser();
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
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { payload } = action;
      state.user = payload.user;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.user = null;
    });
  },
});

export const { setUser } = userSlice.actions;
