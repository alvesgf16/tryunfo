import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { dataTestId, name, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <textarea
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
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
