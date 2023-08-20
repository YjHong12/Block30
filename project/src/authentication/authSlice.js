import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authenticate',
    initialState: { 
        user: null, 
        password: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, password } = action.payload;
            state.user = user;
            state.password = password;
            console.log(state.user, state.password)
        },
        logOut: {state, action} => {
            state.user = null;
            state.password = null;
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;