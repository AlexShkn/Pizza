import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useWindowSize from 'hooks/useWindowSize'
import { setCategoryId, setCurrentPage } from 'redux/slices/filterSlice'

function Categories() {
	const dispatch = useDispatch()
	const selectedCategory = useSelector(state => state.filter.categoryId)

	const [onOpenCategoryList, setOpenCategoryList] = React.useState(false)

	const currentWindowWidth = useWindowSize()
	const categoriesList = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	const updateSelectedCategory = index => {
		dispatch(setCategoryId(index))
		setOpenCategoryList(false)
		dispatch(setCurrentPage(1))
	}

	return (
		<div className="categories">
			{currentWindowWidth > '530' ? (
				<ul>
					{categoriesList.map((category, index) => (
						<li
							key={index}
							onClick={() => updateSelectedCategory(index)}
							className={selectedCategory === index ? 'active' : ''}>
							{category}
						</li>
					))}
				</ul>
			) : (
				<div className="categories__select">
					<div
						className="categories__label"
						onClick={() => setOpenCategoryList(!onOpenCategoryList)}>
						<span>{categoriesList[selectedCategory]}</span>
						<svg
							className={onOpenCategoryList ? 'open' : ''}
							width="15"
							height="15"
							viewBox="0 0 284.929 284.929"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#2C2C2C"
								d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z"></path>
						</svg>
					</div>
					{onOpenCategoryList && (
						<ul className="categories__popup">
							{categoriesList.map((name, index) => (
								<li
									onClick={() => updateSelectedCategory(index)}
									key={index}
									className={selectedCategory === index ? 'active' : ''}>
									{name}
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	)
}

export default Categories
