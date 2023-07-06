import React from "react";
import PropTypes from "prop-types";

import "../../../index.css";
import "./RangeSelector.css";

import Slider from "@mui/material/Slider";

import Form from "react-bootstrap/Form";

/**
 * Sliders allow users to make selections from a range of values.
 */
function valuetext(value) {
  return value;
}

function RangeSelector({
  data,
  metadata,
  configuration,
  customisation,
  contextManager,
}) {

  return (
    <Form.Group className="form-group">
      <label>{metadata.factorName}</label>
      <Slider 
        orientation={configuration.orientation}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        defaultValue={metadata.default}
        min={metadata.minimumValue}
        max={metadata.maximumvalue}
        />
    </Form.Group>
  );
}

export default RangeSelector;

// RangeSelector.propTypes = {
//   metadata.value:PropTypes.string,
//   /**
//    * minimum value the slider can hold
//    */
//   minimumValue: PropTypes.number,
// };

RangeSelector.defaultProps = {
// metadata:[

//   {label: "Temperature"},
//  { default:[50, 100]},
//  { minimumValue: 0},
//   {maximumvalue: 100},
// ],
//   customisation:[
//     {color: "#fff"}
//   ],
//   customisation:[
//     {orientation: "vertical"}
//   ]

  data: {
    appStates: {
      currentValue: [],
    },
  },
  metadata: {
  
    range: {  
      value: {minimum: "1", maximum: "10", default: [2, 7]},
    label: {minimum: "min", maximum: "max"},
  },
  factorName:"factor"
  },
  configuration: {
    orientation: "vertical"
  },
  customisation: {
    color: "",
  },
  contextManager: {
    context: {
      sessionId: "",
      featureInstanceId: "",
      stageId: "",
      stepId: "",
    },
    sendF: {},
    dispatchF: {},
    logF: {},
  
}
}
