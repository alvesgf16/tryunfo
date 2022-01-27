import React, { useContext } from 'react';
import Input from './inner-components/Input';
import TextArea from './inner-components/TextArea';
import Select from './inner-components/Select';
import Checkbox from './inner-components/Checkbox';
import Button from './inner-components/Button';
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
        type="text"
        dataTestId="name-input"
        label="Name: "
        name="cardName"
        value={ cardName }
        onChange={ onInputChange }
      />
      <TextArea
        dataTestId="description-input"
        label="Description: "
        name="cardDescription"
        value={ cardDescription }
        onChange={ onInputChange }
      />
      <Input
        type="number"
        dataTestId="attr1-input"
        label="Attribute 1: "
        name="cardAttr1"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />
      <Input
        type="number"
        dataTestId="attr2-input"
        label="Attribute 2: "
        name="cardAttr2"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />
      <Input
        type="number"
        dataTestId="attr3-input"
        label="Attribute 3: "
        name="cardAttr3"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />
      <Input
        type="text"
        dataTestId="image-input"
        label="Image: "
        name="cardImage"
        value={ cardImage }
        onChange={ onInputChange }
      />
      <Select
        dataTestId="rare-input"
        label="Rarity: "
        name="cardRare"
        value={ cardRare }
        onChange={ onInputChange }
      />
      {
        hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <Checkbox
              dataTestId="trunfo-input"
              label="Super Trunfo?"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />)
      }
      <Button
        dataTestId="save-button"
        label="Salvar"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      />
    </form>
  );
}
