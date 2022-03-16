import React from 'react';
import { Form } from 'react-bootstrap';
import { inputDefaultProps, inputPropTypes } from '../../services/inputPropTypes';

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

TextInput.propTypes = inputPropTypes;

TextInput.defaultProps = inputDefaultProps;
