import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from '../features/user/userApi'
import authReducer from "../features/user/authSllice";
import { photoApi } from '../features/Photos/Photoapi';
import {eventApi} from  '../features/Events/EventsApi'


export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer,
    },

    auth: authReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware,photoApi.middleware, eventApi.middleware)


})

setupListeners(store.dispatch)


