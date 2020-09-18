import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li className="border">
					<NavLink to="/" exact activeClassName="active">
						Unanswered Questions
					</NavLink>
				</li>
				<li className="border">
					<NavLink to="/answered" activeClassName="active">
						Answered Questions
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
