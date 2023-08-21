import { createSlice  } from "@reduxjs/toolkit";

// const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF',
//         prepareHeaders: (headers, { getState }) => {
//             const token = getState().auth.userToken;
//             if (token) {
//                 headers.set('authorization', `Bearer ${token}`)
//             }
//                 return headers;
//         },
//       }),
//       endpoints: (builder) => ({
//         logout: builder.mutation({
//             query: () => ({
//                 url: 'https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/user/logout',
//                 method: 'POST',
//             }),
//         }),
//       }),
//     });

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
        logOut: (state, action) => {
            state.user = null;
            state.password = null;
            localStorage.removeItem('token');
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
// export { authApi };
export default authSlice.reducer;