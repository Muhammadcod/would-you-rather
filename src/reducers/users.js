import { RECEIVE_USERS, ADD_ANSWER_TO_USER } from "../actions/users";

export default function user(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_ANSWER_TO_USER:
			const { authedUser, qid, answer } = action;
			let options = {};
			options = {
				...state[authedUser].answer,
				[qid]: answer,
			};
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					...options,
				},
			};
		default:
			return state;
	}
}
