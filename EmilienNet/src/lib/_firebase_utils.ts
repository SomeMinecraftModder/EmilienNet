import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	type User
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from './_firebase';

export async function get_doc_by_id(coll: any, id: any) {
	const snap = await getDoc(doc(db, coll, id));
	if (snap.exists()) return snap.data();
	else return Promise.reject(Error(`No such document: ${coll}.${id}`));
}

export function get_auth_state() {
	app; // so my IDE doesn't yell at me
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			console.log(user.uid);
		} else {
			// User is signed out
		}
	});
	return;
}

export function is_signed() {
	let info = get_auth_state();
	if (info === undefined) {
		return false;
	} else {
		return true;
	}
}

export function login_user(email: any, password: any) {
	const auth = getAuth();
	let result;
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			result = user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			result = undefined;
		});
	return result;
}

export function log_out_user() {
	const auth = getAuth();
	signOut(auth)
		.then(() => {})
		.catch((error) => {
			// there was an error
		});
}
