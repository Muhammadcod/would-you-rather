import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./Tabs";
import Question from "./Question";

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { unanswered, answered } = this.props;
		return (
			<>
				<Tabs>
					<div label="Unanswered">
						<ul className="dashboard-list">
							{unanswered.map((question) => (
								<li key={question.id}>
									<Question id={question.id} />
								</li>
							))}
						</ul>
					</div>
					<div label="answered">
						{answered.map((question) => (
							<li key={question.id}>
								<Question id={question.id} />
							</li>
						))}
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

	return {
		answered,
		unanswered,
	};
}
export default connect(mapStateToProps)(Dashboard);
