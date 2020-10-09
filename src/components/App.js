import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionPage from "./QuestionPage";
import Dashboard from "./Dashboard";
import PollResult from "./PollResult";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import LoadingBar from "react-redux-loading";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			authedUser === null ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		console.log("aaa", this.props.authedUser);
		return (
			<div>
				<Router>
					<>
						<LoadingBar />
						<div className="container-fluid ">
							<Nav />
							{this.props.loading === true ? null : (
								<div>
									<Route path="/login" component={Login} />

									<PrivateRoute
										path="/"
										// exact
										component={Dashboard}
									/>
									<PrivateRoute
										path="/question/:id"
										component={QuestionPage}
									/>
									<PrivateRoute
										path="/:id/result"
										component={PollResult}
									/>
									<PrivateRoute
										path="/new"
										component={NewQuestion}
									/>
									<PrivateRoute
										path="/leaderBoard"
										component={LeaderBoard}
									/>
								</div>
							)}
						</div>
					</>
				</Router>
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null,
		authedUser,
	};
}

export default connect(mapStateToProps)(App);
