import {combineReducers} from "redux";
import {produce} from "immer";
import {
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
  ADD_ACTIVE_STEP_ID,
  ON_CHANGE_SEED_FACTOR_VALUE,
  ON_CHANGE_SEED_FACTOR_JUSTIFICATION,
  ON_CHANGE_CONTENT_API,
  ON_CHANGE_COLLECTIONS,
  ON_CHANGE_SHOW_PREVIEW,
  ON_CHANGE_SHOW_COLLECTION_LOADING,
  ON_CHANGE_COLLECTION_OPTIONS_LOADING,
  ON_CHANGE_FILTERED_COLLECTION_OPTIONS,
  ON_CHANGE_SHOW_NEW_COLLECTION_FORM,
  ON_CHANGE_COLLECTION_TYPE,
  ON_CHANGE_SHOW_NEW_FRAMEWORK_FORM_RESTFIELD,
  ON_CHANGE_SHOW_ALERT,
  ON_CHANGE_EDITOR_VALUE,
  ON_CHANGE_COLLECTION_TITLE,
  ON_CHANGE_FILTERED_COLLECTION_OPTIONS_ARRAY,
  ON_CHANGE_ALERT_TEXT,
  ON_CHANGE_CONTENT_TAGS,
  ON_CHANGE_NO_CONTENT_ERROR,
  ON_CHANGE_CONTENT_EDIT,
  ON_CHANGE_SHOW_CONTENT_UPLOAD,
  ON_CHANGE_SHOW_NEW_COLLECTION_FORM_RESTFIELD,
  ON_CHANGE_SHOW_NEW_PATRON_FORM,
} from "./actionTypes";

const globalScratchpadReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ACTIVE_SESSION_ID":
      return {
        ...state,
        active_session_id: action.payload,
      };
    default:
      return state;
  }
};

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      const {key, sessionData} = action.payload;
      return {...state, [key]: sessionData};

    case "ADD_FEATURE_INSTANCE":
      const {sessionId, featureInstanceId, featureData} = action.payload;

      return produce(state, (draftState) => {
        draftState[sessionId].domain.live_data.all_feature_instances[
          featureInstanceId
        ] = featureData;
      });

    case "ADD_ACTIVE_FEATURE_INSTANCE_ID":
      const {sessionIdActive, featureInstanceIdActive} = action.payload;

      return produce(state, (draftState) => {
        draftState[
          sessionIdActive
        ].domain.live_data.domain_scratchpad.active_feature_instance_id =
          featureInstanceIdActive;
      });

    case "ADD_FEATURE_INSTANCE_DATA":
      const {sessionIdActiveD, featureInstanceIdD, featureInstanceIdActiveD} =
        action.payload;

      return produce(state, (draftState) => {
        draftState[sessionIdActiveD].domain.live_data.all_feature_instances[
          featureInstanceIdD
        ].feature_instance_data = featureInstanceIdActiveD;
      });

    case "ADD_ACTIVE_STAGE_ID":
      const {stageSessionId, stageFeatureId, stageId} = action.payload;
      return produce(state, (draftState) => {
        draftState[stageSessionId].domain.live_data.all_feature_instances[
          stageFeatureId
        ].feature_instance_scratchpad.active_stage_id = stageId;
      });

    case "ON_CHANGE_NUMBER_OF_FACTORS": {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.number_of_factors = data;
      });
    }

    case "ON_SUBMIT_FACTOR_NUMBER": {
      const {context} = action.payload;
      return produce(state, (draftState) => {
        const stepData =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data;

        stepData.is_valid.number_of_factors = true;
        for (let i = 0; i < stepData.number_of_factors; i++) {
          stepData.factor_names[i] = stepData.factor_names[i] || "";
        }
      });
    }

    case "ON_DELETE_FACTOR_NAME": {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        const stepData =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data;
        const values = Object.values(stepData.factor_names);

        for (let i = 0; i < values.length; i++) {
          if (data.key <= i && i !== values.length - 1) {
            stepData.factor_names[i] = stepData.factor_names[i + 1];
          }
        }

        delete stepData.factor_names[
          Object.keys(stepData.factor_names).length - 1
        ];
        stepData.number_of_factors -= 1;
      });
    }

    case ADD_ACTIVE_STEP_ID: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[
          context.stageId
        ].stage_scratchpad.active_step_id = data;
      });
    }

    case UPDATE_FACTOR_NAMES: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        const factorNamesObject =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data.factor_names;

        factorNamesObject[data.key] = data.name;
      });
    }

    case ON_SELECT_QUESTION_TYPE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.question_type = data;
      });
    }

    case ON_CHANGE_JUSTIFICATION_QUESTION: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.justification_question = data;
      });
    }

    case ON_CHANGE_MINIMUM_VALUE_LABEL: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.minimum_value_label = data;
      });
    }
    case ON_CHANGE_MAXIMUM_VALUE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.maximum_value = data;
      });
    }
    case ON_CHANGE_MAXIMUM_VALUE_LABEL: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.maximum_value_label = data;
      });
    }

    case ALLOW_PATRONS_TO_ADD_FACTORS: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.allow_patrons_to_add_factors = data;
      });
    }

    case IS_VALID_DEFINE_FACTORS: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.is_valid.define_factors = data;
      });
    }

    case ON_CHANGE_SEED_FACTOR_VALUE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.profiles[data.profileName][data.factorName].value =
          data.value;
      });
    }

    case ON_CHANGE_SEED_FACTOR_JUSTIFICATION: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.profiles[data.profileName][data.factorName].justification =
          data.value;
      });
    }

    case ADD_PROFILE_KEYS: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.profiles = data;
      });
    }

    case ON_CHANGE_SELECTED_PROFILE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.flags.selected_profile = data;
      });
    }

    case ON_CHANGE_CONTENT_API: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.content_api = data;
      });
    }

    case ON_CHANGE_COLLECTIONS: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.collections = data;
      });
    }

    case ON_CHANGE_SHOW_PREVIEW: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_preview = data;
      });
    }

    case ON_CHANGE_SHOW_COLLECTION_LOADING: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_collection_loading = data;
      });
    }

    case ON_CHANGE_SHOW_NEW_COLLECTION_FORM_RESTFIELD: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_new_collection_form_restfield = data;
      });
    }

    case ON_CHANGE_COLLECTION_OPTIONS_LOADING: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.collection_options_loading = data;
      });
    }

    case ON_CHANGE_FILTERED_COLLECTION_OPTIONS: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.filtered_collection_options = data;
      });
    }
    case ON_CHANGE_SHOW_CONTENT_UPLOAD: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_content_upload = data;
      });
    }

    case ON_CHANGE_SHOW_NEW_COLLECTION_FORM: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_new_collection_form = data;
      });
    }

    case ON_CHANGE_COLLECTION_TYPE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.collection_type = data;
      });
    }

    case ON_CHANGE_SHOW_NEW_FRAMEWORK_FORM_RESTFIELD: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_new_framework_form_restfield = data;
      });
    }

    case ON_CHANGE_SHOW_ALERT: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_alert = data;
      });
    }

    case ON_CHANGE_EDITOR_VALUE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.editor_value = data;
      });
    }

    case ON_CHANGE_COLLECTION_TITLE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.collection_title = data;
      });
    }

    case ON_CHANGE_FILTERED_COLLECTION_OPTIONS_ARRAY: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        const FilteredCollectionOptions =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data.filtered_collection_options;
        FilteredCollectionOptions.push(data);
      });
    }

    case ON_CHANGE_ALERT_TEXT: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.alert_text = data;
      });
    }

    case ON_CHANGE_CONTENT_TAGS: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.content_tags = data;
      });
    }

    case ON_CHANGE_NO_CONTENT_ERROR: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.no_content_error = data;
      });
    }

    case ON_CHANGE_CONTENT_EDIT: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.content_edit = data;
      });
    }

    case ON_CHANGE_SHOW_NEW_PATRON_FORM: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState[context.sessionId].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.show_new_patron_form = data;
      });
    }

    case ON_SUBMIT_CREATE_PROFILE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        const profile_data =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data;

        function isValidData(profile_data, newEntry) {
          if (newEntry.name === "") {
            profile_data.is_valid.define_profiles = false;
            return (profile_data.is_valid.alert_message =
              "Profile field cannot be empty");
          }
          const obj = profile_data.profiles;
          let nameExists = false;
          let colorExists = false;

          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              const entry = obj[key];
              if (entry.name === newEntry.name) {
                nameExists = true;
              }
              if (entry.color === newEntry.color) {
                colorExists = true;
              }
              if (nameExists && colorExists) {
                profile_data.is_valid.define_profiles = false;
                return (profile_data.is_valid.alert_message =
                  "Profile name and color are taken");
              }
            }
          }

          if (nameExists) {
            profile_data.is_valid.define_profiles = false;
            return (profile_data.is_valid.alert_message =
              "Profile name is taken");
          }
          if (colorExists) {
            profile_data.is_valid.define_profiles = false;
            return (profile_data.is_valid.alert_message =
              "Profile color is taken");
          }

          profile_data.profiles[profile_data.number_of_profiles] = newEntry;
          profile_data.number_of_profiles += 1;
          profile_data.is_valid.is_data_valid = true;
        }

        isValidData(profile_data, data);
      });
    }
    case ON_SUBMIT_EDIT_PROFILE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {});
    }
    case ON_SUBMIT_DELETE_PROFILE: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        const profile_data =
          draftState[context.sessionId].domain.live_data.all_feature_instances[
            context.featureInstanceId
          ].feature_instance_data.framework_data[context.stageId].stage_data[
            context.stepId
          ].step_data;

        const values = Object.values(profile_data.profiles);

        for (let i = 0; i < values.length; i++) {
          if (data <= i && i !== values.length - 1) {
            profile_data.profiles[i] = profile_data.profiles[i + 1];
          }
        }

        delete profile_data.profiles[data];
        profile_data.number_of_profiles -= 1;
      });
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  all_sessions: sessionReducer,
  global_scratchpad: globalScratchpadReducer,
});

export default rootReducer;
