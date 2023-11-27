import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
  ADD_ACTIVE_STEP_ID,
  ADD_ACTIVE_STAGE_ID,
  ADD_INSTANCE_TYPE,
  UPDATE_FACTOR_NAMES,
  ON_SELECT_QUESTION_TYPE,
  ON_CHANGE_JUSTIFICATION_QUESTION,
  ON_CHANGE_MINIMUM_VALUE_LABEL,
  ON_CHANGE_MAXIMUM_VALUE,
  ON_CHANGE_MAXIMUM_VALUE_LABEL,
  ALLOW_PATRONS_TO_ADD_FACTORS,
  IS_VALID_DEFINE_FACTORS,
  ON_SUBMIT_CREATE_PROFILE,
  ON_SUBMIT_EDIT_PROFILE,
  ON_SUBMIT_DELETE_PROFILE,
  ADD_PROFILE_KEYS,
  ON_CHANGE_SELECTED_PROFILE,
  ON_CHANGE_SEED_FACTOR_VALUE,
  ON_CHANGE_SEED_FACTOR_JUSTIFICATION,
  ON_CHANGE_CONTENT_API,
  ON_CHANGE_COLLECTIONS,
  ON_CHANGE_SHOW_PREVIEW,
  ON_CHANGE_SHOW_COLLECTION_LOADING,
  ON_CHANGE_COLLECTION_OPTIONS_LOADING,
  ON_CHANGE_FILTERED_COLLECTION_OPTIONS,
  ON_CHANGE_SHOW_NEW_COLLECTION_FORM,
  ON_CHANGE_COLLECTION_OPTIONS,
  ON_CHANGE_COLLECTION_TYPE,
  ON_CHANGE_SHOW_NEW_FRAMEWORK_FORM_RESTFIELD,
  ON_CHANGE_SHOW_ALERT,
  ON_CHANGE_SHOW_NEW_COLLECTION_FORM_RESTFIELD,
  ON_CHANGE_EDITOR_VALUE,
  ON_CHANGE_COLLECTION_TITLE,
  ON_CHANGE_FILTERED_COLLECTION_OPTIONS_ARRAY,
  ON_CHANGE_ALERT_TEXT,
  ON_CHANGE_SHOW_CONTENT_UPLOAD,
  ON_CHANGE_CONTENT_TAGS,
  ON_CHANGE_NO_CONTENT_ERROR,
  ON_CHANGE_CONTENT_EDIT,
  ON_CHANGE_SHOW_NEW_PATRON_FORM,
  IS_STEP_COMPLETE,
} from "../../src/redux/actionTypes";

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

const addActiveStageId = (data, context) => ({
  type: ADD_ACTIVE_STAGE_ID,
  payload: {data, context},
});

const addActiveStepId = (data, context) => ({
  type: ADD_ACTIVE_STEP_ID,
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
