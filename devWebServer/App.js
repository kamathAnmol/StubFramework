import React, {useEffect, useRef, useMemo, useState} from "react";
import {Container} from "react-bootstrap";

import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
} from "./redux/actionTypes";
import StubFramework from "../build-esm";
import {v4 as uuidv4} from "uuid";
import sessionData from "./SessionData";
import StubFrameworkFeatureInstanceData from "./StubFrameworkFeatureInstanceData";

function App({data, metadata, configuration, customisation, contextManager}) {
  const isMounted = useRef(false);

  const sessionId = useMemo(() => {
    return uuidv4();
  }, []);

  const featureInstanceId = useMemo(() => {
    return uuidv4();
  }, []);

  const activeSessionIsPresent =
    data.state.global_scratchpad.active_session_id !== "";

  let featureInstanceIsPresent = false;

  if (activeSessionIsPresent) {
    featureInstanceIsPresent =
      data.state.all_sessions[sessionId]?.domain?.live_data?.domain_scratchpad
        .active_feature_instance_id !== "";
  }

  const createAndSetActiveSession = () => {
    contextManager.dispatchF(CREATE_SESSION, {
      data: {sessionId: sessionId, sessionData: sessionData},
    });
    contextManager.dispatchF(ADD_ACTIVE_SESSION_ID, {
      data: {sessionId: sessionId},
    });
  };

  const createAndSetActiveFeatureInstance = () => {
    const featureInstanceData =
    StubFrameworkFeatureInstanceData[configuration.workflow];

    contextManager.dispatchF(CREATE_FEATURE_INSTANCE, {
      data: {
        featureInstanceId: featureInstanceId,
        featureInstanceData: featureInstanceData,
      },
      context: contextManager.context,
    });

    contextManager.dispatchF(ADD_ACTIVE_FEATURE_INSTANCE, {
      data: {
        featureInstanceId: featureInstanceId,
      },
      context: contextManager.context,
    });
  };

  useEffect(() => {
    if (!isMounted.current) {
      createAndSetActiveSession();
      isMounted.current = true;
    } else {
      if (activeSessionIsPresent) {
        createAndSetActiveFeatureInstance();
      }
    }
  }, [isMounted, activeSessionIsPresent]);

  function sendLoginRequest(userName, password, domain) {
    console.log("sendLoginRequest");
    contextManager.sendF("Login request", userName, password, domain);
  }

  sendLoginRequest("userName", "password", "domain");

  if (featureInstanceIsPresent) {
    return (
      <Container fluid>
        <StubFramework
          data={{
            appStates:
              data.state.all_sessions[sessionId].domain.live_data
                .all_feature_instances[featureInstanceId],
          }}
          metadata={metadata}
          configuration={configuration}
          customisation={customisation}
          contextManager={contextManager}
        />
      </Container>
    );
  }
}

export default App;
