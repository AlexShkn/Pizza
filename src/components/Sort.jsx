import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../redux/filter/filterSlice'

import { sortTriangle } from '../assets/svg-icons'

const sortNamesList = [
	{ name: 'цене(ASC)', sortProperty: '-price' },
	{ name: 'цене(DESC)', sortProperty: 'price' },
	{ name: 'популярности(ASC)', sortProperty: '-rating' },
	{ name: 'популярности(DESC)', sortProperty: 'rating' },
	{ name: 'алфавиту(ASK)', sortProperty: '-title' },
	{ name: 'алфавиту(DESC)', sortProperty: 'title' },
]

function Sort() {
	const dispatch = useDispatch()
	const sortType = useSelector(state => state.filter.sort)

	const [onOpenSortList, setOpenSortList] = React.useState(false)

	const updateSelectedSortItem = obj => {
		dispatch(setSortType(obj))
		setOpenSortList(false)
	}

	return (
		<div className="sort">
			<div className="sort__label">
				<svg
					className={onOpenSortList ? 'open' : ''}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					{sortTriangle}
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpenSortList(!onOpenSortList)}>{sortType.name}</span>
			</div>

			{onOpenSortList && (
				<div className="sort__popup">
					<ul>
						{sortNamesList.map((obj, index) => (
							<li
								onClick={() => updateSelectedSortItem(obj)}
								key={index}
								className={sortType.sortProperty === obj.sortProperty ? 'active' : ''}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
