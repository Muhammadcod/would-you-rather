import {
	RECEIVE_QUESTIONS,
	ADD_ANSWER_TO_QUESTION,
	// ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_ANSWER_TO_QUESTION:
			const { authedUser, qid, answer } = action;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser]),
					},
				},
			};
		// case ADD_QUESTION:
		// 	const { question } = action;

		// 	let answer = {};
		// 	if (question.answer !== null) {
		// 		answer = {
		// 			[question.answer]: {
		// 				...state[question.answer],
		// 				replies: state[question.answer].replies.concat([
		// 					question.id,
		// 				]),
		// 			},
		// 		};
		// 	}

		// 	return {
		// 		...state,
		// 		[action.tweet.id]: action.tweet,
		// 		...answer,
		// 	};
		default:
			return state;
	}
}
