import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const baseUrl='https://fakestoreapi.com/products';

export const getProducts=createAsyncThunk('shop/getProducts',()=>{
   return fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => json)
    .catch(error => console.log(error));
})

const initialState = {
    products : [],
    loading: false,
    error: {}
}

export const shopeSlice =createSlice({
    name:'shop',
    initialState,
    reducers:{
        addProduct:()=>{
            console.log('hi');
        }
    },
    extraReducers:{
        [getProducts.pending] : (state)=> {
            state.loading=true
        },  

        [getProducts.fulfilled] : (state , action)=> {
            state.products = action.payload
            state.loading=false
           
        },

        [getProducts.rejected] : (state , action )=> {
            state.error= action.payload
            state.loading=false

        }
    }
})
console.log(shopeSlice );

export const {addProduct} = shopeSlice.actions
