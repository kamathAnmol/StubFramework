import React from "react";
import "./OperationWorkflow.css";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "../../card";
import ToggleButton from "../../../commons/toggle-button";

import Gallery from "../../../commons/gallery";

import InputMode from "../../../porter/workflows/operation-workflow/input-mode";
import OutputMode from "../../../porter/workflows/operation-workflow/output-mode";

// import pdfPath from "../../../../assets/media/pdfs/se.pdf";
// import imagePath from "../../../../assets/media/images/image.png";
// import ytThumbnail from "../../../../assets/media/thumbnails/risk.png";
// import localThumbnail from "../../../../assets/media/thumbnails/platform.png";

// const contents = [
//   {
//     type: "video/mp4",
//     src: "https://youtu.be/qHCG6j-ZRgU",
//     thumbnail: ytThumbnail,
//     title: "Assessing Architectural Risk - Part 1",
//     description: "Lesson by Mark Richards on Assessing Architectural Risk",
//   },
//   {
//     type: "image",
//     src: imagePath,
//     thumbnail: "",
//     title: "Screenplay flow",
//     description: "Explains flow of a script",
//   },
//   {
//     type: "video/embedded",
//     src: "https://drive.google.com/file/d/1pHAqoFropQedwuKXZXbG7cGy5EPjdonz/preview",
//     thumbnail: localThumbnail,
//     title: "Platform",
//     description:
//       "Factor level video, describes Platform from Railway Station example",
//   },
//   {
//     type: "pdf",
//     src: pdfPath,
//     thumbnail: "",
//     title: "Software Design Guidelines",
//     description:
//       "useful software deisng principles that helps you in improving your software designs",
//   },
// ];

function OperationWorkflow({sendF, dispatchF, logF, ...props}) {
  const label1 = {on: "Doing", off: "Learning"};

  const [mode1, setMode1] = useState(label1.off);
  function handleToggle1(state) {
    if (state) {
      setMode1(label1.on);
    } else setMode1(label1.off);
  }

  const label2 = {on: "Output", off: "Input"};

  const [mode2, setMode2] = useState(label2.off);
  function handleToggle1(state) {
    if (state) {
      setMode1(label2.on);
    } else setMode1(label2.off);
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

            {mode1 === "Doing" ? (
              <>
                <div className="toggle-container">
                  <ToggleButton label={label2} sendF={handleToggle2} />
                </div>
                {mode2 == "Output" ? <OutputMode /> : <InputMode />}
              </>
            ) : (
              <></>
              // <Gallery contents={contents} />
            )}
          </>
        }
      />
    </Container>
  );
}
export default OperationWorkflow;
