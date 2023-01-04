export const createUniqItemId = (id, type, size) => {
	return (id + type + size).toString()
}
