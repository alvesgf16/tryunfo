import React, { useContext } from 'react';
import TryunfoContext from '../context/TryunfoContext';
import Checkbox from './inner-components/Checkbox';
import TextInput from './inner-components/TextInput';
import Select from './inner-components/Select';

export default function Filters() {
  const { state, onInputChange } = useContext(TryunfoContext);
  const { nameFilter, trunfoFilter, rareFilter } = state;

  return (
    <div>
      <h2 className="text-lg mt-12 mb-6">Search filters</h2>
      <TextInput
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
