export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString("en-US");
	return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser, parentQuestion) {
	const { id, timestamp, optionOne, optionTwo } = question;
	const { name, avatarURL } = author;

	return {
		name,
		id,
		timestamp,
		avatar: avatarURL,
		optionOne,
		optionTwo,
		hasAnswered:
			optionOne.votes.includes(authedUser) ||
			optionTwo.votes.includes(authedUser),
		//             function percentage(num, per)
		// {
		//   return (num)*per;
		// }

		// console.log(percentage((2/3), 100));
		parent: !parentQuestion
			? null
			: {
					author: parentQuestion.question,
					id: parentQuestion.id,
			  },
	};
}
