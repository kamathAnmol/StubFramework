import React from "react";
import {useState} from "react";
import "../../../index.css";
import "./JustificationBox.css";

import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function JustificationBox({sendF, dispatchF, ...props}) {
  const [justification, setJustification] = useState(
    props.currentJustification
  );

  return (
    <Form className="justification-box-container">
      <Form.Label className="form-label-text">
        {props.justificationQuestion}
      </Form.Label>
      <Form.Control
        as="textarea"
        placeholder="Enter a valid reason.."
        value={justification}
        onChange={(event) => {
          setJustification(event.target.value);
        }}
      />

      <Form.Group className="form-group-spacing justification-box-btn-group">
        <Button className="btn-success btn-width" onClick={() => sendF()}>
          Cancel
        </Button>
        <Button
          className="btn-success btn-fill btn-width "
          onClick={() => {
            sendF();
            dispatchF(justification);
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
export default JustificationBox;

JustificationBox.propTypes = {
  /**
   * Question label
   */
  justificationQuestion: PropTypes.string,
  /**
   * currentValue used to set intial value of slider
   */
  currentJustification: PropTypes.string,
  /**
   * sendF used as callback function
   */
  sendF: PropTypes.func,
  /**
   * dispatchF used to dispatch redux reducers
   */
  dispatchF: PropTypes.func,
};

JustificationBox.defaultProps = {
  justificationQuestion: "Justify your choice?",
  currentJustification: "",
  sendF: () => {},
  dispatchF: () => {},
};
