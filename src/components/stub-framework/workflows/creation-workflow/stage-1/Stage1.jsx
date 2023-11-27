import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import StepZilla from "react-stepzilla";
import Card from "../../../../commons/card";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";
import {ADD_ACTIVE_STEP_ID} from "../../../../../redux/actionTypes";

function Stage1({
  data,
  metadata,
  configuration,
  customisation,
  contextManager,
}) {

  const keys = Object.keys(data.appStates);
  const values = Object.values(data.appStates);

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (contextManager.context.stageId) {
      contextManager.dispatchF(ADD_ACTIVE_STEP_ID, {
        data: {stepId: keys[step]},
        context: contextManager.context,
      });
    }
  }, [contextManager.context]);

  const steps = [
    {
      name: "STEP 1",
      component: (
        <Step1
          data={{appStates: values[0].step_data}}
          metadata={{}}
          customisation=""
          configuration=""
          contextManager={{
            dispatchF: contextManager.dispatchF,
            context: {
              sessionId: contextManager.context.sessionId,
              featureInstanceId: contextManager.context.featureInstanceId,
              stageId: contextManager.context.stageId,
              stepId: keys[step],
            },
          }}
        />
      ),
    },
    {
      name: "STEP 2",
      component: (
        <Step2
          data={{appStates: values[1].step_data}}
          metadata={{}}
          customisation=""
          configuration=""
          contextManager={{
            dispatchF: contextManager.dispatchF,
            context: {
              sessionId: contextManager.context.sessionId,
              featureInstanceId: contextManager.context.featureInstanceId,
              stageId: contextManager.context.stageId,
              stepId: keys[step],
            },
          }}
        />
      ),
    },
  ];
  return (
    <Container fluid>
      <Card
        wizard
        id="wizardCard"
        textCenter
        titleCategoryPadding
        shadow
        content={
          <StepZilla
            steps={steps}
            stepsNavigation={false}
            showNavigation={true}
            preventEnterSubmission={true}
            nextButtonCls="btn btn-success pull-right btn-width"
            backButtonCls="btn btn-success btn-width"
            onStepChange={(step) => setStep(step)}
          />
        }
      />
    </Container>
  );
}
export default Stage1;
