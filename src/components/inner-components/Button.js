import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';

export default function Button(props) {
  const { disabled, dataTestId, label } = props;
  return (
    <BootstrapButton
      type="submit"
      data-testid={ dataTestId }
      className="mt-16"
      disabled={ disabled }
      variant="primary"
    >
      { label }
    </BootstrapButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
