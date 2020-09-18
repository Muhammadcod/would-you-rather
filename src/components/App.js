import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
class App extends Component {
	render() {
		return (
			<div>
				APP:
				<Dashboard />
			</div>
		);
	}
}

export default connect()(App);
