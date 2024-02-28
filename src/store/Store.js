import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from '../features/user/userApi'



import authReducer from "../features/user/authSllice";

import { photoApi } from '../features/Photos/Photoapi';
import {eventApi} from  '../features/Events/EventsApi';
import { friendApi } from '../features/friends/friendApi';
import { notificationApi } from '../features/notifications/notificationApi';
import { postApi } from '../features/posts/postApi';
import { statusApi } from '../features/timeline/TimelineApi';



export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer,
        [postApi.reducerPath]:postApi.reducer,
        [eventApi.reducerPath]:eventApi.reducer,
        [friendApi.reducerPath]:friendApi.reducer,
        [postApi.reducerPath]:postApi.reducer,
        [notificationApi.reducerPath]:notificationApi.reducer,
        [statusApi.reducerPath]:statusApi.reducer

    },

  

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware,photoApi.middleware, eventApi.middleware, friendApi.middleware,notificationApi.middleware,postApi.middleware,statusApi.middleware)
   




})

setupListeners(store.dispatch)


