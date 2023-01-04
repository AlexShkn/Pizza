import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, minusItem } from '../redux/slices/cartSlice'
import { createUniqItemId } from '../utils/createUniqItemId'

import { itemRemove } from '../assets/svg-icons'

function CartItem({ imageUrl, title, type, size, price, id }) {
	const dispatch = useDispatch()
	const { items, pizzasTypes } = useSelector(state => state.cart)

	const itemId = createUniqItemId(id, type, size)
	const currentItem = items.find(obj => obj.itemId === itemId)

	const changeItemCount = value => {
		if (value) {
			dispatch(addItem(currentItem))
		} else if (currentItem.count > 1) {
			dispatch(minusItem(itemId))
		}
	}

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{title}</h3>
				<p>{`${pizzasTypes[type]} тесто, ${size} см.`}</p>
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
					onClick={() => dispatch(removeItem(itemId))}
					className="button button--outline button--circle">
					{itemRemove}
				</div>
			</div>
		</div>
	)
}

export default CartItem
