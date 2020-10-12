import React from 'react';
import { connect } from "react-redux";

import {  Route, Redirect, withRouter } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
        return (
            <Route
                {...rest}
                render={function(props) {
                    return rest.myUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                }}
            />
        );
}
function mapStateToProps({ myUser }) {
        return {
            myUser
        };
}
export default withRouter(connect(mapStateToProps)(ProtectedRoute));



