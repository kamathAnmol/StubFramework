import React, {useEffect, useRef} from "react";
import {useState} from "react";
// import Porter from "./components/porter";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
  createSession,
  addActiveSessionId,
  createFeatureInstance,
  addActiveFeatureInstanceId,
} from "./redux/actions";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import StrategyCanvas from "./components/framework/StrategyCanvas";
import frameworkInstanceData from "./components/framework/StrategyCanvasInstanceData";

function App({data, metadata, configuration, customisation, contextManager}) {
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const activeSessionIsPresent =
    data.appStates.global_scratchpad.active_session_id !== "";

  const start_time = new Date().toISOString();
  const [sessionId, setSessionId] = useState(uuidv4());
  const [featureInstanceId, setFeatureInstanceId] = useState(uuidv4());

  const sessionData = {
    session_meta_data: {
      start_time: start_time,
      user_meta_data: {},
      console_meta_data: {},
      device_meta_data: {},
    },
    domain: {
      domain_meta_data: {
        domain_name: "",
        domain_type: "",
      },
      live_data: {
        all_feature_instances: {},
        domain_scratchpad: {
          active_feature_instance_id: "",
        },
      },
    },
  };
  const featureInstanceData = frameworkInstanceData;

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

  return (
    <Container fluid>
      <StrategyCanvas />
    </Container>
  );
}

export default App;
