import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from '../features/user/userApi'
<<<<<<< HEAD

=======
import authReducer from "../features/user/authSllice";
>>>>>>> 476240d52b19aef8546c85c62e3c1091c5c76de0
import { photoApi } from '../features/Photos/Photoapi';
import {eventApi} from  '../features/Events/EventsApi';
import { postApi } from '../features/posts/postApi';



export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer,
        [postApi.reducerPath]:postApi.reducer,
    },

<<<<<<< HEAD
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware,photoApi.middleware, eventApi.middleware, postApi.middleware)
=======
    auth: authReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware,photoApi.middleware, eventApi.middleware)
>>>>>>> 476240d52b19aef8546c85c62e3c1091c5c76de0


})

setupListeners(store.dispatch)


