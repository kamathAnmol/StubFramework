import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";
import StepZilla from "react-stepzilla";
import Card from "../../../../commons/card";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";

import {addActiveStepId} from "../../../../../redux/actions";

function Stage1({
  data,
  metadata,
  configuration,
  customisation,
  contextManager,
}) {
  const dispatch = useDispatch();

  const keys = Object.keys(data.appStates);
  const values = Object.values(data.appStates);

  const [step, setStep] = useState(0);

  useEffect(() => {
    dispatch(addActiveStepId(keys[step], contextManager.context));
  }, [step]);

  const steps = [
    {
      name: "STEP 1 : FORCES",
      component: (
        <Step1
          data={{appStates: values[0].step_data}}
          metadata={{title: ""}}
          customisation=""
          configuration=""
          contextManager={{
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
      name: "STEP 2 : ASSESSMENT GROUPS",
      component: (
        <Step2
          data={{appStates: values[1].step_data}}
          metadata={{title: ""}}
          customisation=""
          configuration=""
          contextManager={{
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
