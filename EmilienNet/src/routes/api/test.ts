export async function post({ request }: { request: any }) {
	const data = await request.text(); // or .json(), or .text(), etc
	console.log(data);
	return {
		body: { a: 'waow' }
	};
}
