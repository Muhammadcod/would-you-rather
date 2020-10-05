import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";

class LeaderBoard extends Component {
	render() {
		const { boardDetails } = this.props;

		console.log("====", boardDetails);

		return (
			<>
				{boardDetails.map((user, index) => (
					<div key={user.id} className="board">
						<img
							src={user.avatar}
							alt={`Avatar of ${user.name}`}
							className="avatar"
						/>
						<div className="border">
							<span>{user.name}</span>
							<p className="options">{user.userQuestions}</p>
							<p className="or">{user.userAnswers}</p>
						</div>
						<div className="border">{user.score}</div>
					</div>
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
	const userIds = Object.keys(users);

	const boardDetails = Object.values(users)
		.map((user) => ({
			score:
				Object.values(users[user.id].answers).length +
				users[user.id].questions.length,
			userQuestions: users[user.id].questions.length,
			userAnswers: Object.values(users[user.id].answers).length,
			id: user.id,
			name: user.name,
			avatar: user.avatarURL,
		}))
		.sort((a, b) => b.score - a.score);

	console.log("+++", boardDetails);

	return {
		boardDetails,
	};
}
export default connect(mapStateToProps)(LeaderBoard);
