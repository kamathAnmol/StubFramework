import React from "react";
import "./OperationWorkflow.css";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "../../../commons/card";
import ToggleButton from "../../../commons/toggle-button";

function OperationWorkflow({sendF, dispatchF, logF, ...props}) {
  const label1 = {on: "Interaction", off: "Background"};
  const label2 = {on: "Doing", off: "Learning"};
  const label3 = {on: "Output", off: "Input"};

  const [mode1, setMode1] = useState(label1.off);
  const [mode2, setMode2] = useState(label2.off);
  const [mode3, setMode3] = useState(label3.off);

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

  return (
    <Container fluid>
      <Card
        wizard
        id="wizardCard"
        textCenter
        titleCategoryPadding
        title={props.title}
        shadow
        content={
          <>
            <div className="toggle-container">
              <ToggleButton label={label1} sendF={handleToggle1} />
            </div>

            {mode1 === "Interaction" ? (
              <>
                <div className="toggle-container">
                  <ToggleButton label={label2} sendF={handleToggle2} />
                </div>
                {mode2 === "Doing" ? (
                  <>
                    <div className="toggle-container">
                      <ToggleButton label={label3} sendF={handleToggle3} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>{/* <Gallery contents={contents} /> */}</>
            )}
          </>
        }
      />
    </Container>
  );
}
export default OperationWorkflow;
