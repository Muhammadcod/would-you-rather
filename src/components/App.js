import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionPage from "./QuestionPage";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
// import LoadingBar from "react-redux-loading";

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
						{/* <LoadingBar /> */}
						<div className="container">
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
										path="/new"
										component={NewQuestion}
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
	};
}

export default connect(mapStateToProps)(App);