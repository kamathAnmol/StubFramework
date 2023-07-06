import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  session_id: "",
  session_meta_data: {
    start_time: "",
    user_meta_data: {},
    console_meta_data: {},
    device_meta_data: {},
  },
  domain: {
    domain_meta_data: {
      domain_name: "",
      domain_type: "Default",
    },
    live_data: {
      all_features: [
        {
          feature_instance_id: "",
          feature_instance_metadata: {
            feature_type: "Workflow",
          },
          feature_instance_data: {
            framework_data: {},
          },
          feature_instance_scratchpad: {},
        },
      ],
    },
  },
};
export const sessionSlice = createSlice({
  name: "session",
  initialState: initalState,
  reducers: {
    initialise_feature_instance_framework_data: (state, action) => {
      state.domain.live_data.all_features[
        action.payload.feature_instance_id
      ].feature_instance_data.framework_data = action.payload.workflow_data;
    },
  },
});

export const { initialise_feature_instance_framework_data } =
  sessionSlice.actions;

export default sessionSlice.reducer;
