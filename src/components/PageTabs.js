import React, { useEffect, useState } from 'react';
import PageTab from './PageTab';
import TabDetail from './TabDetail';

const PageTabs = (props) => {
  const { defaultTab } = props;
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {props.tabs.map((tab) => {
          const { tabId, title } = tab;

          return (
            <PageTab
              activeTab={activeTab}
              key={tabId}
              label={title}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {props.tabs.map((tab) => {
          const { tabId, component } = tab;
          if (tabId !== activeTab) return undefined;
          return (
            <TabDetail
              key={tabId}
              tabId={tabId}
              component={component}
              {...props}
            />
          );
        })}
      </div>
    </div>
  );
};

PageTabs.propTypes = {};

export default PageTabs;
