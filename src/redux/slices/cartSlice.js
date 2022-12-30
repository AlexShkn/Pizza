import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price + sum
			}, 0)
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
			// state.totalPrice = state.items.reduce((sum, obj) => {
			// 	return sum - obj.price
			// }, 0)
		},

		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count--
			}
		},

		clearItem(state) {
			state.items = []
		},
	},
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions

export default cartSlice.reducer
