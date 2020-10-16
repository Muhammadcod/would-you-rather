import React from 'react';
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({component: Component, authedUser, ...rest}) {

    return (
        <Route
            {...rest}
            render={function (props) {
                return authedUser !== null ? (
                    <Component {...props} />

                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                );
            }}
        />
    );
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);



