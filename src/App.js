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
        <div className="pt-24 px-40 pb-12 w-1/2">
          <h1 className="mb-20">Add a new card</h1>
          <Form />
        </div>
        <div className="flex flex-col pt-24 px-20 w-1/2">
          <h1 className="self-start">Preview</h1>
          <div className="mt-20">
            <Card info={ state } />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="pt-12 px-40 pb-24 w-1/3">
          <h1>Deck</h1>
          <Filters />
        </div>
        <div className="flex justify-center items-center w-2/3">
          <Deck />
        </div>
      </div>
    </div>
  );
}

export default App;
