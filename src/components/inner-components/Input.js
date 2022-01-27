import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { dataTestId, label, type, name, value, disabled, onChange } = props;
  return (
    <label htmlFor={ dataTestId }>
      { label }
      <input
        type={ type }
        id={ dataTestId }
        data-testid={ dataTestId }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
      />
    </label>
  );
}
Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = { label: '', disabled: false };
