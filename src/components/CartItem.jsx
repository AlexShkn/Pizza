import React from 'react'

import { itemRemove } from '../assets/svg-icons'

function CartItem({ imageUrl, title, types, sizes, price }) {
	const [itemCount, setItemCount] = React.useState(1)

	const changeItemCount = value => {
		if (value) {
			setItemCount(itemCount + 1)
		} else if (itemCount > 1) {
			setItemCount(itemCount - 1)
		}
	}

	const pizzasTypes = ['тонкое', 'традиционное']

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{title}</h3>
				<p>{`${pizzasTypes[types]} тесто, ${sizes} см.`}</p>
			</div>
			<div className="cart__item-count">
				<div
					onClick={() => changeItemCount(false)}
					className="button button--outline button--circle cart__item-count-minus">
					-
				</div>
				<b>{itemCount}</b>
				<div
					onClick={() => changeItemCount(true)}
					className="button button--outline button--circle cart__item-count-plus">
					+
				</div>
			</div>
			<div className="cart__item-price">
				<b>{price * itemCount} ₽</b>
			</div>
			<div className="cart__item-remove">
				<div className="button button--outline button--circle">{itemRemove}</div>
			</div>
		</div>
	)
}

export default CartItem
