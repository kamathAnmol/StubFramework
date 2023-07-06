import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import {onSelectQuestionType} from "../../../../redux/actions";
import {useDispatch} from "react-redux";
import Select from "react-select";

function QuestionType({contextManager}) {
  const valueArray = ["Rating"];
  const dispatch = useDispatch();

  const options = valueArray.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <Container fluid>
      <Form.Group>
        <Row>
          <Col md={10}>
            <Form.Label htmlFor="question_type" className="form-label-text">
              Question type
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Select
              placeholder="Select Question Type"
              isSearchable={false}
              options={options}
              required
              onChange={(selected) => {
                dispatch(
                  onSelectQuestionType(selected.value, contextManager.context)
                );
              }}
            />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}
export default QuestionType;
