import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import {
	HomePage,
	CartPage,
	LoginPage,
	RegisterPage,
	NotFound,
} from './pages/index'

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="cart" element={<CartPage />} />
							<Route path="login" element={<LoginPage />} />
							<Route path="register" element={<RegisterPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
