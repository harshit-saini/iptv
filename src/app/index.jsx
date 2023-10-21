import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
  name: "app",
  initialState: {
    currentPlayerURL: "",
  },
  reducers: {
    setCurrrentPlayerURl: (state, action) => {
      state.currentPlayerURL = action.payload.currentPlayerURL;
    },
  },
});

export const { setCurrrentPlayerURl } = app.actions;

export default app.reducer;
