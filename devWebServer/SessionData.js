const start_time = new Date().toISOString();

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
      domain_type: "Default",
    },
    live_data: {
      all_feature_instances: {},
      domain_scratchpad: {
        active_feature_instance_id: "",
      },
    },
  },
};

export default sessionData;
