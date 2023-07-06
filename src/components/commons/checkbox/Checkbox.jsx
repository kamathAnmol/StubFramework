import React from 'react';
import Form from 'react-bootstrap/Form';

function Checkbox({ label, checked, onChange }) {
  return (
    <Form.Group className="form-group-spacing custom-checkbox">
      <Form.Check checked={checked} onChange={onChange} />
      <Form.Label className="form-label-text">{label}</Form.Label>
    </Form.Group>
  );
}
export default Checkbox;
