import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function NumberInput(props) {
  const { dataTestId, label, name, value, disabled, onChange } = props;

  return (
    <InputGroup className="mb-3">
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
NumberInput.propTypes = {
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

NumberInput.defaultProps = { label: '', disabled: false };
