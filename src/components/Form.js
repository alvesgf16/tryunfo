import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

export default class Form extends React.Component {
  render() {
    const attrCount = 3;
    return (
      <form>
        <Input type="text" dataTestId="name-input" label="Name: " />
        <TextArea dataTestId="description-input" label="Description: " />
        {Array.from({ length: attrCount }).map((_pos, index) => (<Input
          key={ `attr${index + 1}-input` }
          type="number"
          dataTestId={ `attr${index + 1}-input` }
          label={ `Attribute ${index + 1}: ` }
        />))}
        <Input type="text" dataTestId="image-input" label="Image: " />
        <Select dataTestId="rare-input" label="Rarity: " />
        <Input type="checkbox" dataTestId="trunfo-input" label="Super Trunfo?" />
        <Button dataTestId="save-button" label="Salvar" />
      </form>
    );
  }
}
