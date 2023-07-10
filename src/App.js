import React, {useEffect, useRef, useMemo} from "react";
import {Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {
  createSession,
  addActiveSessionId,
  createFeatureInstance,
  addActiveFeatureInstanceId,
} from "./redux/actions";
import {v4 as uuidv4} from "uuid";
import Porter from "./components/porter";
import sessionData from "./SessionData";
import PorterFeatureInstanceData from "./components/porter/PorterFeatureInstanceData";

function App({data, metadata, configuration, customisation, contextManager}) {
  const dispatch = useDispatch();
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

  const featureInstanceData = PorterFeatureInstanceData;

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(createSession({id: sessionId, data: sessionData}));
      dispatch(addActiveSessionId({id: sessionId}));
      isMounted.current = true;
    } else {
      if (activeSessionIsPresent) {
        dispatch(
          createFeatureInstance({
            sessionId: sessionId,
            featureInstanceId: featureInstanceId,
            featureInstanceData: featureInstanceData,
          })
        );
        dispatch(
          addActiveFeatureInstanceId({
            sessionId: sessionId,
            featureInstanceId: featureInstanceId,
          })
        );
      }
    }
  }, [isMounted, activeSessionIsPresent]);

  if (featureInstanceIsPresent) {
    return (
      <Container fluid>
        <Porter
          data={{
            appStates:
              data.state.all_sessions[sessionId].domain.live_data
                .all_feature_instances[featureInstanceId],
          }}
          metadata={metadata}
          configuration={configuration}
          customisation={customisation}
          contextManager={{
            context: {
              sessionId: sessionId || null,
              featureInstanceId: featureInstanceId || null,
            },
          }}
        />
      </Container>
    );
  }
}

export default App;
