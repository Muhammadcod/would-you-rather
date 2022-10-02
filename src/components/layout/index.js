import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Logout from '../Logout';

const links = [
  { to: '/', text: 'Dashboard', icon: 'bx-home' },
  { to: '/add', text: 'New Questions', icon: 'bxs-plus-square' },
  { to: '/LeaderBoard', text: 'LeaderBoard', icon: 'bx-trophy' }
];

const Layout = ({ ...props }) => {
  const { children } = props;
  console.log(props, '..');
  const [expansionState, setExpansionState] = useState(
    new Array(links?.length + 2).fill(false)
  );

  const handleExpansion = (position) => {
    const updatedState = expansionState.map((item, index) =>
      index === position ? !item : item
    );
    setExpansionState(updatedState);
  };

  return (
    <div className="grid">
      <aside className="sidebar">
        <nav className="sidebar__nav">
          {links.map((link, idx) => (
            <div className="d-flex align-items-center mb-3">
              <NavLink
                to={link.to}
                onMouseEnter={() => handleExpansion(idx)}
                onMouseLeave={() => handleExpansion(idx)}
                className="nav-link d-flex justify-content-center align-items-center me-4"
              >
                <i className={`bx ${link?.icon}`}></i>
              </NavLink>
              <span
                className={classNames(
                  'd-flex justify-content-center align-items-center',
                  {
                    'nav-link-text': true,
                    'nav-link-display': !expansionState[idx],
                    'ml-1': !expansionState[idx]
                  }
                )}
              >
                {link.text}
              </span>
            </div>
          ))}
        </nav>
        <Logout status={expansionState[5]} />
      </aside>
      <main className="border main">{children}</main>
    </div>
  );
};

function mapStateToProps(authedUser) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Layout);
