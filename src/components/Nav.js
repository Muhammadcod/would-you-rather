import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand" href="/">
					Navbar
				</a>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul class="navbar-nav mr-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<NavLink to="/" exact activeClassName="active">
								Home
							</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/new" activeClassName="active">
								New Questions
							</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/answered" activeClassName="active">
								Leader Board
							</NavLink>
						</li>
					</ul>
					<div class="d-flex">
						<button class="btn btn-outline-success" type="submit">
							Log Out
						</button>
						<div>yiuh</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
