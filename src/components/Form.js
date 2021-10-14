import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';

export default class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form onSubmit={ onSaveButtonClick }>
        <Input
          value={ cardName }
          name="cardName"
          type="text"
          dataTestId="name-input"
          label="Name: "
          onChange={ onInputChange }
        />
        <TextArea
          value={ cardDescription }
          name="cardDescription"
          dataTestId="description-input"
          label="Description: "
          onChange={ onInputChange }
        />
        <Input
          value={ cardAttr1 }
          name="cardAttr1"
          type="number"
          dataTestId="attr1-input"
          label="Attribute 1: "
          onChange={ onInputChange }
        />
        <Input
          value={ cardAttr2 }
          name="cardAttr2"
          type="number"
          dataTestId="attr2-input"
          label="Attribute 2: "
          onChange={ onInputChange }
        />
        <Input
          value={ cardAttr3 }
          name="cardAttr3"
          type="number"
          dataTestId="attr3-input"
          label="Attribute 3: "
          onChange={ onInputChange }
        />
        <Input
          value={ cardImage }
          name="cardImage"
          type="text"
          dataTestId="image-input"
          label="Image: "
          onChange={ onInputChange }
        />
        <Select
          value={ cardRare }
          name="cardRare"
          dataTestId="rare-input"
          label="Rarity: "
          onChange={ onInputChange }
        />
        <Checkbox
          checked={ cardTrunfo }
          name="cardTrunfo"
          dataTestId="trunfo-input"
          label="Super Trunfo?"
          onChange={ onInputChange }
        />
        <Button
          disabled={ isSaveButtonDisabled }
          dataTestId="save-button"
          label="Salvar"
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
