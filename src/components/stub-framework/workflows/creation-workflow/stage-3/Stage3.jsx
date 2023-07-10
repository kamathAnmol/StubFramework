// import React from "react";
// import Container from "react-bootstrap/Container";

// function Stage3({
//   data,
//   metadata,
//   configuration,
//   customisation,
//   contextManager,
// }) {
//   return <Container fluid></Container>;
// }
// export default Stage3;
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";
// import StepZilla from "react-stepzilla";
import Card from "../../../../commons/card";
import Step1 from "./steps/step-1";

import {addActiveStepId} from "../../../../../redux/actions";

function Stage3({
  data,
  metadata,
  configuration,
  customisation,
  contextManager,
}) {
  const dispatch = useDispatch();

  const keys = Object.keys(data.appStates);
  const values = Object.values(data.appStates);

  // const [step, setStep] = useState(0);

  useEffect(() => {
    dispatch(addActiveStepId(keys[0], contextManager.context));
  }, []);

  // const steps = [
  //   {
  //     name: "STEP 1 : Preview",
  //     component: (
  //       <Step1
  //         data={{appStates: values[0].step_data}}
  //         metadata={{title: ""}}
  //         customisation=""
  //         configuration=""
  //         contextManager={{
  //           context: {
  //             sessionId: contextManager.context.sessionId,
  //             featureInstanceId: contextManager.context.featureInstanceId,
  //             stageId: contextManager.context.stageId,
  //             stepId: keys[step],
  //           },
  //         }}
  //       />
  //     ),
  //   },
  // ];
  return (
    <Container fluid>
      <Card
        wizard
        id="wizardCard"
        textCenter
        titleCategoryPadding
        shadow
        content={
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
                stepId: keys[0],
              },
            }}
          />
          // <StepZilla
          //   steps={steps}
          //   stepsNavigation={false}
          //   showNavigation={false}
          //   preventEnterSubmission={true}
          //   nextButtonCls="btn btn-success pull-right btn-width"
          //   backButtonCls="btn btn-success btn-width"
          //   onStepChange={(step) => setStep(step)}
          // />
        }
      />
    </Container>
  );
}
export default Stage3;
