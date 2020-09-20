import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li className="border">
					<NavLink to="/" exact activeClassName="active">
						Home
					</NavLink>
				</li>
				<li className="border">
					<NavLink to="/new" activeClassName="active">
						New Questions
					</NavLink>
				</li>
				<li className="border">
					<NavLink to="/answered" activeClassName="active">
						Leader Board
					</NavLink>
				</li>
			</ul>

			<ul>
				<li className="border">
					<NavLink to="/" exact activeClassName="active">
						Home
					</NavLink>
				</li>
				<li className="border">
					<NavLink to="/NewQuestion" activeClassName="active">
						New Questions
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
