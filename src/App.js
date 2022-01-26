import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

function App() {
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
    setState(({
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    }) => {
      const cardAttrsStrs = [cardAttr1, cardAttr2, cardAttr3];
      const cardAttrs = cardAttrsStrs.map((cardAttr) => parseInt(cardAttr, 10));
      const attrMax = 90;
      const totalMax = 210;
      return ({ isSaveButtonDisabled: !(cardName && cardDescription && cardImage
      && cardRare && cardAttrs.reduce((acc, cur) => acc + cur) <= totalMax
      && cardAttrs.every((cardAttr) => cardAttr >= 0 && cardAttr <= attrMax)) });
    });
  }

  function onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState({ [name]: value });
    enableSaveButton();
  }

  function deleteCard({ target }) {
    const selectedCardName = target.parentElement.id;
    const { cards } = state;
    const selectedCard = cards
      .find(({ cardName }) => cardName === selectedCardName);
    const isTrunfo = selectedCard.cardTrunfo;

    setState((prevState) => (isTrunfo ? ({
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

    setState((prevState) => ({
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
    isSaveButtonDisabled,
    nameFilter,
    rareFilter,
    trunfoFilter,
    cards,
  } = state;

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        hasTrunfo={ hasTrunfo }
        isSaveButtonDisabled={ isSaveButtonDisabled }
        onInputChange={ onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
      />
      <Card
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        hasTrunfo={ hasTrunfo }
      />
      <input
        type="text"
        data-testid="name-filter"
        name="nameFilter"
        value={ nameFilter }
        onChange={ onInputChange }
        disabled={ trunfoFilter }
      />
      <select
        data-testid="rare-filter"
        name="rareFilter"
        value={ rareFilter }
        onChange={ onInputChange }
        disabled={ trunfoFilter }
      >
        <option value="todas">Todas</option>
        <option value="normal">Normal</option>
        <option value="raro">Rare</option>
        <option value="muito raro">Very Rare</option>
      </select>
      <label htmlFor="trunfo-filter">
        <input
          checked={ trunfoFilter }
          name="trunfoFilter"
          type="checkbox"
          data-testid="trunfo-filter"
          id="trunfo-filter"
          onChange={ onInputChange }
        />
        Super Trunfo
      </label>
      { cards.filter((card) => {
        if (trunfoFilter) return card.cardTrunfo && !card.hasTrunfo;
        const getRareFilter = () => (rareFilter === 'todas'
          ? true : card.cardRare === rareFilter);
        const result = card.cardName.includes(nameFilter) && getRareFilter();
        return result;
      })
        .map((card, index) => (<Card
          key={ `card${index + 1}` }
          deckCard
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          hasTrunfo={ card.hasTrunfo }
          deleteCard={ card.deleteCard }
        />)) }
    </div>
  );
}

export default App;
