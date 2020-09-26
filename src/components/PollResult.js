import React, { Component } from "react";
import { connect } from "react-redux";
// import { formatQuestion } from "../utils/helpers";

class PollResult extends Component {
	render() {
		return (
			<div className="polls">
				<h5 className="questioner"> asks:</h5>
				<div className="poll">
					<img src="" alt="" className="avatar" />
					<div className="poll-info">
						<div className="option-one">
							<p>Would you rather:</p>
							<span>progress %</span>
							<p>2 of 3</p>
						</div>
						<div className="option-two">
							<p>Would you rather:</p>
							<span>progress %</span>
							<p>2 of 3</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(PollResult);
