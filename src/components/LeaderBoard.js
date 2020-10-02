import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";

class LeaderBoard extends Component {
	render() {
		const { userIds } = this.props;
		console.log("....", userIds);
		return (
			<>
				{userIds.map((id) => (
					<li key={id}>
						<Board id={id} />
					</li>
				))}
			</>
		);
	}
}

// function mapStateToProps({ tweets }) {
// 	return {
// 		tweetIds: Object.keys(tweets).sort(
// 			(a, b) => tweets[b].timestamp - tweets[a].timestamp
// 		),
// 	};
// }

function mapStateToProps({ authedUser, users, questions }) {
	// const userIds = Object.keys(users);
	// console.log("sss", users.answers);
	console.log("this ...", Object.keys(users));

	return {
		userIds: Object.keys(users).sort(
			(a, b) => users[b].answers - users[a].answers
		),
	};
}
export default connect(mapStateToProps)(LeaderBoard);
