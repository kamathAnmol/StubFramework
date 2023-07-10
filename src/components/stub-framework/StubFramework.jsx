import React, {useEffect} from "react";
import CreationWorkflow from "./workflows/creation-workflow";
import OperationWorkflow from "./workflows/operation-workflow";
import {addInstanceType} from "../../redux/actions";
import {useDispatch} from "react-redux";

function StubFramework({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const dispatch = useDispatch();
  const title =
    data.appStates.feature_instance_data.framework_metadata.framework_name;
  const workflow = configuration.workflow;

  useEffect(() => {
    dispatch(
      addInstanceType({
        sessionId: contextManager.context.sessionId,
        featureInstanceId: contextManager.context.featureInstanceId,
        instanceType: configuration.workflow,
      })
    );
  }, [workflow]);
  if (workflow === "creation") {
    return (
      <CreationWorkflow
        data={{appStates: data.appStates.feature_instance_data.framework_data}}
        metadata={{title: title}}
        customisation=""
        configuration=""
        contextManager={{
          context: {
            sessionId: contextManager.context.sessionId,
            featureInstanceId: contextManager.context.featureInstanceId,
            stageId: data.appStates.feature_instance_scratchpad.active_stage_id,
          },
        }}
      />
    );
  }

  if (workflow === "operation") {
    return (
      <OperationWorkflow
        data={{appStates: data.appStates.feature_instance_data.framework_data}}
        metadata={{title: title}}
        customisation=""
        configuration=""
        contextManager={{
          context: {
            sessionId: contextManager.context.sessionId,
            featureInstanceId: contextManager.context.featureInstanceId,
            stageId: data.appStates.feature_instance_scratchpad.active_stage_id,
          },
        }}
      />
    );
  }
}

export default StubFramework;
