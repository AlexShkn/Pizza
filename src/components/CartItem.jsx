import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem, minusItem } from '../redux/slices/cartSlice'

import { itemRemove } from '../assets/svg-icons'

function CartItem({ imageUrl, title, type, size, price, id }) {
	const dispatch = useDispatch()
	const [itemCount, setItemCount] = React.useState(1)

	// const changeItemCount = value => {
	// 	if (value) {
	// 		setItemCount(itemCount + 1)
	// 	} else if (itemCount > 1) {
	// 		setItemCount(itemCount - 1)
	// 	}
	// }

	const onClickPlus = () => {
		dispatch(addItem({ id }))
	}

	const onClickMinus = () => {
		dispatch(minusItem(id))
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
					// onClick={() => changeItemCount(false)}
					onClick={onClickMinus}
					className="button button--outline button--circle cart__item-count-minus"
					disabled={itemCount === 1}>
					-
				</div>
				<b>{itemCount}</b>
				<div
					// onClick={() => changeItemCount(true)}
					onClick={onClickPlus}
					className="button button--outline button--circle cart__item-count-plus">
					+
				</div>
			</div>
			<div className="cart__item-price">
				<b>{price * itemCount} ₽</b>
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
