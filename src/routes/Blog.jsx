import React from 'react'

import data from "./blog-data.jsx"
import './pages.css'

export default function Blog() {
	return (
		<article className="article">
			<section key="heading" className="sections">
				<h1 className='title heading'>
					 Embracing React: Building Modern User Interfaces with Ease
				</h1>
				<h2 className="sub-heading">Introduction</h2>
				<p className="description">
					In today's fast-paced digital world, user interfaces play a pivotal role in capturing and retaining users' attention. As web applications become more sophisticated, developers need robust tools to create dynamic and interactive user experiences. Enter React - a game-changing JavaScript library that has revolutionized front-end web development. In this blog, we will explore the wonders of React, its core concepts, and why it has become the go-to choice for developers worldwide.
				</p>
			</section>
			{
				data.map((obj, index) => {
					return (
						<section key={index} className="sections">
							<h2 className="title">
								{obj.title}
							</h2>
							<p className="description">
								{obj.description}
							</p>
						</section>
					)
				})
			}
		</article>
	)
}