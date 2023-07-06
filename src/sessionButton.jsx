import React from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";

const SessionButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const key = uuidv4();
    const sessionData = {
      session_meta_data: {
        start_time: "",
        user_meta_data: {},
        console_data_data: {},
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

    dispatch({
      type: "ADD_SESSION",
      payload: {
        key,
        sessionData,
      },
    });
  };

  return <button onClick={handleButtonClick}>Add Session</button>;
};

export default SessionButton;
