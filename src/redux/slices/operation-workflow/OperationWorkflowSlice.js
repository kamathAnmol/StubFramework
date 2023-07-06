import { createSlice } from "@reduxjs/toolkit";

const initalState = {};

export const operationWorkflowSlice = createSlice({
  name: "operation_workflow",
  initialState: initalState,
  reducers: {},
});

export const {} = operationWorkflowSlice.actions;

export default operationWorkflowSlice.reducer;
