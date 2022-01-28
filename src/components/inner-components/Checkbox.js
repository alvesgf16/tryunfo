import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function Checkbox(props) {
  const { dataTestId, label, name, checked, onChange } = props;
  return (
    <Form.Check
      type="checkbox"
      id={ dataTestId }
      data-testid={ dataTestId }
      label={ label }
      name={ name }
      checked={ checked }
      onChange={ onChange }
    />
  );
}

Checkbox.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
