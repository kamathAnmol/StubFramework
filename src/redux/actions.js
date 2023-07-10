import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
  ADD_ACTIVE_STEP_ID,
  ADD_ACTIVE_STAGE_ID,
  ADD_INSTANCE_TYPE,
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

const addInstanceType = ({sessionId, featureInstanceId, instanceType}) => ({
  type: ADD_INSTANCE_TYPE,
  payload: {
    id: {
      session: sessionId,
      featureInstance: featureInstanceId,
    },
    data: instanceType,
  },
});

const addActiveStepId = (data, context) => ({
  type: ADD_ACTIVE_STEP_ID,
  payload: {data, context},
});

const addActiveStageId = (data, context) => ({
  type: ADD_ACTIVE_STAGE_ID,
  payload: {data, context},
});

export {
  createSession,
  addActiveSessionId,
  createFeatureInstance,
  addActiveFeatureInstanceId,
  addInstanceType,
  addActiveStageId,
  addActiveStepId,
};
