import { db } from '$lib/firebase';
import { addDoc, collection } from 'firebase/firestore';

export async function add_website(title: string, content: object) {
	try {
		const docRef = await addDoc(collection(db, 'websites'), {
			title: title,
			content: JSON.stringify(content)
		});
		console.debug('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}
