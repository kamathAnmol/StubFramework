import React, {useEffect, useRef} from "react";
import {useState} from "react";
// import Porter from "./components/porter";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
  createSession,
  addActiveSessionId,
  createFeatureInstance,
  addActiveFeatureInstanceId,
} from "./redux/actions";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import Porter from "./components/porter";
// import frameworkInstanceData from "./components/strategy-canvas/StrategyCanvasInstanceData";

function App({data, metadata, configuration, customisation, contextManager}) {
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  const start_time = new Date().toISOString();
  const [sessionId, setSessionId] = useState(uuidv4());
  const [featureInstanceId, setFeatureInstanceId] = useState(uuidv4());

  const activeSessionIsPresent =
    data.state.global_scratchpad.active_session_id !== "";

  let featureInstanceIsPresent = false;

  if (activeSessionIsPresent) {
    featureInstanceIsPresent =
      data.state.all_sessions[sessionId]?.domain?.live_data?.domain_scratchpad
        .active_feature_instance_id !== "";
  }

  const sessionData = {
    session_meta_data: {
      start_time: start_time,
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
        all_feature_instances: {},
        domain_scratchpad: {
          active_feature_instance_id: "",
        },
      },
    },
  };
  const featureInstanceData = {
    feature_instance_metadata: {
      feature_type: "",
    },
    feature_instance_data: {
      framework_metadata: {
        framework_id: "porter_five_forces",
        framework_name: "Porter",
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
                range: {
                  minimum: -100,
                  maximum: 100,
                },
                forces: [
                  {
                    name: "buyer_power",
                    label: "BUYER POWER",
                    range: {minimum: -50, maximum: 50},
                  },
                  {
                    name: "supplier_power",
                    label: "SUPPLIER POWER",
                    range: {minimum: -50, maximum: 50},
                  },
                  {
                    name: "threat_of_new_entrants",
                    label: "THREAT OF NEW ENTRANTS",
                    range: {minimum: -50, maximum: 50},
                  },
                  {
                    name: "threat_of_substitutes",
                    label: "THREAT OF SUBSTITUTES",
                    range: {minimum: -50, maximum: 50},
                  },
                  {
                    name: "competition_within_industry",
                    label: "COMPETITION WITHIN INDUSTRY",
                    range: {minimum: -50, maximum: 50},
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
    },
    feature_instance_scratchpad: {
      active_stage_id: "",
    },
  };

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(createSession({id: sessionId, data: sessionData}));
      dispatch(addActiveSessionId({id: sessionId}));
      isMounted.current = true;
    } else {
      if (activeSessionIsPresent) {
        dispatch(
          createFeatureInstance({
            sessionId: sessionId,
            featureInstanceId: featureInstanceId,
            featureInstanceData: featureInstanceData,
          })
        );
        dispatch(
          addActiveFeatureInstanceId({
            sessionId: sessionId,
            featureInstanceId: featureInstanceId,
          })
        );
      }
    }
  }, [isMounted, activeSessionIsPresent]);

  if (featureInstanceIsPresent) {
    return (
      <Container fluid>
        <Porter
          data={{
            appStates:
              data.state.all_sessions[sessionId].domain.live_data
                .all_feature_instances[featureInstanceId],
          }}
          metadata={metadata}
          configuration={{workflow: "creation"}}
          customisation={customisation}
          contextManager={{
            context: {
              sessionId: sessionId || null,
              featureInstanceId: featureInstanceId || null,
            },
          }}
        />
      </Container>
    );
  }
}

export default App;
