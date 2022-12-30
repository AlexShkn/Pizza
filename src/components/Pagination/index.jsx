import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentPage } from '../../redux/slices/filterSlice'

import styles from './Pagination.module.scss'

function Pagination() {
	const dispatch = useDispatch()

	const pizzasAmount = useSelector(state => state.filter.pizzasAmount)
	const pageCount = Math.round(pizzasAmount / 4)

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
			pageRangeDisplayed={4}
			pageCount={pageCount || pageCount + 1}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
