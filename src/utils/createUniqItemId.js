export const createUniqItemId = (id, type, size) => {
	return id.toString() + type.toString() + size.toString()
}
