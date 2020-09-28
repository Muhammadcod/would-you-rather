import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, percentage } from "../utils/helpers";

class PollResult extends Component {
	render() {
		const { question } = this.props;
		const {
			name,
			avatar,
			optionOne,
			optionTwo,
			per,
			totalVotes,
			mutualVote,
		} = question;
		const unmutualVote = totalVotes - mutualVote;

		console.log("total", typeof totalVotes, typeof mutualVote, typeof per);
		return (
			<div className="polls">
				<h5 className="questioner"> Asked by {name}</h5>
				<div className="poll">
					<img src={avatar} alt="" className="avatar" />
					<div className="poll-info">
						<div className="option-one border">
							<p>Would you rather {optionOne.text}</p>
							<span>
								{percentage(mutualVote, totalVotes, per)}%
							</span>
							<p>
								{mutualVote} of {totalVotes}
							</p>
						</div>
						<div className="option-two border">
							<p>Would you rather {optionTwo.text}</p>
							<span>
								{" "}
								{percentage(unmutualVote, totalVotes, per)}%
							</span>
							<p>
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
