import React from 'react'
import data from './docs-data' 

export default function Docs() {
	return (
		<article>
			{data.map((obj, index) => {
				return (
					<section key={index}>
						<h2 className='title'>{obj.title}</h2>
						<p className="description">{obj.description}</p>
						{obj.sample}
					</section>
				)
			})}
		</article>
	)
}