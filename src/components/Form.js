import React, { useContext } from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import TextInput from './inner-components/TextInput';
import NumberInput from './inner-components/NumberInput';
import ImageInput from './inner-components/ImageInput';
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

  const attrsStrs = [cardAttr1, cardAttr2, cardAttr3];
  const attrs = attrsStrs.map((attr) => (attr === '' ? 0 : parseInt(attr, 10)));
  const totalMax = 210;

  return (
    <BootstrapForm onSubmit={ onSaveButtonClick }>
      <TextInput
        dataTestId="name-input"
        label="Name"
        name="cardName"
        value={ cardName }
        onChange={ onInputChange }
      />
      <TextArea value={ cardDescription } onChange={ onInputChange } />
      <NumberInput
        dataTestId="attr1-input"
        label="Attr1"
        name="cardAttr1"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />
      <NumberInput
        dataTestId="attr2-input"
        label="Attr2"
        name="cardAttr2"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />
      <NumberInput
        dataTestId="attr3-input"
        label="Attr3"
        name="cardAttr3"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />
      <BootstrapForm.Text>
        { `Remaining points = ${totalMax - attrs.reduce((acc, cur) => acc + cur)}` }
      </BootstrapForm.Text>
      <ImageInput value={ cardImage } onChange={ onInputChange } />
      <Select
        dataTestId="rare-input"
        label="Rarity"
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
    </BootstrapForm>
  );
}
