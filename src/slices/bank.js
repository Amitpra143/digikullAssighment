import { createSlice } from "@reduxjs/toolkit";


const initialstate={
    result:2490701,
    name:"John"
    
    
}

const counterslice=createSlice({
name:"Banking",
initialState:initialstate,
reducers:{
    increment:(state,action)=>{
    state.result=state.result-action.payload
    

    },
    decrement:(state,action)=>{
        state.result=state.result-action.payload
        
    
        },


}


})

export default counterslice.reducer;

export const {increment,decrement} =counterslice.actions