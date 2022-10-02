import React from 'react';

const Avatar = (props) => {
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <img
        src={props.avatar}
        alt={`Avatar of ${props.name}`}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
          borderRadius: `100%`
        }}
        className={`mx-5 ${props.className && props.className}`}
      />
      {props.name && (
        <>
          <h6 className="mt-3">{props.name}</h6>
          <h6 className="mt-1">
            {props.index === 0 ? '2nd' : props.index === 1 ? '1st' : '3rd'}
          </h6>
        </>
      )}
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;
