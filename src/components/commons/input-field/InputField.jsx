import React from "react";

import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "../button";

function InputField({
  label,
  placeholder,
  type,
  as,
  labelLength,
  inputLength,
  ...props
}) {
  return (
    <Form.Group>
      <Row>
        <Col md={labelLength}>
          <Form.Label className="form-label-text">{label}</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col md={inputLength}>
          <Form.Control
            placeholder={placeholder}
            type={type}
            as={as}
            {...props}
          />
        </Col>
      </Row>
    </Form.Group>
  );
}
export default InputField;

InputField.propTypes = {
  /**
   * Name for the input filed
   */
  label: PropTypes.string,
  /**
   * Use as input field or textarea
   */
  as: PropTypes.oneOf(["input", "textarea"]),
  /**
   * Type of input field
   */
  type: PropTypes.oneOf(["text", "number", "email", "file", "color"]),
  /**
   * Placeholder for input field
   */
  placeholder: PropTypes.string,
  /**
   * Length of label defined by Col 'md' property. Ranges between 1 to 12
   */
  labelLength: PropTypes.number,
  /**
   * Length of input field defined by Col 'md' property. Ranges between 1 to 12
   */
  inputLength: PropTypes.number,
};

InputField.defaultProps = {
  as: "input",
  type: "text",
  placeholder: "Click here..",
  labelLength: 11,
  inputLength: 11,
};
