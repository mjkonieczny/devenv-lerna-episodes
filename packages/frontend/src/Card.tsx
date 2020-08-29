import React, { FunctionComponent } from 'react';
import { Card as CardType } from 'core';

const Card: FunctionComponent<{ card: CardType }> = ({
  card: {
    rank,
    suit,
  },
}) => (
  <img
    style={{ width: '70px' }}
    alt=""
    src={`../icons/${rank + suit}.png`}
  />
);

export default Card;
