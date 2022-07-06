export function remove_array_index(arr: Array<any>, index: number) {
	return (arr = [...arr.slice(0, index), ...arr.slice(index + 1)]);
}
