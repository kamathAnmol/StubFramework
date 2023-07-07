import React from "react";
import {createRoot} from "react-dom/client";
import {store} from "./redux/store";
import {Provider, connect} from "react-redux";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const mapStateToProps = (states) => {
  return {
    data: {appStates: states},
    metadata: {},
    customization: {},
    configuration: {},
    contextManager: {
      context: {},
    },
  };
};

const ConnectedApp = connect(mapStateToProps)(App);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);
