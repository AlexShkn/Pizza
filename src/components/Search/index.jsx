import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import useWindowSize from 'hooks/useWindowSize'
import { setSearchInputValue, setSearchValue } from 'redux/slices/filterSlice'

import styles from './Search.module.scss'

function Search() {
	const dispatch = useDispatch()
	const searchInputValue = useSelector(state => state.filter.searchInputValue)

	const [onFieldOpen, setFieldOpen] = React.useState(true)

	const inputRef = React.useRef()
	const currentWindowWidth = useWindowSize()
	const showSearch = currentWindowWidth < '1000'

	const inputFieldClear = () => {
		dispatch(setSearchValue(''))
		dispatch(setSearchInputValue(''))
		inputRef.current?.focus()
	}

	const updateSearchValue = React.useCallback(
		debounce(value => {
			dispatch(setSearchValue(value))
		}, 300),
		[],
	)

	const onChangeInput = e => {
		dispatch(setSearchInputValue(e.target.value))
		updateSearchValue(e.target.value)
	}

	React.useEffect(() => {
		showSearch ? setFieldOpen(false) : setFieldOpen(true)
	}, [currentWindowWidth, showSearch])

	return (
		<div
			className={
				onFieldOpen ? [styles.Search, styles.open].join(' ') : styles.Search
			}>
			<svg
				onClick={showSearch ? () => setFieldOpen(!onFieldOpen) : undefined}
				className={styles.Search_icon}
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 32 32">
				<circle cx="14" cy="14" r="9" fill="none" stroke="silver"></circle>
				<path fill="none" stroke="silver" d="M27 27L20.366 20.366"></path>
			</svg>
			<div>
				<input
					ref={inputRef}
					value={searchInputValue}
					onChange={onChangeInput}
					placeholder="Поиск пиццы..."
				/>
				{searchInputValue && (
					<span className={styles.closed} onClick={() => inputFieldClear()}>
						+
					</span>
				)}
			</div>
		</div>
	)
}

export default Search
