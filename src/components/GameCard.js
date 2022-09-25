import React from 'react';
import Question from './Question';

const GameCard = ({ data = [] }) => {
  return (
    <div className="row g-3">
      {data.map((question) => (
        <div className="col-md-6 col-xl-4" key={question.id}>
          <Question id={question.id} />
        </div>
      ))}
    </div>
  );
};

export default GameCard;
