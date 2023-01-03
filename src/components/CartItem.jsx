import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, minusItem } from '../redux/slices/cartSlice'

import { itemRemove } from '../assets/svg-icons'

function CartItem({ imageUrl, title, type, size, price, id }) {
	const dispatch = useDispatch()
	const { items } = useSelector(state => state.cart)

	const currentItem = items.find(obj => obj.id === id)

	const changeItemCount = value => {
		if (value) {
			dispatch(addItem({ id }))
		} else if (currentItem.count > 1) {
			dispatch(minusItem(id))
		}
	}

	const pizzasTypes = ['тонкое', 'традиционное']
	const pizzaSizes = [26, 30, 40]

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{title}</h3>
				<p>{`${pizzasTypes[type]} тесто, ${pizzaSizes[size]} см.`}</p>
			</div>
			<div className="cart__item-count">
				<div
					onClick={() => changeItemCount(false)}
					className="button button--outline button--circle cart__item-count-minus"
					disabled={currentItem.count === 1}>
					-
				</div>
				<b>{currentItem.count}</b>
				<div
					onClick={() => changeItemCount(true)}
					className="button button--outline button--circle cart__item-count-plus">
					+
				</div>
			</div>
			<div className="cart__item-price">
				<b>{price * currentItem.count} ₽</b>
			</div>
			<div className="cart__item-remove">
				<div
					onClick={() => dispatch(removeItem(id))}
					className="button button--outline button--circle">
					{itemRemove}
				</div>
			</div>
		</div>
	)
}

export default CartItem
