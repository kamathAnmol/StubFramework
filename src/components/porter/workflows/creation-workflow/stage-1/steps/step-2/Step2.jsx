import React from "react";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";

function Step2({data, metadata, customisation, configuration, contextManager}) {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return <Container fluid></Container>;
}

export default Step2;
