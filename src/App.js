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
												id: 1,
												imageUrl:
													'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
												title: 'Сырная',
												types: [0],
												sizes: [40],
												price: 245,
												category: 3,
												rating: 6,
												compound: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
												weight: [410],
											},
											{
												id: 3,
												imageUrl:
													'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
												title: 'Кисло-сладкий цыпленок',
												types: [1],
												sizes: [30],
												price: 275,
												category: 2,
												rating: 2,
												compound:
													'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
												weight: [560],
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
