import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
	render() {
		const { question } = this.props;
		// console.log("....", question);

		// console.log("....", id, authedUser, question);

		const { name, avatar, optionOne, id, hasAnswered } = question;
		console.log("====", hasAnswered);

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
							<div className="options">{optionOne.text} </div>
							<div className="or">or</div>

							{hasAnswered === true ? (
								<Link to={`${id}/result`}>
									<button
										type="submit"
										className="btn bod"
										style={{ color: `red` }}
									>
										View Poll
									</button>
								</Link>
							) : (
								<Link to={`/question/${id}`}>
									<button type="submit" className="btn">
										View Poll
									</button>
								</Link>
							)}
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
