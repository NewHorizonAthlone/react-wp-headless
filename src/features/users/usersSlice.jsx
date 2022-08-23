import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tania Rascia" },
  { id: "1", name: "John Resig" },
  { id: "2", name: "Tom Payne" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
