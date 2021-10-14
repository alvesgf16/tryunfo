import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div>
        <label htmlFor="trunfo-Input">
          Super Trunfo?
          <input
            checked={ checked }
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
