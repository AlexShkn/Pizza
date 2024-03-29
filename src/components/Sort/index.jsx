import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../../redux/slices/filterSlice'

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
	const sortRef = React.useRef()

	const [onOpenSortList, setOpenSortList] = React.useState(false)

	const updateSelectedSortItem = obj => {
		dispatch(setSortType(obj))
		setOpenSortList(false)
	}

	React.useEffect(() => {
		const handleClickOutside = e => {
			if (!e.path.includes(sortRef.current)) {
				setOpenSortList(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={sortRef} className="sort">
			<div className="sort__label">
				<svg
					className={onOpenSortList ? 'open' : ''}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#2C2C2C"
						d="M10 5a.6.6 0 01-.186.44.6.6 0 01-.439.185H.625a.6.6 0 01-.44-.186A.6.6 0 010 5a.6.6 0 01.186-.44L4.56.187A.6.6 0 015 0a.6.6 0 01.44.186L9.813 4.56A.6.6 0 0110 5z"></path>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpenSortList(!onOpenSortList)}>
					{sortType.name}
				</span>
			</div>

			{onOpenSortList && (
				<div className="sort__popup">
					<ul>
						{sortNamesList.map((obj, index) => (
							<li
								onClick={() => updateSelectedSortItem(obj)}
								key={index}
								className={
									sortType.sortProperty === obj.sortProperty ? 'active' : ''
								}>
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
