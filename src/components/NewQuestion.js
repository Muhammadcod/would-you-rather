import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
class NewQuestion extends Component {
	// const optionOneText = {}
	state = {
		optionOne: "",
		optionTwo: "",
	};
	handleChange = (e) => {
		let nam = e.target.name;
		let val = e.target.value;

		this.setState({
			[nam]: val,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const { optionOne, optionTwo } = this.state;
		const { dispatch, id } = this.props;

		console.log("New question: ", typeof optionOne, typeof optionTwo);
		dispatch(handleAddQuestion(optionOne, optionTwo));

		this.setState(() => ({
			optionOne: "",
			optionTwo: "",
			toHome: id ? false : true,
		}));
	};
	render() {
		const { toHome } = this.state;

		if (toHome === true) {
			return <Redirect to="/" />;
		}
		console.log("+++", this.state);

		return (
			<div className="polls">
				<h3 className="center">Compose new Tweet</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="mb-3">
						<label
							htmlFor="formGroupExampleInput"
							className="form-label"
						>
							Example label
						</label>
						<input
							type="text"
							className="form-control w-50"
							id="formGroupExampleInput"
							placeholder="Example input placeholder"
							name="optionOne"
							// value={optionOne}
							onChange={this.handleChange}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="formGroupExampleInput2"
							className="form-label"
						>
							Another label
						</label>
						<input
							type="text"
							className="form-control w-50"
							id="formGroupExampleInput2"
							placeholder="Another input placeholder"
							name="optionTwo"
							// value={optionTwo}
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewQuestion);
