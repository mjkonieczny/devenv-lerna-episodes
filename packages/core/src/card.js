export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const suits = ['C', 'D', 'H', 'S'];

const cardRankToNumber = {
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
  { rank },
  { rank: anotherRank },
) => cardRankToNumber[rank] - cardRankToNumber[anotherRank];

export const isSameCard = (
  { rank, suit },
  { rank: anotherRank, suit: anotherSuit },
) => rank === anotherRank && suit === anotherSuit;
