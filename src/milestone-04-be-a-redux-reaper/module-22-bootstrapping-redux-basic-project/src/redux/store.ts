import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//* type declaration
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
