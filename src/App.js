import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import { Home, Cart, NotFound } from './pages/index'

function App() {
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<Router>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home searchValue={searchValue} />} />
							<Route
								path="cart"
								element={
									<Cart
										items={[
											{
												id: 0,
												imageUrl:
													'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
												title: 'Пепперони Фреш с перцем',
												types: [1],
												sizes: [30],
												price: 803,
												category: 3,
												rating: 4,
											},
											{
												id: 1,
												imageUrl:
													'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
												title: 'Сырная',
												types: [0],
												sizes: [40],
												price: 245,
												category: 3,
												rating: 6,
											},
										]}
									/>
								}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
