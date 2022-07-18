import React from 'react'
import { Link } from 'react-router-dom'

import cart from '../assets/img/cart.svg'
import Search from './Search'

import logotype from '../assets/img/pizza-logo1.svg'

function Header({ searchValue, setSearchValue }) {
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

				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
