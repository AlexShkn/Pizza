import React from 'react'
import axios from 'axios'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

function Home({ searchValue }) {
	const [catalog, setCatalog] = React.useState([])
	const [dataIsLoading, setDataIsLoading] = React.useState(true)
	const [selectedCategory, setSelectedCategory] = React.useState(0)
	const [sortSelectedType, setSortSelectedType] = React.useState({
		name: 'цене(ASC)',
		sortProperty: '-price',
	})

	const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
	const pizzasList = catalog.map(item => <PizzaBlock key={item.id} {...item} />)

	React.useEffect(() => {
		async function fetchData() {
			setDataIsLoading(true)

			const dataUrl = 'https://62b1cf3920cad3685c837f0e.mockapi.io'
			const category = selectedCategory > 0 ? `category=${selectedCategory}` : ''
			const sortBy = sortSelectedType.sortProperty.replace('-', '')
			const order = sortSelectedType.sortProperty.includes('-') ? 'asc' : 'desc'
			const search = searchValue ? `&search=${searchValue}` : ''
			try {
				const itemsResponse = await axios.get(
					`${dataUrl}/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`,
				)
				setCatalog(itemsResponse.data)
				setDataIsLoading(false)
			} catch (error) {
				alert('Не удалось сделать запрос данных')
			}
		}
		fetchData()
		window.scrollTo(0, 0)
	}, [selectedCategory, sortSelectedType, searchValue])

	return (
		<>
			<div className="content__top">
				<Categories
					selectedCategory={selectedCategory}
					onChangeCategory={index => setSelectedCategory(index)}
				/>
				<Sort
					sortSelectedType={sortSelectedType}
					onChangeSort={sortProperty => setSortSelectedType(sortProperty)}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{dataIsLoading ? skeleton : pizzasList}</div>
		</>
	)
}

export default Home
