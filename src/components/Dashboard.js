import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UnAnswered from "./UnAnswered";
import Answered from "./Answered";
import Nav from "./Nav";

class Dashboard extends Component {
	render() {
		return (
			<Router>
				<>
					<div className="container">
						<div className="polls">
							<Nav />
							{this.props.loading === true ? null : (
								<div>
									<Route
										path="/"
										exact
										component={UnAnswered}
									/>

									<Route
										path="/answered"
										component={Answered}
									/>
								</div>
							)}
						</div>
					</div>
				</>
			</Router>
		);
	}
}

export default Dashboard;
