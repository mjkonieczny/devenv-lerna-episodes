type CardRank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'
type CardSuit = 'C' | 'D' | 'H' | 'S'

export type Card = {
  rank: CardRank,
  suit: CardSuit,
}

export const ranks: CardRank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const suits: CardSuit[] = ['C', 'D', 'H', 'S'];

const cardRankToNumber: {[_ in CardRank]: number} = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export const isHigherCard = (
  { rank: rank1 }: Card,
  { rank: rank2 }: Card,
): number => cardRankToNumber[rank1] - cardRankToNumber[rank2];

export const isSameCard = (
  { rank, suit }: Card,
  { rank: anotherRank, suit: anotherSuit }: Card,
): boolean => rank === anotherRank && suit === anotherSuit;
