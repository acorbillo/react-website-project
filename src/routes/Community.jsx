import React from 'react'

import './pages.css'

export default function Community() {
	return (
		<article className="article">
			<section className="sections">
				<h1 className="title heading">
					Where To Get Support
				</h1>
				<p className="description">
					React has a community of millions of developers.
				</p>
				<p className="description">
					On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
				</p>
				<p className="description">
					Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
				</p>
			</section>
			<section className='sections'>
				<h2 className="title">
					<a href="https://stackoverflow.com/" target="_blank">
						Stack Overflow
					</a>
				</h2>
				<p className="description">
					Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!
				</p>
			</section>
			<section className='sections'>
				<h2 className="title">
					Popular Discussion Forums
				</h2>
				<p className="description">
					There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit. Each community consists of many thousands of React users.
				</p>
				<ul className="list">
					<li className='list-item'>
						<a href="https://dev.to/t/react" target="_blank">
							DEV’s React community
						</a>
					</li>
					<li className='list-item'>
						<a href="https://hashnode.com/n/reactjs" target="_blank">
							Hashnode’s React community
						</a>
					</li>
					<li className='list-item'>
						<a href="https://discord.com/invite/reactiflux" target="_blank">
							Reactiflux online chat		
						</a>
					</li>
					<li className='list-item'>
						<a href="https://www.reddit.com/r/reactjs/" target="_blank">
							Reddit’s React community		
						</a>
					</li>
				</ul>
			</section>
			<section className='sections'>
				<h2 className="title">
					News
				</h2>
				<p className="description">
					For the latest news about React, follow <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Freactjs" target="_blank">@reactjs</a> on Twitter and the official React blog on this website.
				</p>
			</section>
		</article>
	)
}