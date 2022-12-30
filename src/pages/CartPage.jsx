import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'

import { clearItem } from '../redux/slices/cartSlice'

import CartItem from '../components/CartItem'
import CartEmpty from '../components/CartEmpty'

import clear from '../assets/img/cart-clear.svg'
import { cart } from '../assets/svg-icons'

function CartPage() {
	const dispatch = useDispatch()
	const { items, totalPrice } = useSelector(state => state.cart)

	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	console.log(totalCount)

	return (
		<div className="container container--cart">
			<Helmet>
				<meta name="description" content="Cart page" />
				<title>Корзина</title>
			</Helmet>
			{items.length ? (
				<div className="cart">
					<div className="cart__top">
						<h2 className="content__title">{cart}Корзина</h2>
						<div onClick={() => dispatch(clearItem())} className="cart__clear">
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
								Всего пицц: <b>{items.length} шт.</b>
							</span>
							<span>
								Сумма заказа: <b>{totalPrice} ₽</b>
							</span>
						</div>
						<div className="cart__bottom-buttons">
							<Link to="/">
								<button className="button button--outline button--add go-back-btn">
									<span>Вернуться назад</span>
								</button>
							</Link>
							<button className="button pay-btn">
								<span>Оплатить сейчас</span>
							</button>
						</div>
					</div>
				</div>
			) : (
				<CartEmpty />
			)}
		</div>
	)
}

export default CartPage