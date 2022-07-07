import { get_doc_by_id } from "$lib/_firebase_utils";


export async function get({ params }: { params: any }) {
	let data = await get_doc_by_id("websites", params.id)
	
	// db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
	return {
		body: { data: data }
	};
}
