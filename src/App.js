import React from "react";
import {useState} from "react";
import Porter from "./components/porter";
import {Container, Table} from "react-bootstrap";
import SessionButton from "./sessionButton";
import FeatureButton from "./featureButton";
import {useSelector, useDispatch} from "react-redux";

function App({data, metadata, customization, configuration, contextManager}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [showFramework, setShowFramework] = useState(false);

  // Function to select a session and update the active session ID in the Redux store
  const selectSession = (session_id) => {
    dispatch({
      type: "ADD_ACTIVE_SESSION_ID",
      payload: session_id,
    });
  };

  // Function to select a feature instance and update the active feature instance ID in the Redux store
  const selectFeatureInstance = (feature_id) => {
    dispatch({
      type: "ADD_ACTIVE_FEATURE_INSTANCE_ID",
      payload: {
        sessionIdActive: state.global_scratchpad.active_session_id,
        featureInstanceIdActive: feature_id,
      },
    });
  };

  return (
    <Container fluid>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>All Sessions</th>
            <th>Active Session</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SessionButton />
            </td>
            <td>
              <FeatureButton
                session_id={state.global_scratchpad.active_session_id}
              />
            </td>
          </tr>
          {Object.keys(state.all_sessions).map((session_id) => {
            return (
              <tr key={session_id}>
                <td>
                  {/* Button to select a session */}
                  <button onClick={() => selectSession(session_id)}>
                    {session_id}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Feature Instances</th>
          </tr>
        </thead>
        <tbody>
          {state.global_scratchpad.active_session_id ? (
            Object.keys(
              state.all_sessions[state.global_scratchpad.active_session_id]
                .domain.live_data.all_feature_instances
            ).map((feature_id) => {
              return (
                <tr key={feature_id}>
                  <td>
                    {/* Button to select a feature instance */}
                    <button onClick={() => selectFeatureInstance(feature_id)}>
                      {feature_id}
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
      <button onClick={() => setShowFramework(true)}>Launch Framework</button>

      {/* Conditionally render the StrategyCanvas component if LaunchFramework button is clicked */}
      {showFramework && (
        <Porter
          data={data}
          metadata={metadata}
          customization={customization}
          configuration={configuration}
          contextManager={contextManager}
        />
      )}
    </Container>
  );
}

export default App;
