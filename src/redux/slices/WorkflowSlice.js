import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "",
  description: "",
  workflow_type: "",
  workflow_data: {
    stages: [
      {
        name: "Define Framework Parameters",
        description: "",
        steps: [
          {
            name: "Factors",
            description: "",
            data: {},
          },
          {
            name: "Profiles",
            description: "",
            data: {},
          },
        ],
      },
      {
        name: "Seed Framework",
        description: "",
        steps: [
          {
            name: "Seed Values",
            description: "",
            data: {},
          },
          {
            name: "Publish Framework",
            description: "",
            data: {},
          },
          {
            name: "Invite Patrons",
            description: "",
            data: {},
          },
        ],
      },
      {
        name: "Preview",
        description: "",
        steps: [
          {
            name: "Line Chart",
            description: "",
            data: {},
          },
        ],
      },
    ],
  },
};
export const frameworkWorkflowSlice = createSlice({
  name: "framework_workflow",
  initialState: initalState,
  reducers: {
    initialise_framework_name: (state, action) => {
      state.name = action.payload.data;
    },
    initialise_workflow_type: (state, action) => {
      state.workflow_type = action.payload.data;
    },
    initialise_stage: (state, action) => {
      state.workflow_data.stages.push(action.payload.data);
    },
    initialise_step: (state, action) => {
      state.workflow_data.stages[action.payload.stage_index].steps.push(
        action.payload.data
      );
    },
    udpate_step_data: (state, action) => {
      state.workflow_data.stages[action.payload.stage_index].steps[
        action.payload.step_index
      ].data = action.payload.data;
    },
  },
});

export const {
  initialise_framework_name,
  initialise_workflow_type,
  initialise_stage,
  initialise_step,
  udpate_step_data,
} = frameworkWorkflowSlice.actions;

export default frameworkWorkflowSlice.reducer;
