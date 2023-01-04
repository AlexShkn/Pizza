export const calcTotalPrice = items => {
	return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}
export const calcTotalCount = items => {
	return items.reduce((sum, obj) => obj.count + sum, 0)
}
