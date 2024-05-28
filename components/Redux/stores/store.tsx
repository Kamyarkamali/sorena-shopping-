import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../CreateReducer/ActionReducer";

const store = configureStore({
  reducer: {
    counter: cartSlice,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
