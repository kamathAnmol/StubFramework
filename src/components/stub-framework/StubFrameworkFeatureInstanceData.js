import { v4 as uuidv4 } from "uuid";

// const pursuitData = JSON.parse(localStorage.getItem("pursuits"));
// const activePursuit = localStorage.getItem("activePursuit");
// const localStorageData = pursuitData[activePursuit].data;

const StubFrameworkFeatureInstanceData = {
  creation: {
    feature_instance_metadata: {
      feature_type: "Workflow",
    },
    feature_instance_data: {
      framework_metadata: {
        framework_name: "stub_framework",
        framework_label: "Stub Framework",
        framework_description: "",
        workflow_type: "creation",
      },
      framework_data: {
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
            stage_id: 0,
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
                step_id: 0,
              },
              step_data: { flag: { complete: false } },
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
                step_id: 1,
              },
              step_data: { flag: { complete: false } },
            },
          },
          stage_scratchpad: {
            active_step_id: "",
          },
        },
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
            stage_id: 1,
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
                step_id: 0,
              },
              step_data: { flag: { complete: false } },
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "publish_framework",
                step_label: "Publish Framework",
                step_description: "",
                step_id: 1,
              },
              step_data: { 
                title:"",
                flag: { complete: false } },
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
                step_id: 2,
              },
              step_data: { flag: { complete: false } },
            },
          },
          stage_scratchpad: {
            active_step_id: "",
          },
        },
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
            stage_id: 2,
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
                step_id: 0,
              },
              step_data: { flag: { complete: false } },
            },
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
  },
  operation: {
    feature_instance_metadata: {
      feature_type: "Workflow",
    },
    feature_instance_data: {
      framework_metadata: {
        framework_name: "stub_framework",
        framework_label: "Stub Framework",
        framework_description: "",
        workflow_type: "operation",
      },
      framework_data: {
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
              },
              step_data: {},
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
              },
              step_data: "",
            },
          },
          stage_scratchpad: {
            active_step_id: "",
          },
        },
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
              },
              step_data: {},
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
              },
              step_data: "",
            },
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "I",
                step_description: "",
              },
              step_data: "",
            },
          },
          stage_scratchpad: {
            active_step_id: "",
          },
        },
        [uuidv4()]: {
          stage_metadata: {
            stage_name: "",
            stage_label: "",
            stage_description: "",
          },
          stage_data: {
            [uuidv4()]: {
              step_metadata: {
                step_name: "",
                step_label: "",
                step_description: "",
              },
              step_data: "",
            },
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
  },
};

export default StubFrameworkFeatureInstanceData;
