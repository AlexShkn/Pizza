import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sort: {
		name: 'цене(ASC)',
		sortProperty: '-price',
	},
	searchValue: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
	},
})

export const { setCategoryId, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
