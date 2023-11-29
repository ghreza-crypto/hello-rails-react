import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./Greeting/greetingSlice";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;