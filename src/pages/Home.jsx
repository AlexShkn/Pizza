import React from 'react'
import PizzaBlock from '../components/PizzaBlock'

function Home({ catalog }) {
	return (
		<div>
			<div className="content__items">
				{catalog.map(item => (
					<PizzaBlock key={item.id} {...item} />
				))}
			</div>
		</div>
	)
}

export default Home
