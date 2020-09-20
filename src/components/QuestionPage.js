import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class QuestionPage extends Component {
	render() {
		// const { id } = this.props;
		const { question } = this.props;
		const { name, avatar, optionOne, optionTwo } = question;
		return (
			<>
				<div className="polls">
					<h5 className="questioner"> {name} asks:</h5>
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
								<div>{optionTwo.text} </div>

								<button type="submit" className="btn bod">
									View Poll
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }, props) {
	const { id } = props.match.params;
	const question = questions[id];
	console.log("+++", question);
	return {
		id,
		authedUser,
		question: question
			? formatQuestion(question, users[question.author], authedUser)
			: null,
		// replies: !questions[id]
		// 	? []
		// 	: questions[id].replies.sort(
		// 			(a, b) => questions[b].timestamp - questions[a].timestamp
		// 	  ),
	};
}

export default connect(mapStateToProps)(QuestionPage);
