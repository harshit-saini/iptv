import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
  name: "app",
  initialState: {
    currentPlayerURL: "",
    urlByUser: "",
  },
  reducers: {
    setUrlByUser: (state, action) => {
      state.urlByUser = action.payload.urlByUser;
    },
    setCurrrentPlayerURl: (state, action) => {
      state.currentPlayerURL = action.payload.currentPlayerURL;
    },
  },
});

export const { setCurrrentPlayerURl, setUrlByUser } = app.actions;

export default app.reducer;
