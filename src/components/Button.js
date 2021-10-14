import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { disabled, dataTestId, label } = this.props;
    return (
      <div>
        <button
          disabled={ disabled }
          type="submit"
          data-testid={ dataTestId }
        >
          { label }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
