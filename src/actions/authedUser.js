export const SET_AUTHED_USERS = "SET_AUTHED_USERS";

export function setAuthedUsers(id) {
	return {
		type: SET_AUTHED_USERS,
		id,
	};
}
