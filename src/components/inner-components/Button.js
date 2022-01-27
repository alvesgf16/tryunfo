import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { disabled, dataTestId, label } = props;
  return (
    <button
      type="submit"
      data-testid={ dataTestId }
      disabled={ disabled }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
