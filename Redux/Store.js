import { configureStore } from "@reduxjs/toolkit";
import { UserStatusSlice } from "./UserStatus";

export const store = configureStore({
  reducer: UserStatusSlice.reducer
});
