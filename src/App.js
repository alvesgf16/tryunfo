import React, { useContext } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import TryunfoContext from './context/TryunfoContext';

function App() {
  const { state, onInputChange } = useContext(TryunfoContext);

  const {
    nameFilter,
    rareFilter,
    trunfoFilter,
    cards,
  } = state;

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form />
      <Card info={ state } />
      <input
        type="text"
        data-testid="name-filter"
        name="nameFilter"
        value={ nameFilter }
        onChange={ onInputChange }
        disabled={ trunfoFilter }
      />
      <select
        data-testid="rare-filter"
        name="rareFilter"
        value={ rareFilter }
        onChange={ onInputChange }
        disabled={ trunfoFilter }
      >
        <option value="todas">Todas</option>
        <option value="normal">Normal</option>
        <option value="raro">Rare</option>
        <option value="muito raro">Very Rare</option>
      </select>
      <label htmlFor="trunfo-filter">
        <input
          checked={ trunfoFilter }
          name="trunfoFilter"
          type="checkbox"
          data-testid="trunfo-filter"
          id="trunfo-filter"
          onChange={ onInputChange }
        />
        Super Trunfo
      </label>
      { cards.filter((card) => {
        if (trunfoFilter) return card.cardTrunfo && !card.hasTrunfo;
        const getRareFilter = () => (rareFilter === 'todas'
          ? true : card.cardRare === rareFilter);
        const result = card.cardName.includes(nameFilter) && getRareFilter();
        return result;
      })
        .map((card, i) => (<Card key={ `card${i + 1}` } deckCard info={ card } />)) }
    </div>
  );
}

export default App;
