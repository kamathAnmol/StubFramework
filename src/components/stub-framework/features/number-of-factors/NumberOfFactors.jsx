import React from "react";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import {useDispatch} from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../commons/button";

import {
  submit_number_of_factors,
  is_valid_number_of_factors,
  add_factor_name_keys,
} from "../../../../redux/slices/creation-workflow/FrameworkParametersSlice";

import {connect} from "react-redux";
import {udpateNumberOfFactors} from "../../../../redux/actions";

function NumberOfFactors({
  data,
  metadata,
  customisation,
  configuration,
  contextManager,
}) {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(value) {
    // only absolute integer value will be dispatached to number_of_factors
    const absoluteValue = Math.abs(value);
    const truncatedValue = Math.trunc(absoluteValue);
    // dispatch(submit_number_of_factors({data: truncatedValue}));
    dispatch({
      type: "ON_CHANGE_NUMBER_OF_FACTORS",
      payload: {data: truncatedValue, context: contextManager.context},
    });
  }

  function handleSubmit() {
    setIsSubmitted(!isSubmitted);

    dispatch({
      type: "ON_SUBMIT_FACTOR_NUMBER",
      payload: {context: contextManager.context},
    });

    dispatch(add_factor_name_keys());
  }

  const label = "Number of factors";
  const placeholder = "Enter number of factors";

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
              type="number"
              placeholder={placeholder}
              value={data.numberOfFactors || ""}
              onChange={(event) => handleChange(event.target.value)}
              disabled={isSubmitted}
            />
          </Col>
          <Col>
            <CustomButton
              primary={isSubmitted ? false : true}
              label={isSubmitted ? "Edit" : "Submit"}
              onClick={handleSubmit}
            />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}

export default NumberOfFactors;

// const mapStateToProps = (state) => {
//   return {
//     data: {},
//     metadata: {title: ""},
//     customisation: "",
//     configuration: "",
//     contextManager: {
//       context: {
//         sessionId: contextManager.context.activeSessionId,
//         featureInstanceId: contextManager.context.activeFeatureInstanceId,
//         stageId: "",
//         stepId: "",
//       },
//     },
//   };
// };

// const mapDispatchToProps = {
//   udpateNumberOfFactors,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NumberOfFactors);
