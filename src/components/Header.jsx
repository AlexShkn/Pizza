import React from 'react'
import { Link } from 'react-router-dom'

import cart from '../assets/img/cart.svg'
import Search from './Search'

import logotype from '../assets/img/pizza-logo1.svg'

function Header() {
	return (
		<div className="header">
			<div className="container">
				<Link to="/">
					<div className="header__logo">
						<img src={logotype} alt="Pizza logo" />
						<div>
							<h1>Pizza</h1>
						</div>
					</div>
				</Link>
				<Search />
				<Link to="cart">
					<div className="header__cart">
						<button className="button button--cart">
							<span>520 ₽</span>
							<div className="button__delimiter"></div>
							<div className="button__cart">
								<img src={cart} alt="" />
								<span>3</span>
							</div>
						</button>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
