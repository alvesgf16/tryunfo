import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import LinkIcon from '../../images/icons/link-45deg.svg';

export default function ImageInput(props) {
  const { value, disabled, onChange } = props;
  return (
    <Form.Group className="mb-3" controlId="image-input">
      <Form.Label>Image</Form.Label>
      <InputGroup>
        <InputGroup.Text><img src={ LinkIcon } alt="link icon" /></InputGroup.Text>
        <FormControl
          type="text"
          data-testid="image-input"
          name="cardImage"
          value={ value }
          disabled={ disabled }
          onChange={ onChange }
        />
      </InputGroup>
    </Form.Group>
  );
}
ImageInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ImageInput.defaultProps = { disabled: false };
