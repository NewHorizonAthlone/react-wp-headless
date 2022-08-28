import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const users_URL =
  "https://newhorizonathlone.ngo/wp-json/wp/v2/users";

const initialState = [];

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
  const response = await axios.get(users_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
