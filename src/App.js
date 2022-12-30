import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import { Home, Cart, NotFound } from './pages/index'

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="cart" element={<Cart />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
