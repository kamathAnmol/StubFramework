import React from "react";
import {createRoot} from "react-dom/client";
import {store} from "./redux/store";
import {Provider, connect} from "react-redux";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const mapStateToProps = (state) => {
  return {
    data: {state},
    metadata: {},
    configuration: {workflow: "creation"},
    customisation: {},
    contextManager: {},
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
