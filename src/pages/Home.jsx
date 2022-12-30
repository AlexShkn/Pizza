import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import { setPizzasAmount } from '../redux/slices/filterSlice'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'

function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { categoryId, sort, currentPage, searchValue } = useSelector(state => state.filter)

	const [catalog, setCatalog] = React.useState([])
	const [dataIsLoading, setDataIsLoading] = React.useState(true)

	React.useEffect(() => {
		async function fetchData() {
			setDataIsLoading(true)

			const dataUrl = 'https://62b1cf3920cad3685c837f0e.mockapi.io'
			const category = categoryId > 0 ? `category=${categoryId}` : ''
			const sortBy = sort.sortProperty.replace('-', '')
			const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
			const search = searchValue ? `&search=${searchValue}` : ''
			try {
				const pizzasResponse = await axios.get(
					`${dataUrl}/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`,
				)
				const itemsResponse = await axios.get(
					`${dataUrl}/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
				)
				setCatalog(itemsResponse.data)
				dispatch(setPizzasAmount(pizzasResponse.data.length))
				setDataIsLoading(false)
			} catch (error) {
				alert('Не удалось сделать запрос данных')
			}
		}
		fetchData()
		// window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue, currentPage])

	React.useEffect(() => {
		const params = {
			categoryId: categoryId > 0 ? categoryId : null,
			currentPage: currentPage === 1 ? null : currentPage,
			sort,
		}
		const queryString = qs.stringify(params, { skipNulls: true })
		navigate(`/?${queryString}`)
	}, [categoryId, sort, currentPage])

	const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
	const pizzasList = catalog.map(item => <PizzaBlock key={item.id} {...item} />)

	return (
		<>
			<Helmet>
				<meta name="description" content="Home page" />
				<title>Главная</title>
			</Helmet>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{dataIsLoading ? skeleton : pizzasList}</div>
			<Pagination />
		</>
	)
}

export default Home
