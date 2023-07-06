import React from 'react'
// import { Alert, Collapse } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { on_change_show_alert } from "../../redux/slices/PublishFrameworkSlice"
import { Typography, Collapse } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function ErrorAlert() {
  const alertText = useSelector(({ publish_framework }) => publish_framework  ?.alert_text);
    const showAlert = useSelector(
      (state) => state.publish_framework.show_alert
    );
    const dispatch = useDispatch()
  return (
    <Collapse in={showAlert}>
    <Alert
      severity="error"
      onClose={() => {
        dispatch(on_change_show_alert(false));
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {alertText}
      </Typography>
    </Alert>
  </Collapse>
  )
}

export default ErrorAlert