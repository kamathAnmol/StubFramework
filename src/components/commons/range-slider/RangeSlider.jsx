import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

import "../../../index.css";
import "./RangeSlider.css";
import "react-rangeslider/lib/index.css";
import Slider from "react-rangeslider";

import Form from "react-bootstrap/Form";

/**
 * sendF - callback function to be called when value change is completed
 *
 * dispatchF - dispatches reducer to set value of factor
 *
 * Renders slider component with its name and value
 */

function RangeSlider({sendF, dispatchF, ...props}) {
  const labels = {
    [props.minimumValue]: props.minimumValueLabel,
    [props.maximumValue]: props.maximumValueLabel,
  };

  const [currentValue, setCurrentValue] = useState(props.currentValue);

  function handleChange(value) {
    setCurrentValue(value);
    dispatchF(currentValue);
  }

  function handleComplete() {
    sendF();
  }

  return (
    <Form.Group className="form-group-spacing ">
      <Slider
        min={props.minimumValue}
        max={props.maximumValue}
        orientation="vertical"
        value={currentValue}
        labels={labels}
        onChange={(value) => handleChange(value)}
        onChangeComplete={() => handleComplete()}
      />
    </Form.Group>
  );
}

export default RangeSlider;

// RangeSlider.propTypes = {
//   /**
//    * minimum value the slider can hold
//    */
//   minimumValue: PropTypes.number,
//   /**
//    * maximum value the slider can hold
//    */
//   maximumValue: PropTypes.number,
//   /**
//    * Label for minimum value
//    */
//   minimumValueLabel: PropTypes.string,
//   /**
//    * Label for maximum value
//    */
//   maximumValueLabel: PropTypes.string,
//   /**
//    * currentValue used to set intial value of slider
//    */
//   currentValue: PropTypes.number,
//   /**
//    * sendF used as callback function
//    */
//   sendF: PropTypes.func,
//   /**
//    * dispatchF used to dispatch redux reducers
//    */
//   dispatchF: PropTypes.func,
// };

// RangeSlider.defaultProps = {
//   minimumValue: 1,
//   maximumValue: 10,
//   minimumValueLabel: "Min",
//   maximumValueLabel: "Max",
//   currentValue: 1,
//   sendF: () => {},
//   dispatchF: () => {},
// };
