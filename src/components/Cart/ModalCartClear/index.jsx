import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItem } from 'redux/slices/cartSlice'

import styles from './modalCartClear.module.scss'

function CartClearModal({ modalIsOpen, setIsOpen }) {
	const dispatch = useDispatch()

	function cartClear() {
		dispatch(clearItem())
		setIsOpen(!modalIsOpen)
	}

	return (
		<div className={styles.modal}>
			<p>Вы хотите очистить корзину?</p>
			<div className={styles.buttons}>
				<button
					className="button button--outline button--add go-back-btn"
					onClick={() => cartClear()}>
					Очистить
				</button>
				<button
					className="button pay-btn"
					onClick={() => setIsOpen(!modalIsOpen)}>
					Отмена
				</button>
			</div>
		</div>
	)
}

export default CartClearModal
