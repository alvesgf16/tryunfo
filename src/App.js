import React, { useContext } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import Deck from './components/Deck';
import TryunfoContext from './context/TryunfoContext';

function App() {
  const { state } = useContext(TryunfoContext);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Form />
        <Card info={ state } />
      </div>
      <div className="flex">
        <Filters />
        <Deck />
      </div>
    </div>
  );
}

export default App;
