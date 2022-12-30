import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Search from './Search'

import logotype from '../assets/img/pizza-logo1.svg'
import cart from '../assets/img/cart.svg'

function Header() {
	const location = useLocation()
	const { totalPrice, items } = useSelector(state => state.cart)

	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<div className="header__logo-wrapper">
						<Link to="/">
							<img src={logotype} alt="Pizza logo" />
						</Link>
						<div>
							<Link to="/">
								<h1>Pizza</h1>
							</Link>
						</div>
					</div>
				</div>
				{location.pathname === '/' && <Search />}
				{location.pathname !== '/cart' && (
					<div className="header__cart">
						<Link to="cart">
							<button className="button button--cart">
								<span>{totalPrice} ₽</span>
								<div className="button__delimiter"></div>
								<div className="button__cart">
									<img src={cart} alt="" />
									<span>{items.length}</span>
								</div>
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default React.memo(Header)
