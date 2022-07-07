import { app } from '$lib/_firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession() {
	app; // so my IDE doesn't yell at me
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return {
				user: {
					is_logged: true
				}
			};
		} else {
			return {
				user: {
					is_logged: true
				}
			};
		}
	});
}
