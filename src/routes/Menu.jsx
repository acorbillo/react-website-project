import React from 'react'
import {Link} from 'react-router-dom'

import close from '../assets/close.png'

export default function Menu({toggle, handleClick}) {

	return (
		<nav className={toggle ? 'show-menu' : 'close'}>
			<img className={toggle ? 'close-menu-img' : 'close'} src={close} alt="" onClick={handleClick}/>
			<Link to="/docs" className="menu-link" onClick={handleClick} >Docs</Link>
			<Link to="/blog" className="menu-link" onClick={handleClick} >Blog</Link>
			<Link to="/community" className="menu-link" onClick={handleClick} >Community</Link>
		</nav>
	)
}