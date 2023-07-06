import {createSlice} from "@reduxjs/toolkit";

const initalState = {
  profiles: {},
  flags: {
    selected_profile: "",
  },
};

export const seedValuesSlice = createSlice({
  name: "seed_values",
  initialState: initalState,
  reducers: {
    add_profile_keys: (state, action) => {
      state.profiles = action.payload.data;
    },
    on_change_selected_profile: (state, action) => {
      state.flags.selected_profile = action.payload.data;
    },
    on_change_seed_factor_value: (state, action) => {
      state.profiles[action.payload.data.profile_name][
        action.payload.data.factor_name
      ]["value"] = action.payload.data.value;
    },
    on_change_seed_factor_justification: (state, action) => {
      state.profiles[action.payload.data.profile_name][
        action.payload.data.factor_name
      ]["justification"] = action.payload.data.justification;
    },
  },
});

export const {
  add_profile_keys,
  on_change_seed_factor_value,
  on_change_selected_profile,
  on_change_seed_factor_justification,
} = seedValuesSlice.actions;

export default seedValuesSlice.reducer;
