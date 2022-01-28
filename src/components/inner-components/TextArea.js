import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function TextArea(props) {
  const { value, onChange } = props;
  return (
    <Form.Group className="mb-10" controlId="name-filter">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        data-testid="name-filter"
        name="cardDescription"
        value={ value }
        onChange={ onChange }
        rows={ 2 }
      />
    </Form.Group>
  );
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
