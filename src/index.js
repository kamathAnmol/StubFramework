/**
 * @author Gautham Prasad <gautham.prasadg@gmail.com
 * @since 0.0.1
 * @version 0.0.1
 * @license currently restricted to internal devs and users (see LICENSE)
 * @copyright CI Contextual Intelligence AG, Switzerland
 */

import React from "react";
import {createRoot} from "react-dom/client";
import {ReduxStore} from "./redux/store";
import {Provider, connect} from "react-redux";
import App from "./App";
import {SendRequest, LogMessage} from "@ditype/react-commons";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const mapStateToProps = (state) => {
  const sessionId = state.global_scratchpad.active_session_id;

  const featureInstanceId =
    state.all_sessions[sessionId]?.domain?.live_data?.domain_scratchpad
      ?.active_feature_instance_id;

  const stageId =
    state.all_sessions[sessionId]?.domain?.live_data?.all_feature_instances[
      featureInstanceId
    ]?.feature_instance_scratchpad?.active_stage_id;

  const stepId =
    state.all_sessions[sessionId]?.domain?.live_data?.all_feature_instances[
      featureInstanceId
    ]?.feature_instance_data?.framework_data[stageId]?.stage_scratchpad
      ?.active_step_id;

  // if (!featureInstanceId) {
  //   LogMessage("info", "info", "Loading feature instance...");
  // } else {
  //   LogMessage("info", `Using feature instance: ${featureInstanceId}`);
  // }

  // if (!stageId) {
  //   LogMessage("info", "Loading stageId...");
  // } else {
  //   LogMessage("info", `Using stageId: ${stageId}`);
  // }

  // if (!stepId) {
  //   LogMessage("info", "Loading stepId...");
  // } else {
  //   LogMessage("info", `Using stepId: ${stepId}`);
  // }

  return {
    data: {state},
    metadata: {},
    // configuration: {workflow: "operation"},
    configuration: {workflow: "creation"},
    customisation: {},
    contextManager: {
      sendF: SendRequest,
      dispatchF: ReduxStore.dispatch,
      logF: LogMessage,
      context: {
        sessionId: sessionId,
        featureInstanceId: featureInstanceId,
        stageId: stageId,
        stepId: stepId,
      },
    },
  };
};

localStorage.setItem("activePursuit", "2");

const ConnectedApp = connect(mapStateToProps)(App);
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore.store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);
