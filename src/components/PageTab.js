import React from 'react';

const PageTab = (props) => {
  const { label, activeTab } = props;

  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  let className = 'tab-list-item';

  if (activeTab === label) {
    className += ' tab-list-active';
  }

  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
};

PageTab.propTypes = {};

export default PageTab;
