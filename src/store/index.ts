import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "./mock/mock.reducer";

export const store = configureStore({
  reducer: { mock: mockReducer },
});
