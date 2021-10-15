import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.enableSaveButton = this.enableSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
    this.enableSaveButton();
  }

  onSaveButtonClick(event) {
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
    } = this.state;

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
      deleteCard: this.deleteCard,
    };

    this.setState((prevState) => ({
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

  enableSaveButton() {
    this.setState(({
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

  deleteCard({ target }) {
    const selectedCardName = target.parentElement.id;
    const { cards } = this.state;
    const selectedCard = cards
      .find(({ cardName }) => cardName === selectedCardName);
    const isTrunfo = selectedCard.cardTrunfo;

    this.setState((prevState) => (isTrunfo ? ({
      cards: prevState.cards.filter(({ cardName }) => cardName !== selectedCardName),
      cardTrunfo: !isTrunfo,
      hasTrunfo: !isTrunfo,
    }) : ({
      cards: prevState.cards.filter(({ cardName }) => cardName !== selectedCardName),
    })
    ));
  }

  render() {
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
      cards,
    } = this.state;

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
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
          onChange={ this.onInputChange }
        />
        { cards.filter((card) => card.cardName.includes(nameFilter))
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
}

export default App;
