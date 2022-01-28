import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard } from 'react-bootstrap';

export default function Card({ deckCard, info }) {
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
    deleteCard,
  } = info;

  return (
    <div>
      <BootstrapCard id={ cardName }>
        <BootstrapCard.Title data-testid="name-card">{ cardName }</BootstrapCard.Title>
        <BootstrapCard.Text data-testid="rare-card">{ cardRare }</BootstrapCard.Text>
        <BootstrapCard.Img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <BootstrapCard.Body>
          { cardTrunfo && !hasTrunfo && (
            <BootstrapCard.Text data-testid="trunfo-card">
              Super Trunfo
            </BootstrapCard.Text>) }
          <BootstrapCard.Text data-testid="description-card">
            { cardDescription }
          </BootstrapCard.Text>
          <BootstrapCard.Text data-testid="attr1-card">{ cardAttr1 }</BootstrapCard.Text>
          <BootstrapCard.Text data-testid="attr2-card">{ cardAttr2 }</BootstrapCard.Text>
          <BootstrapCard.Text data-testid="attr3-card">{ cardAttr3 }</BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
      { deckCard && (
        <button
          type="button"
          data-testid="delete-button"
          onClick={ deleteCard }
        >
          Excluir
        </button>
      ) }
    </div>
  );
}

Card.propTypes = {
  deckCard: PropTypes.bool,
  info: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    deleteCard: PropTypes.func,
  }),
};

Card.defaultProps = {
  deckCard: false,
  info: { deleteCard: () => {} },
};
