import React, { Component } from "react";
import { connect } from "react-redux";
import { formatUser } from "../utils/helpers";

class Board extends Component {
	render() {
		const { answered, created, user } = this.props;
		// console.log("pppp", user.answers.id.length);
		const { name, avatar } = user;

		return (
			<>
				<div className="board">
					<img
						src={avatar}
						alt={`Avatar of ${name}`}
						className="avatar"
					/>
					<div className="border">
						<span>{name}</span>
						<p className="options"></p>
						<p className="or">or</p>
					</div>
					<div className="border">{answered + created}</div>
				</div>
			</>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
	const user = users[id];
	const answered = Object.keys(user.answers).length;
	const created = user.questions.length;
	const author = user.name;
	console.log("++++", answered);
	return {
		answered,
		created,
		user: user ? formatUser(user) : null,
	};
}

export default connect(mapStateToProps)(Board);
