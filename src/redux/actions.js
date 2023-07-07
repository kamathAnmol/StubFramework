import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
} from "./actionTypes";

const createSession = ({id, data}) => ({
  type: CREATE_SESSION,
  payload: {id, data},
});

const addActiveSessionId = ({id}) => ({
  type: ADD_ACTIVE_SESSION_ID,
  payload: {id},
});

const createFeatureInstance = ({
  sessionId,
  featureInstanceId,
  featureInstanceData,
}) => ({
  type: CREATE_FEATURE_INSTANCE,
  payload: {
    id: {session: sessionId, featureInstance: featureInstanceId},
    data: featureInstanceData,
  },
});

const addActiveFeatureInstanceId = ({sessionId, featureInstanceId}) => ({
  type: ADD_ACTIVE_FEATURE_INSTANCE,
  payload: {id: {session: sessionId, featureInstance: featureInstanceId}},
});

export {
  createSession,
  addActiveSessionId,
  createFeatureInstance,
  addActiveFeatureInstanceId,
};
