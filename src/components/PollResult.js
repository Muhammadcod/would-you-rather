import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, percentage } from "../utils/helpers";

class PollResult extends Component {
	render() {
		const { question } = this.props;
		const {
			name,
			avatar,
			per,
			totalVotes,
			mutualVote,
			mutualQuestion,
			unmutualQuestion,
		} = question;
		const unmutualVote = totalVotes - mutualVote; // No of users that voted for other option

		const mutualPerc = percentage(mutualVote, totalVotes, per);
		// percentage of users that voted for the same option as the authed user

		const unmutualPerc = percentage(unmutualVote, totalVotes, per);
		// percentage of users that voted for the other option as the authed user

		console.log("total", totalVotes, mutualVote, unmutualVote);
		console.log("text", question.optionOne.text);
		return (
			<div className="polls">
				<h5 className="questioner"> Asked by {name}</h5>
				<div className="poll">
					<img src={avatar} alt="" className="avatar" />
					<div className="poll-info border">
						<div className="mb-2 result">Results:</div>
						<div className="option-one border">
							<p>Would you rather {mutualQuestion}</p>
							<div className="progress">
								<div
									className="progress-bar"
									role="progressbar"
									style={{
										width: `${mutualPerc}%`,
									}}
									aria-valuenow={mutualPerc}
									aria-valuemin="0"
									aria-valuemax="100"
								>
									{mutualPerc.toFixed(1)}%
								</div>
							</div>

							<p className="text-center">
								{mutualVote} of {totalVotes}
							</p>
						</div>
						<div className="option-two border">
							<p>Would you rather {unmutualQuestion}</p>
							<div className="progress">
								<div
									className="progress-bar"
									role="progressbar"
									style={{
										width: `${unmutualPerc}%`,
									}}
									aria-valuenow={unmutualPerc}
									aria-valuemin="0"
									aria-valuemax="100"
								>
									{unmutualPerc.toFixed(1)}%
								</div>
							</div>
							<p className="text-center">
								{unmutualVote} of {totalVotes}
							</p>
						</div>
					</div>
				</div>
			</div>
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
	};
}

export default connect(mapStateToProps)(PollResult);
