import React from 'react';
import Avatar from './Avatar';

const TopThree = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-baseline">
      {props.data.map((da, index) => (
        <Avatar
          key={index}
          index={index}
          size={index === 1 ? 90 : 70}
          className={index === 1 ? '' : ''}
          {...da}
        />
      ))}
    </div>
  );
};

TopThree.propTypes = {};

export default TopThree;
