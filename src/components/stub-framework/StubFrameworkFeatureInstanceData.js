import {v4 as uuidv4} from "uuid";

const StubFrameworkFeatureInstanceData = {
  feature_instance_metadata: {
    feature_type: "workflow",
  },
  feature_instance_data: {
    framework_metadata: {
      instance_type: "",
      framework_id: "stub_framework",
      framework_name: "Stub Framework",
      framework_description: "",
    },
    framework_data: {
      [uuidv4()]: {
        stage_metadata: {
          stage_id: "define_framework_parameters",
          stage_label: "Define Framework Parameters",
          stage_description: "",
        },
        stage_data: {
          [uuidv4()]: {},
          [uuidv4()]: {},
        },
        stage_scratchpad: {
          active_step_id: "",
        },
      },
      [uuidv4()]: {
        stage_metadata: {
          stage_id: "seed_framework",
          stage_label: "Seed Framework",
          stage_description: "",
        },
        stage_data: {
          [uuidv4()]: {},
          [uuidv4()]: {},
          [uuidv4()]: {},
        },
        stage_scratchpad: {
          active_step_id: "",
        },
      },
      [uuidv4()]: {
        stage_metadata: {
          stage_id: "preview",
          stage_label: "Preview",
          stage_description: "",
        },
        stage_data: {
          [uuidv4()]: {},
        },
        stage_scratchpad: {
          active_step_id: "",
        },
      },
    },
  },
  feature_instance_scratchpad: {
    active_stage_id: "",
  },
};

export default StubFrameworkFeatureInstanceData;
