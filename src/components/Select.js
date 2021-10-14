import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { value, dataTestId, name, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <select
            value={ value }
            data-testid={ dataTestId }
            name={ name }
            id={ dataTestId }
            onChange={ onChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Very Rare</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
