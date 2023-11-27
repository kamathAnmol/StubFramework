import React, {useEffect, useMemo, useRef} from "react";
import "./OperationWorkflow.css";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "../../../commons/card";
import {ToggleButton} from "@ditype/react-commons";
import InputMode from "./interaction-mode/doing-mode/input-mode";
import OutputMode from "./interaction-mode/doing-mode/output-mode";
import LearningMode from "./interaction-mode/learning-mode/";
import BackgroundMode from "./background-mode/BackgroundMode";

function OperationWorkflow({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {

  const keys1 = Object.keys(data.appStates);

  let values = Object.values(data.appStates);

  useEffect(() => {
    values = Object.values(data.appStates);
  }, [data]);

  const keys2 = Object.keys(values[1]?.stage_data);
  const stage1Values = Object.values(values[0].stage_data);
  const stage2Values = Object.values(values[1].stage_data);

  const label1 = {on: "Interaction", off: "Background"};
  const label2 = {on: "Doing", off: "Learning"};
  const label3 = {on: "Output", off: "Input"};
  const label4 = {on: "Line Plot", off: "Box Plot"};

  const [mode1, setMode1] = useState(label1.off);
  const [mode2, setMode2] = useState(label2.off);
  const [mode3, setMode3] = useState(label3.off);
  const [mode4, setMode4] = useState(label4.off);

  function handleToggle1(state) {
    if (state) {
      setMode1(label1.on);
    } else setMode1(label1.off);
  }

  function handleToggle2(state) {
    if (state) {
      setMode2(label2.on);
    } else setMode2(label2.off);
  }

  function handleToggle3(state) {
    if (state) {
      setMode3(label3.on);
    } else setMode3(label3.off);
  }

  function handleToggle4(state) {
    if (state) {
      setMode4(label4.on);
    } else setMode4(label4.off);
  }
  const outputModeRef = useRef();

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
          <>
            <div className="toggle-container">
              <ToggleButton
                text={{active: label1.on, inactive: label1.off}}
                status={(active) => handleToggle1(active)}
              />
            </div>

            {mode1 == label1.off ? (
              <>
                <BackgroundMode metadata={{}} />
              </>
            ) : (
              <>
                <div className="toggle-container">
                  <ToggleButton
                    text={{active: label2.on, inactive: label2.off}}
                    status={(active) => handleToggle2(active)}
                  />
                </div>
                {mode2 == label2.off ? (
                  <>
                    <LearningMode metadata={{}} />
                  </>
                ) : (
                  <>
                    <div className="toggle-container">
                      <ToggleButton
                        text={{active: label3.on, inactive: label3.off}}
                        status={(active) => handleToggle3(active)}
                      />
                    </div>
                    {mode3 == label3.off ? (
                      <>
                        <InputMode
                          data={{appStates: stage2Values[0].step_data}}
                          metadata={{
                          }}
                          customisation={customisation}
                          configuration={configuration}
                          contextManager={{
                            context: {
                              sessionId: contextManager.context.sessionId,
                              featureInstanceId:
                                contextManager.context.featureInstanceId,
                              stageId: keys1[1],
                              stepId: keys2[0],
                            },
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <div className="toggle-container">
                          <ToggleButton
                            text={{active: label4.on, inactive: label4.off}}
                            status={(active) => handleToggle4(active)}
                          />
                        </div>
                        

                        <OutputMode
                          ref={outputModeRef}
                          data={{appStates: stage2Values[0].step_data}}
                          metadata={{}}
                          customisation={customisation}
                          configuration={configuration}
                          contextManager={{
                            context: {
                              sessionId: contextManager.context.sessionId,
                              featureInstanceId:
                                contextManager.context.featureInstanceId,
                              stageId: keys1[1],
                              stepId: keys2[0],
                            },
                          }}
                        />
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        }
      />
    </Container>
  );
}
export default OperationWorkflow;
