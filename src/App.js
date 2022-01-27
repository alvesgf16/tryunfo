import React, { useContext } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import TryunfoContext from './context/TryunfoContext';
import Filters from './components/Filters';

function App() {
  const { state } = useContext(TryunfoContext);

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
      <Filters />
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
