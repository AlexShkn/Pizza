import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { CartItem, CartEmpty, ModalCartClear } from 'components/Cart/index'

import clear from 'assets/img/cart-clear.svg'
import { cart } from 'assets/svg-icons'

const customStyles = {
	overlay: {
		position: 'fixed',
		zIndex: 1020,
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: 'rgba(0, 0, 0, 0.6)',
		backdropFilter: 'blur(3px)',
	},

	content: {
		top: '40%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '30px',
		borderRadius: '5px',
		boxShadow: '0 3rem 5rem rgba(0, 0, 0, 0.3)',
	},
}

function CartPage() {
	const { items, totalPrice, totalCount } = useSelector(state => state.cart)

	const [modalIsOpen, setIsOpen] = React.useState(false)

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
						<div onClick={() => setIsOpen(!modalIsOpen)} className="cart__clear">
							<img src={clear} alt="" />
							<span>Очистить корзину</span>
						</div>
					</div>
					<div className="cart__items">
						{items.map((item, index) => (
							<CartItem key={index} {...item} />
						))}
					</div>
					<div className="cart__bottom">
						<div className="cart__bottom-details">
							<span>
								Всего пицц: <b>{totalCount} шт.</b>
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
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(!modalIsOpen)}
				style={customStyles}>
				<ModalCartClear modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
			</Modal>
		</div>
	)
}

export default CartPage
