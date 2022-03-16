import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { inputDefaultProps, inputPropTypes } from '../../services/inputPropTypes';

export default function NumberInput(props) {
  const { dataTestId, label, name, value, disabled, onChange } = props;

  return (
    <InputGroup className="mt-3">
      <InputGroup.Text id={ dataTestId }>{ label }</InputGroup.Text>
      <FormControl
        type="number"
        data-testid={ dataTestId }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
        aria-describedby={ dataTestId }
      />
    </InputGroup>
  );
}

NumberInput.propTypes = inputPropTypes;

NumberInput.defaultProps = inputDefaultProps;
