/* eslint-disable react/prop-types */
import React from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {collections} from "../src/components/commons/collections";
import {collection_options} from "../src/components/commons/collection_options";

const FeatureButton = ({session_id}) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const featureInstanceId = uuidv4();

    const featureData = {
      feature_instance_metadata: {
        feature_type: "",
      },
      feature_instance_data: {
        framework_metadata: {
          framework_id: "stub_framework",
          framework_name: "Framework Template",
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
                  step_id: "forces",
                  step_label: "Forces",
                  step_description: "",
                },
                step_data: {
                  forces: [
                    {
                      name: "buyer_power",
                      label: "BUYER POWER",
                      range: {minimum: -100, maximum: 100},
                    },
                    {
                      name: "supplier_power",
                      label: "SUPPLIER POWER",
                      range: {minimum: -100, maximum: 100},
                    },
                    {
                      name: "threat_of_new_entrants",
                      label: "THREAT OF NEW ENTRANTS",
                      range: {minimum: -100, maximum: 100},
                    },
                    {
                      name: "threat_of_substitutes",
                      label: "THREAT OF SUBSTITUTES",
                      range: {minimum: -100, maximum: 100},
                    },
                    {
                      name: "competition_within_industry",
                      label: "COMPETITION WITHIN INDUSTRY",
                      range: {minimum: -100, maximum: 100},
                    },
                  ],
                  inputType: [
                    {
                      name: "rating",
                      label: "RATING",
                    },
                  ],
                },
              },
              [uuidv4()]: {
                step_metadata: {
                  step_id: "assessment_groups",
                  step_label: "Assessment Groups",
                  step_description: "",
                },
                step_data: [
                  {
                    force: "",
                    title: "",
                    range: {
                      values: {minimum: "", maximum: ""},
                      labels: {minimum: "", maximum: ""},
                    },
                    rank: "",
                    weight: "",
                    factors: [
                      {
                        title: "",
                        range: {
                          values: {minimum: "", maximum: ""},
                          labels: {minimum: "", maximum: ""},
                        },
                        rank: "",
                        weight: "",
                        inputType: "",
                      },
                    ],
                  },
                ],
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
                step_data: [
                  {
                    groupRank: "",
                    factorRank: "",
                    value: "",
                    justification: "",
                  },
                ],
              },
              [uuidv4()]: {
                step_metadata: {
                  step_id: "publish_framework",
                  step_label: "Publish Framework",
                  step_description: "",
                },
                step_data: {
                  collections: collections,
                  collection_options: collection_options,
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
      },
      feature_instance_scratchpad: {
        active_stage_id: "",
      },
    };

    dispatch({
      type: "ADD_FEATURE_INSTANCE",
      payload: {
        sessionId: session_id,
        featureInstanceId,
        featureData,
      },
    });
  };

  return <button onClick={handleButtonClick}>{session_id}</button>;
};

export default FeatureButton;
