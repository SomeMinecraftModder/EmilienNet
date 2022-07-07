export function swap_array(arr: Array<any>, fromIndex: number, toIndex: number) {
	arr = [...arr];
	let element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
	return arr;
}
