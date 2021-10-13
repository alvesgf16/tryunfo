import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const { dataTestId, label } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>
          { label }
          <textarea data-testid={ dataTestId } id={ dataTestId } />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
