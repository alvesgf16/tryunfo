import React, { useContext } from 'react';
import TryunfoContext from '../context/TryunfoContext';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';

export default function Filters() {
  const { state, onInputChange } = useContext(TryunfoContext);
  const { nameFilter, trunfoFilter, rareFilter } = state;

  return (
    <div>
      <Input
        type="text"
        dataTestId="name-filter"
        name="nameFilter"
        value={ nameFilter }
        disabled={ trunfoFilter }
        onChange={ onInputChange }
      />
      <Select
        dataTestId="rare-filter"
        name="rareFilter"
        value={ rareFilter }
        disabled={ trunfoFilter }
        onChange={ onInputChange }
      />
      <Checkbox
        dataTestId="trunfo-filter"
        label="Super Trunfo"
        name="trunfoFilter"
        checked={ trunfoFilter }
        onChange={ onInputChange }
      />
    </div>
  );
}
