import React from 'react'

import useWindowSize from '../hooks/useWindowSize'

function Categories() {
	const [selectedCategory, setSelectedCategory] = React.useState(0)

	const currentWindowWidth = useWindowSize()
	const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	return (
		<div className="categories">
			{currentWindowWidth > '530' ? (
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
			) : (
				<select name="category" id="category">
					{categoriesList.map((category, index) => (
						<option key={index} value={category} onClick={() => setSelectedCategory(index)}>
							{category}
						</option>
					))}
				</select>
			)}
		</div>
	)
}

export default Categories
