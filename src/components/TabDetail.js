import React from 'react';

const TabDetail = ({ component: Component, tabId, ...props }) => {
  return (
    <>
      <Component {...props} />
    </>
  );
};

export default TabDetail;
