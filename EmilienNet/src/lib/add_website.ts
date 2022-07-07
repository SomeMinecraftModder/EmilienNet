import { db } from '$lib/_firebase';
import { addDoc, collection } from 'firebase/firestore';

export async function add_website(title: string, content: object) {
	try {
		const docRef = await addDoc(collection(db, 'websites'), {
			title: title,
			content: content
		});
		console.debug('Document written with ID: ', docRef.id);
		return docRef.id;
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}
