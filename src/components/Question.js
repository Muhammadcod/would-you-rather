import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
	render() {
		const { question } = this.props;
		const { name, avatar, optionOne, id } = question;
		return (
			<div className="polls">
				<h5 className="questioner">{name} asks:</h5>
				<div className="poll">
					<img
						src={avatar}
						alt={`Avatar of ${name}`}
						className="avatar"
					/>
					<div className="poll-info">
						<div className="bod">
							<span>Would you rather</span>
							<div>{optionOne.text} </div>
							<div>or</div>

							<Link to={`/question/${id}`}>
								<button type="submit" className="btn bod">
									View Poll
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
	const question = questions[id];
	// console.log("....", question);
	// console.log("....", authedUser);

	return {
		authedUser,
		question: question
			? formatQuestion(question, users[question.author], authedUser)
			: null,
	};
}

export default withRouter(connect(mapStateToProps)(Question));
