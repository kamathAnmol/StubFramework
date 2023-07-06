import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import {useDispatch} from "react-redux";

import {onChangeMinimumValueLabel} from "../../../../redux/actions";

function RangeMinimum({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const minimum_value = data.minimumValue;
  const minimum_value_label = data.minimumValueLabel;

  const dispatch = useDispatch();
  return (
    <Container fluid>
      <Form.Group>
        <Row>
          <Col md={5}>
            <Form.Label htmlFor="min_value_label" className="form-label-text">
              Minimum value
            </Form.Label>
          </Col>
          <Col md={5}>
            <Form.Label htmlFor="min_value" className="form-label-text">
              Set a label for minimum value
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Form.Control
              value={minimum_value}
              type="number"
              disabled={true}
              id="min_value_label"
            />
          </Col>
          <Col md={5}>
            <Form.Control
              type="text"
              id="min_value"
              value={minimum_value_label}
              required
              onChange={(e) => {
                dispatch(
                  onChangeMinimumValueLabel(
                    e.target.value,
                    contextManager.context
                  )
                );
              }}
            />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}

export default RangeMinimum;
