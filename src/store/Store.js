import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from ''
export const store=configureStore({
    reducer:{
        [userApi]
    }
})

setupListeners(store.dispatch)