import shuffle from 'lodash/shuffle';
import { Card, ranks, suits } from './card';

export const createDeck = (): Card[] => ranks
  .reduce((cards, rank) => [...cards, ...suits.map((suit) => ({ suit, rank }))], [] as Card[]);

export const createShuffledDeck = (): Card[] => shuffle(createDeck());
