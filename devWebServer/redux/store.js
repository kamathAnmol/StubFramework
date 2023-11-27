import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import initialState from "./initialStates";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

const dispatchAction = (actionType, payload) => {
  const action = {
    type: actionType,
    payload: payload,
  };
  store.dispatch(action);
};

export const ReduxStore = {
  store: store,
  dispatch: dispatchAction,
};
