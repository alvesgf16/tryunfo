import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TryunfoContext from './TryunfoContext';

function TryunfoProvider({ children }) {
  const [state, setState] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    cards: [],
  });

  const contextValue = { state, setState };

  return (
    <TryunfoContext.Provider value={ contextValue }>
      { children }
    </TryunfoContext.Provider>
  );
}

TryunfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TryunfoProvider;
