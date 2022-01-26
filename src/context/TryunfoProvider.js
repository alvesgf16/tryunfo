import PropTypes from 'prop-types';
import React from 'react';
import TryunfoContext from './TryunfoContext';

function TryunfoProvider({ children }) {
  const contextValue = { };

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
