import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useWindowSize from '../hooks/useWindowSize'

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { arrowCategory } from '../assets/svg-icons'

function Categories() {
	const dispatch = useDispatch()
	const selectedCategory = useSelector(state => state.filter.categoryId)

	const [onOpenCategoryList, setOpenCategoryList] = React.useState(false)

	const currentWindowWidth = useWindowSize()
	const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

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
							{arrowCategory}
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
