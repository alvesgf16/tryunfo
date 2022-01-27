import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import Deck from './components/Deck';

function App() {
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
