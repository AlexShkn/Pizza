import React from 'react'

import { AppContext } from '../../App'
import useWindowSize from '../../hooks/useWindowSize'

import styles from './Search.module.scss'

function Search() {
	const [onFieldOpen, setFieldOpen] = React.useState(false)
	const { searchValue, setSearchValue } = React.useContext(AppContext)

	const currentWindowWidth = useWindowSize()
	const showSearch = currentWindowWidth < '550'

	return (
		<div
			onClick={showSearch ? () => setFieldOpen(!onFieldOpen) : undefined}
			className={styles.Search}>
			<svg
				className={styles.Search_icon}
				enableBackground="new 0 0 32 32"
				id="EditableLine"
				version="1.1"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg">
				<circle
					cx="14"
					cy="14"
					fill="none"
					id="XMLID_42_"
					r="9"
					stroke="#c0c0c0"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="2"></circle>
				<line
					fill="none"
					id="XMLID_44_"
					stroke="#c0c0c0"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="2"
					x1="27"
					x2="20.366"
					y1="27"
					y2="20.366"></line>
			</svg>
			<input
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				placeholder="Поиск пиццы..."
			/>
			{searchValue && <span onClick={() => setSearchValue('')}>+</span>}
		</div>
	)
}

export default Search
