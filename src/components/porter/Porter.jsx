import React from "react";
import CreationWorkflow from "../commons/workflow-templates/creation";
import OperationWorkflow from "../commons/workflow-templates/operation";

function Porter({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const title =
    data.appStates.feature_instance_data.framework_metadata.framework_name;
  const workflow = configuration.workflow;

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
    // }
    // if (workflow === "operation") {
    //   return <OperationWorkflow title={title} />;
    // }
  }
}

export default Porter;
