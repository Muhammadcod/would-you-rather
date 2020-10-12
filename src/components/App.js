import React, {Component} from "react";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import QuestionPage from "./QuestionPage";
import Dashboard from "./Dashboard";
import PollResult from "./PollResult";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NoMatch from "./NoMatch";
import PrivateRoute from "./PrivateRoute";
import LoadingBar from "react-redux-loading";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {authedUser} = this.props
        return (
            <div>
                <Router>
                    <>
                        <LoadingBar/>
                        <div className="container-fluid ">
                            <Nav/>
                            <div>
                                <Switch>
                                    <Route path="/login"
                                           component={Login}/>
                                    <PrivateRoute
                                        path="/"
                                        exact
                                        component={Dashboard}
                                        authedUser={authedUser}
                                    />
                                    <PrivateRoute
                                        path="/question/:id"
                                        exact
                                        component={QuestionPage}
                                        authedUser={authedUser}
                                    />
                                    <PrivateRoute
                                        path="/:id/result"
                                        exact
                                        component={PollResult}
                                        authedUser={authedUser}
                                    />
                                    <PrivateRoute
                                        path="/new"
                                        exact
                                        component={NewQuestion}
                                        authedUser={authedUser}
                                    />
                                    <PrivateRoute
                                        path="/leaderBoard"
                                        exact
                                        component={LeaderBoard}
                                        authedUser={authedUser}
                                    />
                                    <PrivateRoute path='/404' component={NoMatch}/>
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
