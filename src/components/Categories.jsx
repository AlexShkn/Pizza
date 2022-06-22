import React from 'react'

function Categories() {
	const [selectedCategory, setSelectedCategory] = React.useState(0)

	const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	return (
		<div className="categories">
			<ul>
				{categoriesList.map((category, index) => (
					<li
						key={index}
						onClick={() => setSelectedCategory(index)}
						className={selectedCategory === index ? 'active' : ''}>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
