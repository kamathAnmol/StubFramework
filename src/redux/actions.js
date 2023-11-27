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

const updateFactorNames = (data, context) => ({
  type: UPDATE_FACTOR_NAMES,
  payload: {data, context},
});

const onSelectQuestionType = (data, context) => ({
  type: ON_SELECT_QUESTION_TYPE,
  payload: {data, context},
});

const onChangeJustificationQuestion = (data, context) => ({
  type: ON_CHANGE_JUSTIFICATION_QUESTION,
  payload: {data, context},
});

const onChangeMinimumValueLabel = (data, context) => ({
  type: ON_CHANGE_MINIMUM_VALUE_LABEL,
  payload: {data, context},
});

const onChangeMaximumValueLabel = (data, context) => ({
  type: ON_CHANGE_MAXIMUM_VALUE,
  payload: {data, context},
});

const onChangeMaximumValue = (data, context) => ({
  type: ON_CHANGE_MAXIMUM_VALUE_LABEL,
  payload: {data, context},
});

const onChangeAllowPatronsToAddFactors = (data, context) => ({
  type: ALLOW_PATRONS_TO_ADD_FACTORS,
  payload: {data, context},
});

const isValidDefineFactors = (data, context) => ({
  type: IS_VALID_DEFINE_FACTORS,
  payload: {data, context},
});

const onSubmitCreateProfile = (data, context) => ({
  type: ON_SUBMIT_CREATE_PROFILE,
  payload: {data, context},
});

const onSubmitEditProfile = (data, context) => ({
  type: ON_SUBMIT_EDIT_PROFILE,
  payload: {data, context},
});

const onSubmitDeleteProfile = (data, context) => ({
  type: ON_SUBMIT_DELETE_PROFILE,
  payload: {data, context},
});

const addProfileKeys = (data, context) => ({
  type: ADD_PROFILE_KEYS,
  payload: {data, context},
});

const addActiveStepId = (data, context) => ({
  type: ADD_ACTIVE_STEP_ID,
  payload: {data, context},
});

const onChangeSeedFactorValue = (data, context) => ({
  type: ON_CHANGE_SEED_FACTOR_VALUE,
  payload: {data, context},
});

const onChangeSeedFactorJustification = (data, context) => ({
  type: ON_CHANGE_SEED_FACTOR_JUSTIFICATION,
  payload: {data, context},
});

const onChangeSelectedProfile = (data, context) => ({
  type: ON_CHANGE_SELECTED_PROFILE,
  payload: {data, context},
});

const onChangeContentApi = (data, context) => ({
  type: ON_CHANGE_CONTENT_API,
  payload: {data, context},
});

const onChangeCollections = (data, context) => ({
  type: ON_CHANGE_COLLECTIONS,
  payload: {data, context},
});

const onChangeShowPreview = (data, context) => ({
  type: ON_CHANGE_SHOW_PREVIEW,
  payload: {data, context},
});

const onChangeShowCollectionLoading = (data, context) => ({
  type: ON_CHANGE_SHOW_COLLECTION_LOADING,
  payload: {data, context},
});

const onChangeCollectionOptionsLoading = (data, context) => ({
  type: ON_CHANGE_COLLECTION_OPTIONS_LOADING,
  payload: {data, context},
});

const onChangeFilteredCollectionOptions = (data, context) => ({
  type: ON_CHANGE_FILTERED_COLLECTION_OPTIONS,
  payload: {data, context},
});

const onChangeShowNewCollectionForm = (data, context) => ({
  type: ON_CHANGE_SHOW_NEW_COLLECTION_FORM,
  payload: {data, context},
});

const onChangeCollectionOptions = (data, context) => ({
  type: ON_CHANGE_COLLECTION_OPTIONS,
  payload: {data, context},
});

const onChangeCollectionType = (data, context) => ({
  type: ON_CHANGE_COLLECTION_TYPE,
  payload: {data, context},
});

const onChangeShowNewFrameworkFormRestfield = (data, context) => ({
  type: ON_CHANGE_SHOW_NEW_FRAMEWORK_FORM_RESTFIELD,
  payload: {data, context},
});

const onChangeShowAlert = (data, context) => ({
  type: ON_CHANGE_SHOW_ALERT,
  payload: {data, context},
});

const onChangeShowNewCollectionFormRestfield = (data, context) => ({
  type: ON_CHANGE_SHOW_NEW_COLLECTION_FORM_RESTFIELD,
  payload: {data, context},
});

const onChangeEditorValue = (data, context) => ({
  type: ON_CHANGE_EDITOR_VALUE,
  payload: {data, context},
});

const onChangeCollectionTitle = (data, context) => ({
  type: ON_CHANGE_COLLECTION_TITLE,
  payload: {data, context},
});

const onChangeFilteredCollectionOptionsArray = (data, context) => ({
  type: ON_CHANGE_FILTERED_COLLECTION_OPTIONS_ARRAY,
  payload: {data, context},
});

const onChangeAlertText = (data, context) => ({
  type: ON_CHANGE_ALERT_TEXT,
  payload: {data, context},
});

const onChangeShowContentUpload = (data, context) => ({
  type: ON_CHANGE_SHOW_CONTENT_UPLOAD,
  payload: {data, context},
});

const onChangeContentTags = (data, context) => ({
  type: ON_CHANGE_CONTENT_TAGS,
  payload: {data, context},
});

const onChangeNoContentError = (data, context) => ({
  type: ON_CHANGE_NO_CONTENT_ERROR,
  payload: {data, context},
});

const onChangeContentEdit = (data, context) => ({
  type: ON_CHANGE_CONTENT_EDIT,
  payload: {data, context},
});

const onChangeShowNewPatronForm = (data, context) => ({
  type: ON_CHANGE_SHOW_NEW_PATRON_FORM,
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
  updateFactorNames,
  onSelectQuestionType,
  onChangeJustificationQuestion,
  onChangeMinimumValueLabel,
  onChangeMaximumValueLabel,
  onChangeMaximumValue,
  onChangeAllowPatronsToAddFactors,
  isValidDefineFactors,
  onSubmitCreateProfile,
  onSubmitEditProfile,
  onSubmitDeleteProfile,
  addProfileKeys,
  onChangeSelectedProfile,
  onChangeSeedFactorValue,
  onChangeSeedFactorJustification,
  onChangeContentApi,
  onChangeCollections,
  onChangeShowPreview,
  onChangeShowCollectionLoading,
  onChangeCollectionOptionsLoading,
  onChangeFilteredCollectionOptions,
  onChangeShowNewCollectionForm,
  onChangeCollectionOptions,
  onChangeCollectionType,
  onChangeShowNewFrameworkFormRestfield,
  onChangeShowAlert,
  onChangeShowNewCollectionFormRestfield,
  onChangeEditorValue,
  onChangeCollectionTitle,
  onChangeFilteredCollectionOptionsArray,
  onChangeAlertText,
  onChangeShowContentUpload,
  onChangeContentTags,
  onChangeNoContentError,
  onChangeContentEdit,
  onChangeShowNewPatronForm,
};
