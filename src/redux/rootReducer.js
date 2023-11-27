import {produce} from "immer";
import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
  ADD_INSTANCE_TYPE,
  ADD_ACTIVE_STEP_ID,
  ADD_ACTIVE_STAGE_ID,
  CURRENT_STEP,
  IS_STEP_COMPLETE,
} from "./actionTypes";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SESSION: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[data.sessionId] = data.sessionData;
      });
    }

    case ADD_ACTIVE_SESSION_ID: {
      const {data, context} = action.payload;
      return produce(state, (draftState) => {
        draftState.global_scratchpad.active_session_id = data.sessionId;
      });
    }

    case CURRENT_STEP: {
      const {data} = action.payload;
      return produce(state, (draftState) => {
        draftState.global_scratchpad.current_stage = data.step;
      });
    }

    case CREATE_FEATURE_INSTANCE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.all_feature_instances[data.featureInstanceId] =
          data.featureInstanceData;
      });
    }

    case ADD_ACTIVE_FEATURE_INSTANCE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.domain_scratchpad.active_feature_instance_id =
          data.featureInstanceId;
      });
    }

    case ADD_INSTANCE_TYPE: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_metadata.instance_type =
          data.instanceType;
      });
    }

    case ADD_ACTIVE_STAGE_ID: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_scratchpad.active_stage_id = data.stageId;
      });
    }

    case ADD_ACTIVE_STEP_ID: {
      const {data, context} = action.payload;

      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[
          context.stageId
        ].stage_scratchpad.active_step_id = data.stepId;
      });
    }

    case IS_STEP_COMPLETE: {
      const {data, context} = action.payload;
      console.log(context);
      return produce(state, (draftState) => {
        draftState.all_sessions[
          context.sessionId
        ].domain.live_data.all_feature_instances[
          context.featureInstanceId
        ].feature_instance_data.framework_data[context.stageId].stage_data[
          context.stepId
        ].step_data.flag.complete = data.status;
      });
    }


    default:
      return state;
  }
};

export default rootReducer;
