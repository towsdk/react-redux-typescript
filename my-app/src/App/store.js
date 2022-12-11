import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/CounterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: postReducer,
    }
});

export default store;