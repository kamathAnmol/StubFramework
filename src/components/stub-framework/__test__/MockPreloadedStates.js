const mockPreloadedState = {
  all_sessions: {
    "6498b58c-2aec-4736-93e8-d71ce2426663": {
      session_meta_data: {
        start_time: "2023-07-10T07:29:32.659Z",
        user_meta_data: {},
        console_meta_data: {},
        device_meta_data: {},
      },
      domain: {
        domain_meta_data: {
          domain_name: "",
          domain_type: "",
        },
        live_data: {
          all_feature_instances: {
            "cfd88537-ff53-4131-83e1-bd7428b752a7": {
              feature_instance_metadata: {
                feature_type: "workflow",
              },
              feature_instance_data: {
                framework_metadata: {
                  instance_type: "creation",
                  framework_id: "stub_framework",
                  framework_name: "Stub Framework",
                  framework_description: "",
                },
                framework_data: {
                  "83a23ac0-ac90-40a0-855a-12531986f757": {
                    stage_metadata: {
                      stage_id: "define_framework_parameters",
                      stage_label: "Define Framework Parameters",
                      stage_description: "",
                    },
                    stage_data: {
                      "2b5fc96d-699a-47d7-8381-86f298b30bca": {},
                      "6c6f1229-4525-4816-8692-22d6c624240c": {},
                    },
                    stage_scratchpad: {
                      active_step_id: "2b5fc96d-699a-47d7-8381-86f298b30bca",
                    },
                  },
                  "8c0b636b-f6c5-4a14-996c-02550edce95d": {
                    stage_metadata: {
                      stage_id: "seed_framework",
                      stage_label: "Seed Framework",
                      stage_description: "",
                    },
                    stage_data: {
                      "d5c76a50-b8cf-44b3-b39e-e88f81864663": {},
                      "85935821-9ab8-4360-b3ef-918aafb2ce8e": {},
                      "df101645-bebf-467d-bde9-a979f856aeb9": {},
                    },
                    stage_scratchpad: {
                      active_step_id: "",
                    },
                  },
                  "ec06ae78-6dd2-4b73-9ab8-cf85a5cf7a31": {
                    stage_metadata: {
                      stage_id: "preview",
                      stage_label: "Preview",
                      stage_description: "",
                    },
                    stage_data: {
                      "3c099e42-82d1-4879-bcf7-fc9b375b72fc": {},
                    },
                    stage_scratchpad: {
                      active_step_id: "",
                    },
                  },
                },
              },
              feature_instance_scratchpad: {
                active_stage_id: "83a23ac0-ac90-40a0-855a-12531986f757",
              },
            },
          },
          domain_scratchpad: {
            active_feature_instance_id: "cfd88537-ff53-4131-83e1-bd7428b752a7",
          },
        },
      },
    },
  },
  global_scratchpad: {
    active_session_id: "6498b58c-2aec-4736-93e8-d71ce2426663",
  },
};

export default mockPreloadedState;
