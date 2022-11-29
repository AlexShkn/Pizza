import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'

import { setCategoryId } from '../redux/filter/filterSlice'

function Home({ searchValue }) {
	const categoryId = useSelector(state => state.filter.categoryId)
	const dispatch = useDispatch()

	const [catalog, setCatalog] = React.useState([])
	const [dataIsLoading, setDataIsLoading] = React.useState(true)
	const [currentPage, setCurrentPage] = React.useState(1)
	const [pizzasAmount, setPizzasAmount] = React.useState(1)
	// const [selectedCategory, setSelectedCategory] = React.useState(0)
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
			const category = categoryId > 0 ? `category=${categoryId}` : ''
			const sortBy = sortSelectedType.sortProperty.replace('-', '')
			const order = sortSelectedType.sortProperty.includes('-') ? 'asc' : 'desc'
			const search = searchValue ? `&search=${searchValue}` : ''
			try {
				const pizzasResponse = await axios.get(
					`${dataUrl}/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`,
				)
				const itemsResponse = await axios.get(
					`${dataUrl}/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
				)
				setCatalog(itemsResponse.data)
				setPizzasAmount(pizzasResponse.data.length)
				setDataIsLoading(false)
			} catch (error) {
				alert('Не удалось сделать запрос данных')
			}
		}
		fetchData()
		// window.scrollTo(0, 0)
	}, [categoryId, sortSelectedType, searchValue, currentPage])

	return (
		<>
			<Helmet>
				<meta name="description" content="Home page" />
				<title>Главная</title>
			</Helmet>

			<div className="content__top">
				<Categories
					selectedCategory={categoryId}
					onChangeCategory={index => dispatch(setCategoryId(index))}
				/>
				<Sort
					sortSelectedType={sortSelectedType}
					onChangeSort={sortProperty => setSortSelectedType(sortProperty)}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{dataIsLoading ? skeleton : pizzasList}</div>
			<Pagination pizzasAmount={pizzasAmount} onChangePage={number => setCurrentPage(number)} />
		</>
	)
}

export default Home
