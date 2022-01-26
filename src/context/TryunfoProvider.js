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

  function enableSaveButton() {
    setState((prevState) => {
      const { cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = prevState;
      const cardAttrsStrs = [cardAttr1, cardAttr2, cardAttr3];
      const cardAttrs = cardAttrsStrs.map((cardAttr) => parseInt(cardAttr, 10));
      const attrMax = 90;
      const totalMax = 210;
      return ({ ...prevState,
        isSaveButtonDisabled: !(cardName && cardDescription && cardImage
      && cardRare && cardAttrs.reduce((acc, cur) => acc + cur) <= totalMax
      && cardAttrs.every((cardAttr) => cardAttr >= 0 && cardAttr <= attrMax)) });
    });
  }

  function onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState({ ...state, [name]: value });
    enableSaveButton();
  }

  function deleteCard({ target }) {
    const selectedCardName = target.parentElement.id;
    const { cards } = state;
    const selectedCard = cards
      .find(({ cardName }) => cardName === selectedCardName);
    const isTrunfo = selectedCard.cardTrunfo;

    setState((prevState) => (isTrunfo ? ({ ...prevState,
      cards: prevState.cards.filter(({ cardName }) => cardName !== selectedCardName),
      cardTrunfo: !isTrunfo,
      hasTrunfo: !isTrunfo,
    }) : ({
      cards: prevState.cards.filter(({ cardName }) => cardName !== selectedCardName),
    })
    ));
  }

  function onSaveButtonClick(event) {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = state;

    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deleteCard,
    };

    setState((prevState) => ({ ...prevState,
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, cardInfo],
    }));
  }

  const contextValue = { state, onInputChange, onSaveButtonClick };

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
