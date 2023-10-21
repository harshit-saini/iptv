import app from "./index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    app: app,
  },
});
