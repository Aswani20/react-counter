import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    counter : 0,
}

export const  counterSlice = createSlice ({
    name:'counter',
    initialState,
    reducers:{
        increamentCounter : (state) => {
            state.counter +=1
        },
        decreamentCounter : (state) =>{
            state.counter -=1
        },
        increamentByAmount : (state , action) =>{
            state.counter +=action.payload
        }
    }

})
export const {increamentCounter,decreamentCounter,increamentByAmount} = counterSlice.actions