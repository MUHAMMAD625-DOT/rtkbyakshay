// import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./CounterSlice";
// export const store = configureStore({
//     reducer:{
//         counter:counterSlice
//     }
// })

// store.js or Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'; // Make sure you're importing the reducer properly

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Ensure this matches the default export from the slice
  },
});
