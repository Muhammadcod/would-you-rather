import React, { Component } from "react";
import { connect } from "react-redux";
// import { handleAddTweet } from "../actions/tweets";
class NewQuestion extends Component {
	state = {
		optionOne: "",
		optionTwo: "",
	};
	handleChange = (e) => {
		const text = e.target.value;

		this.setState(() => ({
			text,
		}));
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const { text } = this.state;
		const { dispatch, id } = this.props;

		// todo: Add Tweet to Store

		// console.log("New Tweet: ", text);
		// dispatch(handleAddTweet(text, id));

		this.setState(() => ({
			text: "",
		}));
	};
	render() {
		const { optionOne, optionTwo } = this.state;

		{
			/* todo: Redirect to / if submitted */
		}

		return (
			<div>
				<h3 className="center">Compose new Tweet</h3>
				<form className="new-tweet" onSubmit={this.handleSubmit}>
					<ul>
						<li>
							{/* <label>Label 1</label> */}
							<input
								type="text"
								name="optionOne"
								value={optionOne}
								onChange={this.handleChange}
							/>
						</li>
						<span>OR</span>
						<li>
							{/* <label>Label 2</label> */}
							<input
								type="text"
								name="firstName"
								value={optionTwo}
								onChange={this.handleChange}
							/>
						</li>
					</ul>

					<button
						className="btn"
						type="submit"
						disabled={optionOne || optionTwo === ""}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewQuestion);
