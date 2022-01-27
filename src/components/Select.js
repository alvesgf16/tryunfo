import React from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const { dataTestId, label, name, value, disabled, onChange } = props;
  return (
    <label htmlFor={ dataTestId }>
      { label }
      <select
        id={ dataTestId }
        data-testid={ dataTestId }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
      >
        { name === 'rareFilter' && <option value="todas">Todas</option> }
        <option value="normal">Normal</option>
        <option value="raro">Rare</option>
        <option value="muito raro">Very Rare</option>
      </select>
    </label>
  );
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = { label: '', disabled: false };
