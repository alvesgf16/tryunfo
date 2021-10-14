import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { value, name, dataTestId, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <textarea
            value={ value }
            data-testid={ dataTestId }
            name={ name }
            id={ dataTestId }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
