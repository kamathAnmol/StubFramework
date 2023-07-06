import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons";
import Description from "../description";
import ToggleButton from "../../toggle-button";
import "../Gallery.css";

function MediaPlayer(props) {
  const imageRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const label = {on: "Description", off: "Media"};
  const [toggle, setToggle] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      if (isFullScreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullScreen]);

  return (
    <>
      <Row>
        <Col>
          <div className="toggle-container">
            <ToggleButton label={label} sendF={(toggle) => setToggle(toggle)} />
          </div>
        </Col>
      </Row>
      {toggle ? (
        <Description content={props.content} />
      ) : (
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {props.content.type === "pdf" ? (
            <div>
              <object
                width="1000"
                height="800"
                data={props.content.src}
                type="application/pdf"
              ></object>
            </div>
          ) : props.content.type === "image" ? (
            <div className="image-container">
              <img
                src={props.content.src}
                alt={props.content.alt}
                ref={imageRef}
                // className="image-file-preview"
                style={{
                  objectFit: "contain",
                  width: "1280px",
                  height: "720px",
                }}
              />
              <button className="full-screen-button" onClick={handleFullScreen}>
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </div>
          ) : props.content.type === "video/mp4" ? (
            <ReactPlayer
              url={props.content.src}
              controls={true}
              alt={props.content.alt}
              playing={true}
              width="1280px"
              height="720px"
            />
          ) : (
            <iframe
              src={props.content.src}
              width="1280px"
              height="720px"
              allowFullScreen="allowFullScreen"
              allow="autoplay"
            ></iframe>
          )}
        </Row>
      )}
      <Row>
        <div className="toggle-container">
          <button
            type="button"
            className="btn btn-success"
            style={{margin: 10}}
            onClick={() => {
              props.setPlay(false);
            }}
          >
            Back
          </button>
        </div>
      </Row>
    </>
  );
}

export default MediaPlayer;
