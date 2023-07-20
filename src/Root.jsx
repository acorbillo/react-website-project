import {
	React,
	useState
} from 'react'

import {
	Link,
	Outlet,
} from 'react-router-dom'

import Menu from './routes/Menu'

import logo from "./assets/react.svg"
import fbosLogo from "./assets/fbos-img.png"
import menu from "./assets/menu.png"

export default function Root() {

	const [toggle, setToggle] = useState(false)

	const toggleMenu = () => {
		setToggle(prevToggle => !prevToggle)
	}

	return (
		<>
			<header className={toggle ? 'close' : 'show'}>
				<Link to="/" className="logo">
					<img className="logo-img" src={logo} alt="react-logo" />
					<h3 className="logo-text">React</h3>
				</Link>
				<nav className="header-nav">
					<Link to="/docs" className="nav-links">Docs</Link>
					<Link to="/blog" className="nav-links">Blog</Link>
					<Link to="/community" className="nav-links">Community</Link>
					<img className={toggle ? 'close' : 'menu-img'} onClick={toggleMenu} 
						src={menu} 
						alt="" />
				</nav>
			</header>
			{toggle === true && <Menu toggle={toggle} handleClick={toggleMenu}/>}
			<main className={toggle ? 'close' : 'show'} >
				<Outlet/>
			</main>
			<footer className={toggle ? 'close' : 'show'} >
				<img className="fbos-logo" src={fbosLogo} alt="fbos-logo" />
				<div>
					<p>Copyright © 2023 Meta Platforms, Inc.</p>
					<p>Sample Project | by: Angelo Clint</p>
				</div>
			</footer>
		</>
	)
}