import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
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

Card.propTypes = {
  card: PropTypes.shape({
    rank: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
