import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    todo: todoSlice
  }
})

export default store