import React from 'react'

import styles from './NotFoundBlock.module.scss'

console.log(styles)

function NotFoundBlock() {
	return (
		<div className={styles.root}>
			<span>😧</span>
			<br />
			<h1>Ни чего не найдено :(</h1>
			<p>К сожалению данная страница отсутствует</p>
		</div>
	)
}

export default NotFoundBlock
