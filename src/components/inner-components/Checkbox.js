import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
  const { dataTestId, label, name, checked, onChange } = props;
  return (
    <label htmlFor={ dataTestId }>
      { label }
      <input
        type="checkbox"
        id={ dataTestId }
        data-testid={ dataTestId }
        name={ name }
        checked={ checked }
        onChange={ onChange }
      />
    </label>
  );
}

Checkbox.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
