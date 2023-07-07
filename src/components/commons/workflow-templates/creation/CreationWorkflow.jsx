import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import StepZilla from "react-stepzilla";
import Card from "../../card";

import Stage1 from "../../../porter/workflows/creation-workflow/stage-1/Stage1";
import Stage2 from "../../../porter/workflows/creation-workflow/stage-2/Stage2";
import Stage3 from "../../../porter/workflows/creation-workflow/stage-3/Stage3";
import {useDispatch} from "react-redux";

function CreationWorkflow({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const dispatch = useDispatch();

  const keys = Object.keys(data.appStates);
  const values = Object.values(data.appStates);

  const stage1Values = Object.values(values[0].stage_data);
  const stage2Values = Object.values(values[1].stage_data);

  useEffect(() => {
    dispatch({
      type: "ADD_ACTIVE_STAGE_ID",
      payload: {
        stageSessionId: contextManager.context.sessionId,
        stageFeatureId: contextManager.context.featureInstanceId,
        stageId: keys[0],
      },
    });
  }, [contextManager.context.featureInstanceId]);

  const stages = [
    {
      name: "STAGE 1 : Define Framework Parameters",
      component: (
        <Stage1
          data={{appStates: values[0].stage_data}}
          metadata={{title: ""}}
          customisation=""
          configuration=""
          contextManager={{
            context: {
              sessionId: contextManager.context.sessionId,
              featureInstanceId: contextManager.context.featureInstanceId,
              stageId: keys[0],
            },
          }}
        />
      ),
    },
    {
      name: "STAGE 2 : Seed Framework",
      component: (
        <Stage2
          data={{appStates: values[1].stage_data}}
          metadata={{
            factors: stage1Values[0].step_data,
            profiles: stage1Values[1].step_data,
          }}
          customisation=""
          configuration=""
          contextManager={{
            context: {
              sessionId: contextManager.context.sessionId,
              featureInstanceId: contextManager.context.featureInstanceId,
              stageId: keys[1],
            },
          }}
        />
      ),
    },
    {
      name: "STAGE 3 : Preview",
      component: (
        <Stage3
          data={{appStates: values[2].stage_data}}
          metadata={{
            factors: stage1Values[0].step_data,
            profiles: stage1Values[1].step_data,
            seedValues: stage2Values[0].step_data,
          }}
          customisation=""
          configuration=""
          contextManager={{
            context: {
              sessionId: contextManager.context.sessionId,
              featureInstanceId: contextManager.context.featureInstanceId,
              stageId: keys[2],
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
        title={metadata.title}
        shadow
        content={
          <StepZilla
            steps={stages}
            stepsNavigation={false}
            showNavigation={true}
            preventEnterSubmission={true}
            nextButtonCls="btn btn-success pull-right btn-width"
            backButtonCls="btn btn-success btn-width"
            onStepChange={(step) =>
              dispatch({
                type: "ADD_ACTIVE_STAGE_ID",
                payload: {
                  stageSessionId: contextManager.context.sessionId,
                  stageFeatureId: contextManager.context.featureInstanceId,
                  stageId: keys[step],
                },
              })
            }
          />
        }
      />
    </Container>
  );
}
export default CreationWorkflow;
