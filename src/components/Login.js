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
        // alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();

        // console.log("You have submitted:", this.state.selectedOption);
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
        console.log('ddd', redirectToRefer)
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        if (redirectToRefer === true) {
            return <Redirect to={from}/>;
        }
        console.log("++++", this.props.user);

        return (
            <>
                <div className="new-polls">
                    <div className="center questioner">
                        <h4 className='mb-0'>Welcome to the Would You Rather App</h4>
                        <p className='mb-0'>Please sign in to continue</p>
                    </div>
                    <div className='text-center'>
                        <img src='/react-redux.png' alt='react' className="redux--ava"/>
                    </div>
                    <p className='text-center'> Sign In</p>
                    <div className="new-polls-input">
                        <form onSubmit={this.handleSubmit}>
                            <select
                                className="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example"
                                value={selectedOption}
                                onChange={this.handleChange}
                            >
                                <option value='select' key={'select'}>Open this select menu</option>

                                {authUser.map((user) => (
                                    <option key={user.id} className='pl-5' value={user.id}>
                                        <img src={user.avatarURL}
                                             alt={`Avatar of ${user.name}`}/>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <button className="custom-btn custom-btn-two btn-success custom-btn-three" type="submit">
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
