import React from 'react'
import {
	Link,
	Outlet,
} from 'react-router-dom'

import logo from "./assets/react.svg"
import fbosLogo from "./assets/fbos-img.png"
import menu from "./assets/menu.png"

export default function Root() {
	return (
		<>
			<header>
				<Link to="/" className="logo">
					<img className="logo-img" src={logo} alt="react-logo" />
					<h3 className="logo-text">React</h3>
				</Link>
				<nav className="header-nav">
					<Link to="/docs" className="nav-links">Docs</Link>
					<Link to="/blog" className="nav-links">Blog</Link>
					<Link to="/community" className="nav-links">Community</Link>
					<img className='menu' src={menu} alt="" />
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<img className="fbos-logo" src={fbosLogo} alt="fbos-logo" />
				<div>
					<p>Copyright © 2023 Meta Platforms, Inc.</p>
					<p>Sample Project | by: Angelo Clint</p>
				</div>
			</footer>
		</>
	)
}