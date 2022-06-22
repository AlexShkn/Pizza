import React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import './scss/app.scss'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {
	const [catalog, setCatalog] = React.useState([])
	const [dataIsLoading, setDataIsLoading] = React.useState(true)

	const dataUrl = 'https://62b1cf3920cad3685c837f0e.mockapi.io'

	React.useEffect(() => {
		async function fetchData() {
			try {
				const itemsResponse = await axios.get(`${dataUrl}/pizzas`)

				setCatalog(itemsResponse.data)
				setDataIsLoading(false)
			} catch (error) {
				alert('Не удалось сделать запрос данных')
			}
		}

		fetchData()
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home catalog={catalog} dataIsLoading={dataIsLoading} />} />
						<Route path="cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
