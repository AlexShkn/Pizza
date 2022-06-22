import React from 'react'
import axios from 'axios'

import './scss/app.scss'

import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Home from './pages/Home'

function App() {
	const [catalog, setCatalog] = React.useState([])

	const dataUrl = 'https://62b1cf3920cad3685c837f0e.mockapi.io'

	React.useEffect(() => {
		async function fetchData() {
			try {
				const itemsResponse = await axios.get(`${dataUrl}/pizzas`)
				setCatalog(itemsResponse.data)
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
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<Home catalog={catalog} />
				</div>
			</div>
		</div>
	)
}

export default App
