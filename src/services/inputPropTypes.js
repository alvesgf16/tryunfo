import PropTypes from 'prop-types';

export const inputPropTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export const inputDefaultProps = { label: '', disabled: false };
