import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function TextInput(props) {
  const { dataTestId, label, name, value, disabled, onChange } = props;
  return (
    <Form.Group className="mb-3" controlId={ dataTestId }>
      <Form.Label>{ label }</Form.Label>
      <Form.Control
        type="text"
        data-testid={ dataTestId }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
      />
    </Form.Group>
  );
}
TextInput.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = { label: '', disabled: false };
