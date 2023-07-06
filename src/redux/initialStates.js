/* eslint-disable no-unused-vars */
import { collections } from "../components/commons/collections"
import { collection_options } from "../components/commons/collection_options"

const initialState = {
  all_sessions: {},
  global_scratchpad: {
    active_session_id: "",
  },
};
export default initialState;

const frameworkInstanceData = {
  framework_meta_data: {
    framework_name: "Startegy Canvas",
    framework_description: "",
  },
  all_stages: {
    1: {
      stage_meta_data: {
        stage_name: "Define Framework Parameters",
        stage_description: "",
      },
      all_steps: {
        1: {
          step_meta_data: {
            step_name: "Factors",
            step_description: "",
          },
          step_data: {
            number_of_factors: 0,
            factor_names: [],
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
              define_profiles: false,
              define_framework_parameters: false,
            },
            flags: {
              is_name_field_empty: false,
              is_data_valid: true,
              alert_message: "",
            },
          },
        },
        2: {
          step_meta_data: {
            step_name: "Profiles",
            step_description: "",
          },
          step_data: {
            number_of_profiles: 0,
            profiles: {}
          },
        },
      },
    },
    2: {
      stage_meta_data: {
        stage_name: "Seed Framework",
        stage_description: "",
      },
      all_steps: {
        1: {
          step_meta_data: {
            step_name: "Seed Values",
            step_description: "",
          },
          step_data: {},
        },
        2: {
          step_meta_data: {
            step_name: "Publish Framework",
            step_description: "",
          },
          step_data: {
            collection_options : collection_options,
            collections : collections,
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
            show_new_patron_form: false,
            show_new_collection_form: false,
            show_new_framework_form_restfield: false,
            total_collection: [],
            content_api: [],
          },
        },
        3: {
          step_meta_data: {
            step_name: "Invite Patrons",
            step_description: "",
          },
          step_data: {
            add_new_patron: {},
            show_new_patron_form:false,
          },
        },
      },
    },
    3: {
      stage_meta_data: {
        stage_name: "Preview",
        stage_description: "",
      },
      all_steps: {
        1: {
          step_meta_data: {
            step_name: "Preview",
            step_description: "",
          },
          step_data: {},
        },
      },
    },
  },
};
