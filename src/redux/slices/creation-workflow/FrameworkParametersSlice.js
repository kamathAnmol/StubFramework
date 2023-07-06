import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  number_of_factors: 0,
  factor_names: {},
  question_type: "",
  justification_question: "",
  minimum_value: 1,
  maximum_value: "",
  minimum_value_label: "",
  maximum_value_label: "",
  allow_patrons_to_add_factors: false,
  number_of_profiles: 0,
  profiles: {},
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
};

export const frameworkParametersSlice = createSlice({
  name: "framework_parameters",
  initialState: initalState,
  reducers: {
    submit_number_of_factors: (state, action) => {
      state.number_of_factors = action.payload.data;
    },
    add_factor_name_keys: (state) => {
      for (let i = 0; i < state.number_of_factors; i++) {
        state.factor_names[i] = state.factor_names[i] || "";
      }
    },
    on_change_factor_name: (state, action) => {
      state.factor_names[action.payload.data.key] = action.payload.data.value;
    },
    on_delete_factor_name: (state, action) => {
      const values = Object.values(state.factor_names);

      for (let i = 0; i < values.length; i++) {
        if (action.payload.data.key <= i && i !== values.length - 1) {
          state.factor_names[i] = state.factor_names[i + 1];
        }
      }

      delete state.factor_names[Object.keys(state.factor_names).length - 1];
      state.number_of_factors = state.number_of_factors - 1;
    },
    on_select_question_type: (state, action) => {
      state.question_type = action.payload;
    },
    on_change_justification_question: (state, action) => {
      state.justification_question = action.payload;
    },
    on_change_maximum_value: (state, action) => {
      state.maximum_value = action.payload;
    },
    on_change_minimum_value_label: (state, action) => {
      state.minimum_value_label = action.payload;
    },
    on_change_maximum_value_label: (state, action) => {
      state.maximum_value_label = action.payload;
    },
    on_change_allow_patrons_to_add_factors: (state, action) => {
      state.allow_patrons_to_add_factors = action.payload;
    },
    is_valid_number_of_factors: (state, action) => {
      state.is_valid.number_of_factors = action.payload.data;
    },
    is_valid_define_factors: (state, action) => {
      state.is_valid.define_factors = action.payload.data;
    },
    is_valid_define_profiles: (state, action) => {
      state.is_valid.define_profiles = action.payload.data;
    },
    is_valid_define_framework_parameters: (state, action) => {
      state.is_valid.define_parameters = action.payload.data;
    },
    on_submit_create_profile: (state, action) => {
      function isValidData(state, newEntry) {
        if (newEntry.name === "") {
          state.flags.is_data_valid = false;
          return (state.flags.alert_message = "Profile field cannot be empty");
        }
        const obj = state.profiles;
        let nameExists = false;
        let colorExists = false;

        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            const entry = obj[key];
            if (entry.name === newEntry.name) {
              nameExists = true;
            }
            if (entry.color === newEntry.color) {
              colorExists = true;
            }

            if (nameExists && colorExists) {
              state.flags.is_data_valid = false;

              return (state.flags.alert_message =
                "Profile name and color are taken");
            }
          }
        }

        if (nameExists) {
          state.flags.is_data_valid = false;
          return (state.flags.alert_message = "Profile name is taken");
        }
        if (colorExists) {
          state.flags.is_data_valid = false;
          return (state.flags.alert_message = "Profile color is taken");
        }

        state.profiles[state.number_of_profiles] = action.payload.data;
        state.number_of_profiles += 1;
        state.flags.is_data_valid = true;
      }

      isValidData(state, action.payload.data);
    },
    on_delete_profile: (state, action) => {
      const values = Object.values(state.profiles);

      for (let i = 0; i < values.length; i++) {
        if (action.payload.data <= i && i !== values.length - 1) {
          state.profiles[i] = state.profiles[i + 1];
        }
      }

      delete state.profiles[action.payload.data];
      state.number_of_profiles = state.number_of_profiles - 1;
    },
    on_edit_profile: (state, action) => {},
  },
});

export const {
  submit_number_of_factors,
  add_factor_name_keys,
  on_change_factor_name,
  on_delete_factor_name,
  on_select_question_type,
  on_change_justification_question,
  on_change_maximum_value,
  on_change_minimum_value_label,
  on_change_maximum_value_label,
  on_change_allow_patrons_to_add_factors,
  on_submit_create_profile,
  on_delete_profile,
  on_edit_profile,
  is_valid_number_of_factors,
  is_valid_define_factors,
  is_valid_define_profiles,
  is_valid_define_framework_parameters,
} = frameworkParametersSlice.actions;

export default frameworkParametersSlice.reducer;
