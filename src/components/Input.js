import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { value, name, type, dataTestId, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <input
            placeholder={ value }
            name={ name }
            type={ type }
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
