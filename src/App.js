import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export const AppContext = React.createContext({})

function App() {
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<AppContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="cart" element={<Cart catalog={[]} />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App
