export async function post({request}) {
    const data = await request.text(); // or .json(), or .text(), etc
	console.log(data);
	return {
		body: { a: 'waow' }
	};
}
