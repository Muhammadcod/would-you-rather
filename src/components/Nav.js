import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="/">
					Navbar
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo03"
				>
					<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/" exact activeClassName="active">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/new" activeClassName="active">
								New Questions
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/answered" activeClassName="active">
								Leader Board
							</NavLink>
						</li>
					</ul>
					<div className="d-flex">
						<button
							className="btn btn-outline-success"
							type="submit"
						>
							Log Out
						</button>
						<div>yiuh</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
