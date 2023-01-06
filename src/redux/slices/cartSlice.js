import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice, calcTotalCount } from 'utils/calcTotal'

const initialState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
	pizzasTypes: ['тонкое', 'традиционное'],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.itemId === action.payload.itemId)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
			state.totalPrice = calcTotalPrice(state.items)
			state.totalCount = calcTotalCount(state.items)
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.itemId !== action.payload)
			state.totalPrice = calcTotalPrice(state.items)
			state.totalCount = calcTotalCount(state.items)
		},

		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.itemId === action.payload)

			if (findItem) {
				findItem.count--
			}
			state.totalPrice = calcTotalPrice(state.items)
			state.totalCount = calcTotalCount(state.items)
		},

		clearItem(state) {
			state.items = []
			state.totalPrice = 0
			state.totalCount = 0
		},
	},
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions

export default cartSlice.reducer
