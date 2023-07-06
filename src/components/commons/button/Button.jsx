import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function CustomButton({ primary, label, variant, onClick, ...props }) {
  return (
    <Button
      className={[
        `btn-${variant}`,
        primary ? "btn-fill" : "",
        "btn-width",
      ].join(" ")}
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What variant does this button belong to
   */
  variant: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  variant: "success",
  primary: false,
  label: "Submit",
};
