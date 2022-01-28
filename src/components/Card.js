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
      <BootstrapCard id={ cardName } className="flex flex-col">
        <div className="flex justify-center items-center mt-4 mx-8 h-8">
          <BootstrapCard.Title
            data-testid="name-card"
            className="mb-0 align-baseline uppercase"
          >
            { cardName }
          </BootstrapCard.Title>
        </div>
        <div className="h-7">
          { cardTrunfo && !hasTrunfo && (
            <BootstrapCard.Text
              data-testid="trunfo-card"
              className="mx-10 text-end uppercase"
            >
              Super Trunfo
            </BootstrapCard.Text>) }
        </div>
        <div className="mx-10 w-80 h-80">
          <BootstrapCard.Img
            data-testid="image-card"
            className="object-cover w-80 h-80"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <BootstrapCard.Body
          className="flex flex-col justify-end mx-3 h-32"
        >
          <BootstrapCard.Text
            data-testid="rare-card"
            className="mb-0 uppercase"
          >
            { `[${cardRare}]` }
          </BootstrapCard.Text>
          <div className="w-80 h-12">
            <BootstrapCard.Text
              data-testid="description-card"
              className="text-xs"
            >
              { cardDescription }
            </BootstrapCard.Text>
          </div>
          <div className="flex justify-end">
            <BootstrapCard.Text
              data-testid="attr1-card"
              className="ml-4 mb-0"
            >
              { `ATTR1/${cardAttr1}` }
            </BootstrapCard.Text>
            <BootstrapCard.Text
              data-testid="attr2-card"
              className="ml-4 mb-0"
            >
              { `ATTR2/${cardAttr2}` }
            </BootstrapCard.Text>
            <BootstrapCard.Text
              data-testid="attr3-card"
              className="ml-4 mb-0"
            >
              { `ATTR3/${cardAttr3}` }
            </BootstrapCard.Text>
          </div>
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
