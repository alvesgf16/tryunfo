import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
  render() {
    const { checked, dataTestId, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <input
            checked={ checked }
            type="checkbox"
            data-testid={ dataTestId }
            id={ dataTestId }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  checked: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
