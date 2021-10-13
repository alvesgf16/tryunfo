import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { dataTestId, label } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <select data-testid={ dataTestId } id={ dataTestId }>
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
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
