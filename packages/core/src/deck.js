import shuffle from 'lodash/shuffle';
import { ranks, suits } from './card';

export const createDeck = () => ranks.reduce((cards, rank) => [
  ...cards,
  ...suits.map((suit) => ({ suit, rank })),
], []);

export const createShuffledDeck = () => shuffle(createDeck());
