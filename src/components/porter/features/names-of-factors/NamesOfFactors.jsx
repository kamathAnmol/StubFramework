import React from "react";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../commons/button";
import {useDispatch} from "react-redux";
import {updateFactorNames} from "../../../../redux/actions";

function NamesOfFactors({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const dispatch = useDispatch();

  const number = metadata.number;
  const label = `Factor ${number + 1}`;
  const placeholder = `Enter name for factor ${number + 1}`;
  const factor_names = data.factorNames;

  function handleChange(name) {
    dispatch(
      updateFactorNames({key: number, name: name}, contextManager.context)
    );
  }

  function handleDelete() {
    dispatch({
      type: "ON_DELETE_FACTOR_NAME",
      payload: {data: {key: number}, context: contextManager.context},
    });
  }
  return (
    <Container fluid>
      <Form.Group>
        <Row>
          <Col md={10}>
            <Form.Label className="form-label-text">{label}</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Control
              placeholder={placeholder}
              value={factor_names[number] || ""}
              onChange={(event) => handleChange(event.target.value)}
            />
          </Col>
          <Col>
            <CustomButton
              primary={false}
              label="Delete"
              variant="danger"
              onClick={handleDelete}
            />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}
export default NamesOfFactors;
