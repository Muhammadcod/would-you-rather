import React, {Component} from "react";
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import {Redirect, withRouter} from "react-router-dom";


class Login extends Component {
    state = {
        selectedOption: "select",
        redirectToRefer: false
    };
    handleChange = (event) => {
        console.log("...", event.target.value);
        this.setState({selectedOption: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {dispatch} = this.props;
        const {selectedOption} = this.state;
        console.log('idd', selectedOption)


        if (selectedOption !== "" && 'select') {
            dispatch(setAuthedUser(selectedOption));
            this.setState(() => ({
                selectedOption: 'select',
                redirectToRefer: true,
            }));
        }


    };

    render() {
        const {authUser} = this.props;
        const {selectedOption, redirectToRefer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        if (redirectToRefer === true) {
            return <Redirect to={from}/>;
        }

        return (
            <>
                <div className="new-polls">
                    <div className="center questioner">
                        <h4 className='mb-0'>Welcome to The Would You Rather App</h4>
                        <p className='mb-0'>Please sign in to continue</p>
                    </div>
                    <div className='text-center'>
                        <img src='/react-redux.png' alt='react' className="redux--ava"/>
                    </div>
                    <h4 className='text-center text-success '> Sign In</h4>
                    <div className="new-polls-input">
                        <form onSubmit={this.handleSubmit}>
                            <select
                                className="form-select form-select-lg mb-3 select "
                                aria-label=".form-select-lg example"
                                value={selectedOption}
                                onChange={this.handleChange}
                            >
                                <option value='select' key={'select'}>Open this select menu</option>

                                {authUser.map((user) => (
                                    <option key={user.id} className='' value={user.id}>
                                       {/* <img src={user.avatarURL}
                                             alt={`Avatar of ${user.name}`}/>*/}
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <button className="custom-btn custom-btn-two btn-su/ccess custom-btn-three"
                                    disabled={selectedOption === "select"}
                                    type="submit">
                                Sign In
                            </button>
                        </form>
                    </div>

                </div>
            </>
        );
    }
}

function mapStateToProps({users}) {
    const authUser = Object.values(users)

    return {
        authUser,
    };
}

export default withRouter(connect(mapStateToProps)(Login));
