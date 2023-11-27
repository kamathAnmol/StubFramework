import React, {useEffect} from "react";
import CreationWorkflow from "./workflows/creation-workflow";
import OperationWorkflow from "./workflows/operation-workflow";
import {ADD_INSTANCE_TYPE} from "../../redux/actionTypes";
import "../../../assets/css/index.css";

function StubFramework({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  console.log("🚀 ~ file: StubFramework.jsx:14 ~ data:", data)
  const {sessionId, featureInstanceId} = contextManager.context;
  const title =
    data.appStates.feature_instance_data.framework_metadata.framework_label;
  const workflow = configuration.workflow;

  useEffect(() => {
    contextManager.dispatchF(ADD_INSTANCE_TYPE, {
      data: {instanceType: workflow},
      context: contextManager.context,
    });
  }, [workflow, sessionId, featureInstanceId]);

  function extractStepData(data) {
    const stepData = {};
    // Loop through the stages (1st level UUIDs)
    for (const stageId in data) {
      const stage = data[stageId];
      // Loop through the steps (2nd level UUIDs) in each stage
      for (const stepId in stage.stage_data) {
        const step = stage.stage_data[stepId];
        // Check if step_metadata contains step_name
        if (step.step_metadata && step.step_metadata.step_name) {
          const stepName = step.step_metadata.step_name;
          // Create a key in the stepData object using step_name
          stepData[`${stepName}`] = step.step_data;
        }
      }
    }
    return stepData;
  }

  const handleLaunchPursuit = () => {
    // Retrieve the existing data from localStorage
    const existingDataString = localStorage.getItem("pursuits");

    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {};

    const extractedStepData = extractStepData(
      data.appStates.feature_instance_data.framework_data
    );

    // Add the new item to the existing data
    // existingData[extractedStepData.publish_framework.title] = {
    //   framework_name: "",
    //   data: extractedStepData,
    // };

    // Stringify the updated data and set it in localStorage
    const updatedDataString = JSON.stringify(existingData);
    localStorage.setItem("pursuits", updatedDataString);
    metadata.handleLaunchPursuit({launchPursuit: true});
  };

  const commonProps = {
    data: {appStates: data.appStates.feature_instance_data.framework_data},
    metadata: {
      title: title,
      handleLaunchPursuit: handleLaunchPursuit,
      handleExit: metadata.handleExit,
    },
    customisation: customisation,
    configuration: configuration,
    contextManager: contextManager,
  };

  return (
    <>
      {workflow === "creation" ? (
        <CreationWorkflow {...commonProps} />
      ) : (
        <OperationWorkflow {...commonProps} />
      )}
    </>
  );
}

export default StubFramework;
