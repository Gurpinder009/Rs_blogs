import { createSlice } from '@reduxjs/toolkit';
const initialStatus = false;

export const UserStatusSlice = createSlice({
    name:"userStatus",
    initialState:initialStatus,
    reducers:{
        toggleStatus:(state) => state = !state,
    }
})

export const UserStatusActions = UserStatusSlice.actions;