import {v4 as uuidv4} from "uuid";

const frameworkInstanceData = {
  framework_metadata: {
    framework_id: "strategy_canvas",
    framework_name: "Strategy Canvas",
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
        [uuidv4()]: {
          step_metadata: {
            step_id: "factors",
            step_label: "Factors",
            step_description: "",
          },
          step_data: {
            number_of_factors: 0,
            factor_names: {},
            question_type: "",
            justification_question: "",
            minimum_value: 1,
            maximum_value: "",
            minimum_value_label: "",
            maximum_value_label: "",
            allow_patrons_to_add_factors: false,
            is_valid: {
              number_of_factors: false,
              define_factors: false,
              define_framework_parameters: false,
            },
          },
        },
        [uuidv4()]: {
          step_metadata: {
            step_id: "profiles",
            step_label: "Profiles",
            step_description: "",
          },
          step_data: {
            number_of_profiles: 0,
            profiles: {},
            is_valid: {
              define_profiles: true,
              alert_message: "",
            },
          },
        },
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
        [uuidv4()]: {
          step_metadata: {
            step_id: "seed_values",
            step_label: "Seed Values",
            step_description: "",
          },
          step_data: {
            profiles: {},
            flags: {
              selected_profile: "",
            },
          },
        },
        [uuidv4()]: {
          step_metadata: {
            step_id: "publish_framework",
            step_label: "Publish Framework",
            step_description: "",
          },
          step_data: {
            collections: "collections",
            collection_options: "collection_options",
            collection_type: "",
            show_preview: false,
            show_collection_loading: false,
            no_content_error: false,
            alert_text: null,
            content_tags: [],
            show_alert: false,
            collection_title: null,
            start: true,
            content_edit: false,
            show_content_upload: false,
            show_new_collection_form_restfield: false,
            editor_value: "",
            collection_options_loading: false,
            filtered_collection_options: [],
            show_new_collection_form: false,
            show_new_framework_form_restfield: false,
            total_collection: [],
            content_api: [],
          },
        },
        [uuidv4()]: {
          step_metadata: {
            step_id: "invite_patrons",
            step_label: "Invite Patrons",
            step_description: "",
          },
          step_data: {
            add_new_patrons: {},
            editor_value: "",
            show_new_patron_form: false,
          },
        },
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
        [uuidv4()]: {
          step_metadata: {
            step_id: "preview_step",
            step_label: "Preview",
            step_description: "",
          },
          step_data: {},
        },
      },
      stage_scratchpad: {
        active_step_id: "",
      },
    },
  },
};

export default frameworkInstanceData;
