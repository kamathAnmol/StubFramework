import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"; // Import styled-components

import Button from "react-bootstrap/Button";

// Define the styled component
const StyledCustomButton = styled(Button)`
  // &.btn-primary {
  //   background-color: ${(props) => (props.primary ? "#007bff" : "#fff")};
  //   color: ${(props) => (props.primary ? "#fff" : "#007bff")};
  // }

  // &.btn-success {
  //   background-color: ${(props) => (props.primary ? "#28a745" : "#fff")};
  //   color: ${(props) => (props.primary ? "#fff" : "#28a745")};
  // }

  // &.btn-warning {
  //   background-color: ${(props) => (props.primary ? "#ffc107" : "#fff")};
  //   color: ${(props) => (props.primary ? "#fff" : "#ffc107")};
  // }

  // &.btn-danger {
  //   background-color: ${(props) => (props.primary ? "#dc3545" : "#fff")};
  //   color: ${(props) => (props.primary ? "#fff" : "#dc3545")};
  // }

  &.btn-fill {
  }
  min-width: 72px;
  padding: 9px;
`;

function CustomButton({primary, label, variant, onClick, ...props}) {
  return (
    <StyledCustomButton
      variant={variant}
      className={primary ? "btn-fill" : ""}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledCustomButton>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  primary: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  variant: "success",
  primary: false,
  label: "Submit",
};
