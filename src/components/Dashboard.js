import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./Tabs";
import Question from "./Question";

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { unanswered, answered } = this.props;
		console.log("ghtn", unanswered, answered);
		return (
			<>
				<Tabs>
					<div label="Unanswered Questions">
						<ul className="dashboard-list">
							{unanswered.map((question) => (
								<li key={question.id}>
									<Question id={question.id} />
								</li>
							))}
						</ul>
					</div>
					<div label="Answered Questions">
						<ul className="dashboard-list">
							{answered.map((question) => (
								<li key={question.id}>
									<Question id={question.id} />
								</li>
							))}
						</ul>
					</div>
				</Tabs>
			</>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	console.log("this ...", users[authedUser]);
	const answeredIds = Object.keys(users[authedUser].answers);
	const answered = Object.values(questions)
		.filter((question) => answeredIds.includes(question.id))
		.sort((a, b) => b.timestamp - a.timestamp);
	const unanswered = Object.values(questions)
		.filter((question) => !answeredIds.includes(question.id))
		.sort((a, b) => b.timestamp - a.timestamp);

	// console.log("this ...", unanswered);

	return {
		answered,
		unanswered,
	};
}
export default connect(mapStateToProps)(Dashboard);
