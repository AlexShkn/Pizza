import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

function Pagination({ pizzasAmount, onChangePage }) {
	const pageCount = Math.round(pizzasAmount / 4)

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={e => onChangePage(e.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={pageCount || pageCount + 1}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
