import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentPage: 1,
	pizzasAmount: 0,
	searchValue: '',
	searchInputValue: '',
	categoryId: 0,
	sort: {
		name: 'цене(ASC)',
		sortProperty: '-price',
	},
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSortType(state, action) {
			state.sort = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setSearchInputValue(state, action) {
			state.searchInputValue = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setPizzasAmount(state, action) {
			state.pizzasAmount = action.payload
		},
		setFilters(state, action) {
			state.currentPage = action.payload.currentPage
			state.categoryId = action.payload.categoryId
			state.sort.sortProperty = action.payload.sort
		},
	},
})

export const {
	setCategoryId,
	setCurrentPage,
	setPizzasAmount,
	setFilters,
	setSortType,
	setSearchValue,
	setSearchInputValue,
} = filterSlice.actions

export default filterSlice.reducer
