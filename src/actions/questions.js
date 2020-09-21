import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}
export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		// dispatch(showLoading());

		return saveQuestion({
			optionOne,
			optionTwo,
			author: authedUser,
		}).then((question) => dispatch(addQuestion(question)));
		// .then(() => dispatch(hideLoading()));
	};
}

function addAnswerToQuestion(authedUser, qid, answer) {
	return {
		type: ADD_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer,
	};
}

export function handleAddAnswerToQuestion(question, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		const qid = question.id;
		return saveQuestionAnswer({
			authedUser,
			qid,
			answer,
		})
			.then(() => dispatch(addAnswerToUser(authedUser, qid, answer)))
			.then(() => dispatch(addAnswerToQuestion(authedUser, qid, answer)));
	};
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}
