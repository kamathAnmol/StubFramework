import {configureStore} from "@reduxjs/toolkit";

import initialState from "./initialStates";
import rootReducer from "./rootReducer";
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
