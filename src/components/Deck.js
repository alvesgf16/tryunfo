import React, { useContext } from 'react';
import TryunfoContext from '../context/TryunfoContext';
import Card from './Card';

export default function Deck() {
  const { state } = useContext(TryunfoContext);
  const { nameFilter, rareFilter, trunfoFilter, cards } = state;

  return (
    <div className="flex flex-wrap justify-center w-full">
      { cards.filter((card) => {
        const { cardTrunfo, hasTrunfo, cardRare, cardName } = card;

        if (trunfoFilter) return cardTrunfo && !hasTrunfo;

        const getRareFilter = () => (
          rareFilter === 'todas' ? true : cardRare === rareFilter
        );
        const result = cardName.includes(nameFilter) && getRareFilter();

        return result;
      })
        .map((card, i) => (<Card key={ `card${i + 1}` } deckCard info={ card } />)) }
    </div>
  );
}
