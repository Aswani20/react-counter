import {configureStore} from '@reduxjs/toolkit'
// import { todoreducer } from './config'
import { todoSlice } from './features/todoslice';
import {counterSlice} from './features/counter'
import { shopeSlice } from './features/shopSlice';


//store
export const store = configureStore({
    reducer:{
        todo :todoSlice.reducer,
        counter : counterSlice.reducer,
        shop : shopeSlice.reducer
    }
    
}
    
);