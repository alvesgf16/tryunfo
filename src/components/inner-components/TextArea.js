import React from 'react';
import PropTypes from 'prop-types';

export default function TextArea(props) {
  const { value, name, dataTestId, label, onChange } = props;
  return (
    <label htmlFor={ dataTestId }>
      { label }
      <textarea
        value={ value }
        data-testid={ dataTestId }
        name={ name }
        id={ dataTestId }
        onChange={ onChange }
      />
    </label>
  );
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
