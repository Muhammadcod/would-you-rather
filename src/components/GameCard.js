import React from 'react';
import Question from './Question';

const GameCard = ({ id }) => {
  return (
    <div className="col-md-4">
      <Question id={id} />
    </div>
  );
};

export default GameCard;
