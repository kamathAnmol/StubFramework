import {produce} from "immer";
import {
  CREATE_SESSION,
  ADD_ACTIVE_SESSION_ID,
  CREATE_FEATURE_INSTANCE,
  ADD_ACTIVE_FEATURE_INSTANCE,
} from "./actionTypes";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return produce(state, (draftState) => {
        draftState.all_sessions[action.payload.id] = action.payload.data;
      });

    case ADD_ACTIVE_SESSION_ID:
      return produce(state, (draftState) => {
        draftState.global_scratchpad.active_session_id = action.payload.id;
      });

    case CREATE_FEATURE_INSTANCE:
      return produce(state, (draftState) => {
        draftState.all_sessions[
          action.payload.id.session
        ].domain.live_data.all_feature_instances[
          action.payload.id.featureInstance
        ] = action.payload.data;
      });

    case ADD_ACTIVE_FEATURE_INSTANCE:
      return produce(state, (draftState) => {
        draftState.all_sessions[
          action.payload.id.session
        ].domain.live_data.domain_scratchpad.active_feature_instance_id =
          action.payload.id.featureInstance;
      });

    default:
      return state;
  }
};

export default rootReducer;
