import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { handleAddAnswerToQuestion } from "../actions/questions";

class QuestionPage extends Component {
	// const { optionOne } = this.props;
	state = {
		selectedOption: this.props.question.optionOne.text,
	};

	handleOptionChange = (e) => {
		const selectedOption = e.target.value;

		this.setState(() => ({
			selectedOption,
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("You have submitted:", this.state.selectedOption);
		const { selectedOption } = this.state;
		const { dispatch, id } = this.props;

		dispatch(handleAddAnswerToQuestion(id, selectedOption));
		// dispatch(handleAddAnswerToUser(id, selectedOption));

		this.setState(() => ({
			selectedOption: this.props.question.optionOne.text,
		}));
	};

	render() {
		// const { id } = this.props;
		console.log("selected", this.state.selectedOption);
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
								<form onSubmit={this.handleSubmit}>
									<div className="form-check">
										<label>
											<input
												type="radio"
												name="option1"
												value={optionOne.text}
												onChange={
													this.handleOptionChange
												}
												checked={
													this.state
														.selectedOption ===
													optionOne.text
												}
												className="form-check-input"
											/>
											{optionOne.text}
										</label>
									</div>
									<p>or</p>
									<div className="form-check">
										<label>
											<input
												type="radio"
												name="option2"
												value={optionTwo.text}
												onChange={
													this.handleOptionChange
												}
												checked={
													this.state
														.selectedOption ===
													optionTwo.text
												}
												className="form-check-input"
											/>
											{optionTwo.text}
										</label>
									</div>

									<div className="form-group">
										<button
											className="btn btn-primary mt-2"
											type="submit"
										>
											Submit
										</button>
									</div>
								</form>

								{/* <button type="submit" className="btn bod">
									submit
								</button> */}
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
