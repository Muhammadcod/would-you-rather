import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionPage from "./QuestionPage";
import Dashboard from "./Dashboard";
import PollResult from "./PollResult";
import NewQuestion from "./NewQuestion";
// // import LeaderBoard from "./LeaderBoard";
import LoadingBar from "react-redux-loading";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<div>
				<Router>
					<>
						<LoadingBar />
						<div className="container-fluid ">
							<Nav />
							{this.props.loading === true ? null : (
								<div>
									<Route
										path="/"
										exact
										component={Dashboard}
									/>
									<Route
										path="/question/:id"
										component={QuestionPage}
									/>
									<Route
										path="/:id/result"
										component={PollResult}
									/>
									<Route
										path="/new"
										component={NewQuestion}
									/>
									{/* <Route
										path="/leader"
										component={LeaderBoard}
									/> */}
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
	};
}

export default connect(mapStateToProps)(App);
