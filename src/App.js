import React from 'react'

import './scss/app.scss'

import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Home from './pages/Home'

function App() {
	return (
		<div class="wrapper">
			<Header />
			<div class="content">
				<div class="container">
					<div class="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 class="content__title">Все пиццы</h2>
					<div class="content__items">
						<Home />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App