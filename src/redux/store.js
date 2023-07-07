import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import initialState from "./initialStates";

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
