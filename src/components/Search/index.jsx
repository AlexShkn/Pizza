import React from 'react'

import useWindowSize from '../../hooks/useWindowSize'

import styles from './Search.module.scss'

function Search() {
	const currentWindowWidth = useWindowSize()
	let searchOnVisible = currentWindowWidth
	// const currenWidth = searchOnVisible < '550'
	console.log(searchOnVisible)

	const [onFieldOpen, setFieldOpen] = React.useState(searchOnVisible)

	const onOpenInputField = () => {
		setFieldOpen(!onFieldOpen)
	}
	console.log(onFieldOpen)
	return (
		<div
			onClick={onFieldOpen < '550' ? () => onOpenInputField() : undefined}
			className={onFieldOpen ? (styles.Search, styles.hidden) : styles.Search}>
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
			<input placeholder="Поиск пиццы..." />
		</div>
	)
}

export default Search
