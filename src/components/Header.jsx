import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../redux/slices/userSlice'

import Search from './Search'

import logotype from '../assets/img/pizza-logo1.svg'
import cart from '../assets/img/cart.svg'
import profile from '../assets/img/profile.svg'
import exit from '../assets/img/exit.svg'

function Header() {
	const dispatch = useDispatch()
	const { isAuth } = useAuth()
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

				{!isAuth ? (
					<Link to="/login">
						<div className="header__profile">
							<img src={profile} alt="" />
						</div>
					</Link>
				) : (
					<div>
						<img
							style={{ display: 'block', cursor: 'pointer' }}
							src={exit}
							alt="Выйти"
							onClick={() => dispatch(removeUser())}
						/>
					</div>
				)}

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
