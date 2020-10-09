import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
	state = {
		selectedOption: "",
	};
	handleChange = (event) => {
		console.log("...", event.target.value);
		this.setState({ selectedOption: event.target.value });
	};

	handleSubmit = (event) => {
		// alert("Your favorite flavor is: " + this.state.value);
		event.preventDefault();

		// console.log("You have submitted:", this.state.selectedOption);
		const { dispatch } = this.props;

		const { selectedOption } = this.state;

		if (selectedOption !== "") {
			dispatch(setAuthedUser(selectedOption));
		}

		// this.setState(() => ({
		// 	selectedOption: "",
		// }));

		// this.props.history.push(`/${id}/result`);
	};

	render() {
		const { user } = this.props;
		const { selectedOption } = this.state;
		console.log("state ==", selectedOption);

		return (
			<>
				<div className="new-polls">
					Login
					<form onSubmit={this.handleSubmit}>
						<select
							className="form-select form-select-lg mb-3"
							aria-label=".form-select-lg example"
							value={selectedOption}
							onChange={this.handleChange}
						>
							{user.map((user, index) => (
								<option key={user.key} value={user.value}>
									{user.label}
								</option>
							))}
						</select>
						<button className="btn" type="submit">
							Sign In
						</button>
					</form>
				</div>
			</>
		);
	}
}

function mapStateToProps({ users }) {
	// console.log("++++", Object.values(users));
	const user = Object.values(users).map((user) => ({
		key: user.id,
		value: user.id,
		label: user.name,
		avatar: user.avatarURL,
	}));

	return {
		user,
	};
}

export default connect(mapStateToProps)(Login);
