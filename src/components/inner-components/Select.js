import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function Select(props) {
  const { dataTestId, label, name, value, disabled, onChange } = props;
  return (
    <Form.Group className="mb-4" controlId={ dataTestId }>
      { label && <Form.Label>{ label }</Form.Label> }
      <Form.Select
        data-testid={ dataTestId }
        name={ name }
        value={ value }
        disabled={ disabled }
        onChange={ onChange }
      >
        { name === 'rareFilter' && <option value="todas">All</option> }
        <option value="normal">Normal</option>
        <option value="rare">Rare</option>
        <option value="very rare">Very Rare</option>
      </Form.Select>
    </Form.Group>
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
