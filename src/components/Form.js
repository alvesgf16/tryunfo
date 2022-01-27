import React, { useContext } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';
import TryunfoContext from '../context/TryunfoContext';

export default function Form() {
  const { state, onInputChange, onSaveButtonClick } = useContext(TryunfoContext);
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    hasTrunfo,
    isSaveButtonDisabled,
  } = state;

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
      {
        hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : <Checkbox checked={ cardTrunfo } onChange={ onInputChange } />
      }
      <Button
        disabled={ isSaveButtonDisabled }
        dataTestId="save-button"
        label="Salvar"
        onClick={ onSaveButtonClick }
      />
    </form>
  );
}
