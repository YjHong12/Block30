// import { useSelector } from "react-redux";
// import { authApi } from "./AuthSlice";

// export const useAuthApi = () => {
//     const userToken = useSelector(state => state.auth.userToken);

//     const authenticatedApi = authApi.injectEndpoints({
//         endpoints: (builder) => ({
//             ...authApi.endpoints,
//             logout: builder.mutation({
//                 query: () => ({
//                     url: 'https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/user/logout',
//                     method: 'POST',
//                 }),
//             }),
//         }),
//     });

//     authenticatedApi.injectDefaultHeaders({
//         Authorization: `Bearer ${userToken}`,
//     });

//     return authenticatedApi;
// };
