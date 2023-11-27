import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Stage1Step1 from "./stage-1/steps/step-1";
import Stage1Step2 from "./stage-1/steps/step-2";
import Stage2Step1 from "./stage-2/steps/step-1";
import Stage2Step2 from "./stage-2/steps/step-2";
import Stage2Step3 from "./stage-2/steps/step-3";
import Stage3Step1 from "./stage-3";

import {
  ADD_ACTIVE_STAGE_ID,
  CURRENT_STEP,
  IS_STEP_COMPLETE,
} from "../../../../redux/actionTypes";
import {
  StepManager,
  transformFrameworkDataToArray,
  AlertBadge,
} from "@ditype/react-commons/build-esm";

function CreationWorkflow({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  // const stageKeys = Object.keys(data.appStates);
  const keys = Object.keys(data.appStates);
  const values = Object.values(data.appStates);

  const stage1Values = Object.values(values[0].stage_data);
  const stage2Values = Object.values(values[1].stage_data);

  const [stage, setStage] = useState(0);
  const [step, setStep] = useState(0);
  const [isValidStep, setIsValidStep] = useState(true);

  // const keys1 = Object.keys(values[0].stage_data);
  const values1 = Object.values(values[0].stage_data);

  // const keys2 = Object.keys(values[1].stage_data);
  const values2 = Object.values(values[1].stage_data);

  // const keys3 = Object.keys(values[2].stage_data);
  const values3 = Object.values(values[2].stage_data);

  const twoDimensionalArray = transformFrameworkDataToArray(data.appStates);

  function transformObject(inputObject) {
    const transformedArray = [];

    for (const stageKey in inputObject) {
      if (inputObject.hasOwnProperty(stageKey)) {
        const stage = inputObject[stageKey];
        const stageName = stage.stage_metadata.stage_name;
        const stageUuid = stageKey;
        const stageId = stage.stage_metadata.stage_id;

        if (!transformedArray[stageId]) {
          transformedArray[stageId] = {
            stageId: stageId,
            name: stageName,
            component: [],
            uuid: stageUuid,
          };
        }

        for (const stepKey in stage.stage_data) {
          if (stage.stage_data.hasOwnProperty(stepKey)) {
            const step = stage.stage_data[stepKey];
            const stepName = step.step_metadata.step_name;
            const stepUuid = stepKey;
            const stepId = step.step_metadata.step_id;

            transformedArray[stageId].component.push({
              stepId: stepId,
              name: stepName,
              // component: <></>,
              uuid: stepUuid,
            });
          }
        }
      }
    }

    return transformedArray;
  }

  const steps_out = transformObject(data.appStates);
  const currentStageUuid = steps_out[stage].uuid;
  const currentStepUuid = steps_out[stage].component[step].uuid;
  const context = {
    sessionId: contextManager.context.sessionId,
    featureInstanceId: contextManager.context.featureInstanceId,
    stageId: currentStageUuid,
    stepId: currentStepUuid,
  };
  const contextManagerUpdated = {
    dispatchF: contextManager.dispatchF,
    context: context,
  };

  function generateSelectorOptions(inputObject) {
    const selectorOptions = [];

    for (const stageKey in inputObject) {
      if (inputObject.hasOwnProperty(stageKey)) {
        const stage = inputObject[stageKey];

        for (const stepKey in stage.stage_data) {
          if (stage.stage_data.hasOwnProperty(stepKey)) {
            const step = stage.stage_data[stepKey];
            console.log("🚀 ~ file: CreationWorkflow.jsx:114 ~ generateSelectorOptions ~ step:", step)
            const stepName = step.step_metadata.step_name;
            const stepLabel = step.step_metadata.step_label;
            const isValid = step.step_data.flag.complete;
            const stageId = stage.stage_metadata.stage_id;
            const stepId = step.step_metadata.step_id;

            selectorOptions.push({
              stageId: stageId,
              stepId: stepId,
              name: stepName,
              label: stepLabel,
              valid: isValid,
            });
          }
        }
      }
    }

    return selectorOptions;
  }

  const selectorOptions = generateSelectorOptions(data.appStates);
  useEffect(() => {
    try {
      contextManager.dispatchF(ADD_ACTIVE_STAGE_ID, {
        data: {stageId: keys[stage]},
        context: contextManager.context,
      });
      contextManager.dispatchF(CURRENT_STEP, {
        data: {stage},
      });
    } catch (error) {
      return console.error("An error occurred:", error);
    }
  }, [contextManager.context, stage]);

  const steps = [
    {
      name: "",
      component: [
        {
          name: "",
          component: (
            <Stage1Step1
              data={{appStates: values1[0].step_data}}
              metadata={{title: ""}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
        {
          name: "",
          component: (
            <Stage1Step2
              data={{appStates: values1[1].step_data}}
              metadata={{title: ""}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
      ],
    },
    {
      name: "",
      component: [
        {
          name: "",
          component: (
            <Stage2Step1
              data={{appStates: values2[0].step_data}}
              metadata={{}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
        {
          name: "",
          component: (
            <Stage2Step2
              data={{appStates: values2[1].step_data}}
              metadata={{}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
        {
          name: "",
          component: (
            <Stage2Step3
              data={{appStates: values2[2].step_data}}
              metadata={{}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
      ],
    },
    {
      name: "",
      component: [
        {
          name: "",
          component: (
            <Stage3Step1
              data={{appStates: values3[0].step_data}}
              metadata={{}}
              customisation=""
              configuration=""
              contextManager={contextManagerUpdated}
            />
          ),
        },
      ],
    },
  ];

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <Container fluid>
      {alertVisible && (
        <AlertBadge
          data={{alertMessage: alertMessage, closeAlert: closeAlert}}
          metadata={{variant: "danger"}}
        />
      )}
      <StepManager
        data={{
          steps: steps,
          currentProgress: (step) => {
            console.log(step);
            setStage(step.currentStage);
            setStep(step.currentStep);
          },
          handleNext: (next) => {
            setAlertMessage(
              {next} ? "Please fill all the fields to continue!" : ""
            );
            setAlertVisible(!next);

            setIsValidStep(next);
            console.log("next", next);
            contextManager.dispatchF(IS_STEP_COMPLETE, {
              data: {status: true},
              context: context,
            });
          },
          handlePrevious: (previous) => {
            console.log("previous", previous);
          },
          handleValidation: (valid) => {
            console.log(valid);
          },
          selectedStep: (selected) => {
            console.log("selected", selected);
          },
          launchPursuit: () => {
            metadata.handleLaunchPursuit();
          },
          handleExit: (status) => {
            metadata.handleExit(status);
          },
        }}
        metadata={{
          selectorOptions: selectorOptions,
          title: "Stub Framework",
          validation: {
            value: twoDimensionalArray,
            exclusion: ["is_valid", "flag", "flags"],
          },
        }}
        configuration={{
          skipValidation: configuration.skipValidation,
          isValidStep: isValidStep,
        }}
        customisation={{primaryColor: "#78b414", iconColor: "#9a9a9a"}}
      />
    </Container>
  );
}
export default CreationWorkflow;
