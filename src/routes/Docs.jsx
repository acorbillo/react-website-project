import React from 'react'

import data from './docs-data' 
import './pages.css'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Docs() {
	return (
		<article className='article'>
			<section key="heading" className="sections">
				<h1 className='title heading'>
					Getting Started with React: Building Dynamic User Interfaces
				</h1>
				<p className="description">
					Are you interested in creating modern, interactive, and efficient user interfaces for your web applications? Look no further than React, a powerful JavaScript library that simplifies UI development and enhances user experiences. In this article, we'll walk you through the basics of React, giving you a solid foundation to start building your own dynamic web applications.
				</p>
			</section>

			{data.map((obj, index) => {
				return (
					<section key={index} className="sections">
						<h2 className='title'>{obj.title}</h2>
						<p className="description">{obj.description}</p>
						{obj.sample && 
						<SyntaxHighlighter 
							language="javascript" 
							style={dark}
							className="codes"
						>
						{obj.sample}
						</SyntaxHighlighter>}
					</section>
				)
			})}
		</article>
	)
}