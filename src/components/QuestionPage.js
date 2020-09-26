import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { handleAddAnswerToQuestion } from "../actions/questions";

class QuestionPage extends Component {
	//Radio Buttons in React.js
	//http://react.tips/radio-buttons-in-reactjs/
	state = {
		selectedOption: "",
	};

	handleOptionChange = (e) => {
		const selectedOption = e.target.value;

		this.setState(() => ({
			selectedOption,
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("You have submitted:", this.state.selectedOption.text);

		const { selectedOption } = this.state;
		const { dispatch, id, authedUser } = this.props;
		if (selectedOption !== "") {
			dispatch(handleAddAnswerToQuestion(authedUser, id, selectedOption));
		}

		this.setState(() => ({
			selectedOption: "",
		}));
	};

	i;
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
									<div className="form-check border">
										<label className="border">
											<input
												type="radio"
												// name="radioGroup"
												value="optionOne"
												onChange={
													this.handleOptionChange
												}
												checked={
													this.state
														.selectedOption ===
													"optionOne"
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
												// name="radioGroup"
												value="optionTwo"
												onChange={
													this.handleOptionChange
												}
												checked={
													this.state
														.selectedOption ===
													"optionTwo"
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
	};
}

export default connect(mapStateToProps)(QuestionPage);
