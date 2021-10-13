import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { dataTestId, label } = this.props;
    return (
      <div>
        <button type="submit" data-testid={ dataTestId }>{ label }</button>
      </div>
    );
  }
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
