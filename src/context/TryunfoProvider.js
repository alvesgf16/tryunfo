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
      const { cardName: name,
        cardDescription: description,
        cardImage: image,
        cardRare: rare,
        cardAttr1: attr1,
        cardAttr2: attr2,
        cardAttr3: attr3 } = prevState;

      const attrsStrs = [attr1, attr2, attr3];
      const attrs = attrsStrs.map((attr) => parseInt(attr, 10));
      const attrMax = 90;
      const totalMax = 210;

      return ({ ...prevState,
        isSaveButtonDisabled: !(name && description && image && rare
          && attrs.reduce((acc, cur) => acc + cur) <= totalMax
          && attrs.every((attr) => attr >= 0 && attr <= attrMax)) });
    });
  }

  function onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState({ ...state, [name]: value });
    enableSaveButton();
  }

  function deleteCard({ target }) {
    const { cards } = state;
    const { id: name } = target.parentElement;
    const selectedCard = cards.find(({ cardName }) => cardName === name);
    const { cardTrunfo: isTrunfo } = selectedCard;

    setState((prevState) => (
      isTrunfo ? ({ ...prevState,
        cards: prevState.cards.filter(({ cardName }) => cardName !== name),
        cardTrunfo: !isTrunfo,
        hasTrunfo: !isTrunfo,
      }) : ({ cards: prevState.cards.filter(({ cardName }) => cardName !== name) })
    ));
  }

  function onSaveButtonClick(event) {
    event.preventDefault();

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo } = state;

    const cardInfo = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deleteCard };

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
      cards: [...prevState.cards, cardInfo] }));
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
