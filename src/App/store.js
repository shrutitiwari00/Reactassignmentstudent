import {configureStore} from '@reduxjs/toolkit';
import studentReducer from '../Features/studentSlice'

export const store = configureStore({
    reducer:{
       Students: studentReducer
    }
})