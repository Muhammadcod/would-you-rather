import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Avatar from './Avatar';

class Logout extends Component {
  handleLogout = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
    this.props.history.push(`/login`);
  };

  render() {
    const { authedUser, user, status } = this.props;

    return authedUser === null ? (
      <span className="message">You are not logged in</span>
    ) : (
      <nav className="sidebar__nav">
        <div className="d-flex align-items-center mt-auto">
          <div
            // onMouseEnter={() => handleExpansion(5)}
            // onMouseLeave={() => handleExpansion(5)}
            onClick={this.handleLogout}
            className="nav-link d-flex justify-content-center align-items-center me-4"
          >
            <i className="bx bx-log-out"></i>
          </div>
          <span
            className={classNames(
              'd-flex justify-content-center align-items-center',
              {
                'nav-link-text': true,
                'nav-link-display': !status
                // 'ml-1': expansionState[5]
              }
            )}
          >
            Logout
          </span>
        </div>
        <Avatar avatar={user.avatarURL} alt="user" className="mt-3" size={45} />
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user =
    Object.values(users).find((user) => user.id === authedUser) || {};

  return {
    authedUser,
    user
  };
}

export default withRouter(connect(mapStateToProps)(Logout));
