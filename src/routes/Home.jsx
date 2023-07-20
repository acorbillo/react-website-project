import React from 'react'
import "./home.css"
import logo from '../assets/react.svg'

export default function Home() {
	return (
		<section className="hero-section">
			<img src={logo} alt="" />
			<div>
				<h1 className="accent">React</h1>
				<p>A JavaScript library for building user interfaces</p>				
			</div>
		</section>
	)
}