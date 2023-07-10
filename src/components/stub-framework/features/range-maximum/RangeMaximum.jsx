import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import {useDispatch} from "react-redux";

import {
  onChangeMaximumValue,
  onChangeMaximumValueLabel,
} from "../../../../redux/actions";

function RangeMaximum({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const maximum_value = data.maximumValue;
  const maximum_value_label = data.maximumValueLabel;
  const dispatch = useDispatch();

  function handleChange(event) {
    const value = parseInt(event.target.value);
    if (value < 0) {
      dispatch(
        onChangeMaximumValueLabel(Math.abs(value), contextManager.context)
      );
    } else if (value.length > 10) {
      dispatch(
        onChangeMaximumValueLabel(value.slice(0, 10), contextManager.context)
      );
    } else dispatch(onChangeMaximumValueLabel(value, contextManager.context));
  }

  return (
    <Container fluid>
      <Form.Group>
        <Row>
          <Col md={5}>
            <Form.Label htmlFor="max_value_label" className="form-label-text">
              Maximum value
            </Form.Label>
          </Col>
          <Col md={5}>
            <Form.Label htmlFor="max_value" className="form-label-text">
              Set a label for maximum value
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Form.Control
              maxLength={2}
              value={maximum_value}
              type="number"
              id="max_value_label"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Col>
          <Col md={5}>
            <Form.Control
              type="text"
              id="max_value"
              value={maximum_value_label}
              required
              onChange={(e) => {
                dispatch(
                  onChangeMaximumValue(e.target.value, contextManager.context)
                );
              }}
            />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}

export default RangeMaximum;
