import React, {Component} from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NoMatch from "./NoMatch";
import PrivateRoute from "./PrivateRoute";
import LoadingBar from "react-redux-loading";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import View from "./View";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
//https://ui.dev/react-router-v4-protected-routes-authentication/
    render() {
        return (
            <div>
                <Router>
                    <>
                        <LoadingBar/>
                        <div className=" ">
                            <Nav/>
                            <div>
                                <Switch>
                                    <Route path="/login"
                                           component={Login}/>
                                    <PrivateRoute
                                        path="/"
                                        exact
                                        component={Dashboard}
                                    />
                                    <PrivateRoute
                                        path="/question/:id"
                                        exact
                                        component={View}
                                    />
                                    <PrivateRoute
                                        path="/add"
                                        exact
                                        component={NewQuestion}
                                    />
                                    <PrivateRoute
                                        path="/leaderBoard"
                                        exact
                                        component={LeaderBoard}
                                    />
                                    <PrivateRoute path='' component={NoMatch}/>
                                </Switch>
                            </div>
                        </div>
                    </>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(authedUser) {
    return {

        authedUser,
    };
}

export default connect(mapStateToProps)(App);
