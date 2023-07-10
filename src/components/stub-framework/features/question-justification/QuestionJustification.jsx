import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {useDispatch} from "react-redux";

import {onChangeJustificationQuestion} from "../../../../redux/actions";

function QuestionJustification({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const dispatch = useDispatch();
  const justification_question = data.justificationQuestion;

  return (
    <Container fluid>
      <Form.Group>
        <Row>
          <Col md={10}>
            <Form.Label
              htmlFor="justification_question"
              className="form-label-text"
            >
              Add justification question
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Control
              as="textarea"
              id="justification_question"
              className="form-control"
              required
              value={justification_question}
              onChange={(e) => {
                dispatch(
                  onChangeJustificationQuestion(
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
export default QuestionJustification;
