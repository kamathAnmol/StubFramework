import React, {useEffect} from "react";
import {ADD_ACTIVE_STEP_ID} from "../../../../../redux/actionTypes";

function handleStepChange(dispatchF, keys, context) {
  dispatchF({
    type: ADD_ACTIVE_STEP_ID,
    payload: {data: keys[0], context},
  });
}

function Stage3({
  data,
  metadata,
  configuration,
  customisation,
  contextManager: {dispatchF, context},
}) {
  const keys = Object.keys(data.appStates);

  useEffect(() => {
    handleStepChange(dispatchF, keys, context);
  }, []);
  
  return (
    <>
    </>
  );
}

export default Stage3;
