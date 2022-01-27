import React, { useContext } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import Deck from './components/Deck';
import TryunfoContext from './context/TryunfoContext';

function App() {
  const { state } = useContext(TryunfoContext);
  return (
    <div>
      <h1>Tryunfo</h1>
      <Form />
      <Card info={ state } />
      <Filters />
      <Deck />
    </div>
  );
}

export default App;
