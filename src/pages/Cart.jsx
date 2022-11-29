import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import CartItem from '../components/CartItem'
import CartEmpty from '../components/CartEmpty'

import clear from '../assets/img/cart-clear.svg'

function Cart({ items }) {
	return (
		<div className="container container--cart">
			<Helmet>
				<meta name="description" content="Cart page" />
				<title>Корзина</title>
			</Helmet>
			{items ? (
				<div className="cart">
					<div className="cart__top">
						<h2 className="content__title">Корзина</h2>
						<div className="cart__clear">
							<img src={clear} alt="" />
							<span>Очистить корзину</span>
						</div>
					</div>
					<div className="cart__items">
						{items.map(item => (
							<CartItem key={item.id} {...item} />
						))}
					</div>
					<div className="cart__bottom">
						<div className="cart__bottom-details">
							<span>
								Всего пицц: <b>3 шт.</b>
							</span>
							<span>
								Сумма заказа: <b>900 ₽</b>
							</span>
						</div>
						<div className="cart__bottom-buttons">
							<Link to="/">
								<button className="button button--outline button--add go-back-btn">
									<span>Вернуться назад</span>
								</button>
							</Link>
							<div className="button pay-btn">
								<span>Оплатить сейчас</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<CartEmpty />
			)}
		</div>
	)
}

export default Cart
