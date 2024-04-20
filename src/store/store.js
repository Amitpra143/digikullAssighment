import {configureStore} from "@reduxjs/toolkit"
import bank from "../slices/bank"


export const store=configureStore({
 reducer:{
    counterslice:bank
 }

})