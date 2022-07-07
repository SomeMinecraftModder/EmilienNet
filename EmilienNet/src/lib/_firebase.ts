import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAX_GpnNGJvmsAXJMRO1fmyQOMo0bFtwbI',
	authDomain: 'bordel-e301d.firebaseapp.com',
	projectId: 'bordel-e301d',
	storageBucket: 'bordel-e301d.appspot.com',
	messagingSenderId: '744644815823',
	appId: '1:744644815823:web:5c6fc85ff26ded6d6e00ba'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
