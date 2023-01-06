import React from 'react'
import { Link } from 'react-router-dom'
import emptyCart from 'assets/img/empty-cart.png'

function cartEmpty() {
	return (
		<div className="cart cart--empty">
			<h2>Корзина пуста 😕</h2>
			<p>
				Вероятней всего, вы не добавили пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={emptyCart} alt="Empty cart" />
			<Link to="/">
				<button className="button button--black">
					<span>Вернуться назад</span>
				</button>
			</Link>
		</div>
	)
}

export default cartEmpty
