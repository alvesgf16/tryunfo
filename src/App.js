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
      <div className="flex w-full">
        <div className="py-24 px-40 w-1/2">
          <Form />
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Card info={ state } />
        </div>
      </div>
      <div className="flex">
        <Filters />
        <Deck />
      </div>
    </div>
  );
}

export default App;
