// Importing necessary dependencies and components
import React from "react";
import {createRoot} from "react-dom/client";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";
import {connect} from "react-redux";

// Getting the root element from the DOM
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Mapping Redux states to props of the App component
const mapStateToProps = (state) => {
  // Retrieving active session Id
  const sessionId = state.global_scratchpad.active_session_id;

  // Retrieving active feature instance Id with optional chaining operation,
  // fetches feature instance id only if session is active
  const featureInstanceId =
    state.all_sessions[sessionId]?.domain.live_data.domain_scratchpad
      .active_feature_instance_id;

  // Retrieving active instance Id
  // fetches feature instance id only if session is active

  const featureInstanceData =
    state.all_sessions[sessionId]?.domain.live_data.all_feature_instances[
      featureInstanceId
    ];

  return {
    data: {appStates: featureInstanceData || null},
    metadata: {},
    customization: {},
    configuration: {workflow:"creation"},
    contextManager: {
      context: {
        sessionId: sessionId || null,
        featureInstanceId: featureInstanceId || null,
      },
    },
  };
};

// Connecting the App component to Redux store
const ConnectedApp = connect(mapStateToProps)(App);

// Rendering the app to the DOM
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);
