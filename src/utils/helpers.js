export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString("en-US");
	return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function percentage(num, total, per) {
	return (num / total) * per;
}

// console.log(percentage(2 / 3, 100));

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
		totalVotes: optionOne.votes.length + optionTwo.votes.length,
		mutualVote: optionOne.votes.includes(authedUser)
			? optionOne.votes.length
			: optionTwo.votes.length,
		// percentage: ,
		per: 100,
		parent: !parentQuestion
			? null
			: {
					author: parentQuestion.question,
					id: parentQuestion.id,
			  },
	};
}
