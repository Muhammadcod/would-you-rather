import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import NoMatch from './NoMatch';
import View from './View';
import Layout from './layout';

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
            <LoadingBar />
            <div className=" ">
              <div>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Layout>
                    <PrivateRoute path="/" exact component={Dashboard} />
                    <PrivateRoute path="/question/:id" exact component={View} />
                    <PrivateRoute path="/add" exact component={NewQuestion} />
                    <PrivateRoute
                      path="/leaderBoard"
                      exact
                      component={LeaderBoard}
                    />
                  </Layout>
                  <PrivateRoute path="" component={NoMatch} />
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
    authedUser
  };
}

export default connect(mapStateToProps)(App);
