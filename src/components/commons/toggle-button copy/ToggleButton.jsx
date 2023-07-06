import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./ToggleButton.css";
import PropTypes from "prop-types";

function ToggleButton(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (props.sendF) {
      props.sendF(isChecked);
    }
  }, [isChecked]);

  return (
    <div
      id="toggle-button"
      className={`toggle-button ${isChecked ? "checked" : ""}`}
      onClick={handleToggle}
    >
      <div className="ball"></div>
      <span className={`text ${isChecked ? "text-left" : "text-right"}`}>
        {isChecked ? props.label.on : props.label.off}
      </span>
    </div>
  );
}
export default ToggleButton;

ToggleButton.propTypes = {
  /**
   * Label for on and off condition, displayed inside toggle button
   * object contains 2 keys: {on: "", off: ""}
   */
  label: PropTypes.objectOf(PropTypes.string),
};

ToggleButton.defaultProps = {
  label: { on: "On", off: "Off" },
};
