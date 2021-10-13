import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, dataTestId } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          Name:
          <input type={ type } data-testid={ dataTestId } id={ dataTestId } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
