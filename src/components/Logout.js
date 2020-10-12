import React, {Component} from 'react';
import {setAuthedUser} from '../actions/authedUser'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Logout extends Component {
    state = {
        value: false,
    }
    handleLogout = (event) => {

        event.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(null));
        this.setState(() => ({

            isAuthenticated: true,
        }))
        this.props.history.push(`/login`)
    };


    render() {
        /*  const {isAuthenticated} = this.state;

          if (isAuthenticated === true) {
              return <p>bv</p>;
          }*/
        const {authedUser, user} = this.props

        return authedUser === null ? (
            <p className='border'>You are not logged in</p>
        ) : (
            <div className='d-flex'>
                <div className='mr-3'>
                    <p className='mb-0'
                       style={{padding: `5px 0`}}>{Object.values(user.filter((u) => u.id === authedUser)[0].name)}</p>
                    {/*<img src={user[authedUser].avatar} alt='user'/>*/}
                </div>

                <button className="btn btn-outline-success"
                        onClick={this.handleLogout}
                >
                    Sign out
                </button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {

    const user = Object.values(users)
        .map((user) => ({
            id: user.id,
            name: user.name,
            avatar: user.avatarURL
        }))


    console.log('!!!', user)
    return {
        authedUser,
        user,
    };
}

export default withRouter(connect(mapStateToProps)(Logout));