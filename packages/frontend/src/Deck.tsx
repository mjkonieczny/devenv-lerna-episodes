import React, { useState, useEffect, FunctionComponent } from 'react';
import { isHigherCard, isSameCard, Card as CardType } from 'core';
import Card from './Card';

const Deck: FunctionComponent = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState<CardType | undefined>();

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => setCards(res));
  }, []);

  const getBackground = (card: CardType) => {
    if (!selectedCard) return 'transparent';

    if (isSameCard(card, selectedCard)) return 'yellow';

    const metric = isHigherCard(card, selectedCard);
    if (metric > 0) {
      return 'red';
    } if (metric < 0) {
      return 'green';
    }
    return 'blue';
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        cards.map((card) => (
          <button
            type="button"
            onClick={() => setSelectedCard(card)}
            style={{
              background: getBackground(card),
              margin: '15px',
              border: 0,
              borderRadius: '5px',
              padding: '10px',
            }}
          >
            <Card card={card} />
          </button>
        ))
      }
    </div>
  );
};

export default Deck;
