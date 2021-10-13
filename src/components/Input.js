import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, dataTestId, label } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <input type={ type } data-testid={ dataTestId } id={ dataTestId } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
