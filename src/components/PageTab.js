import React from 'react';

const PageTab = (props) => {
  const { tabId, label, activeTab } = props;

  const onClick = () => {
    const { tabId, onClick } = props;
    onClick(tabId);
  };

  let className = 'tab-list-item';

  if (activeTab === tabId) {
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
