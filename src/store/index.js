import { configureStore } from "@reduxjs/toolkit";
import rootreducer from './reducers/counterSlice'
export default configureStore({
    reducer:{
        add:rootreducer
    }
})