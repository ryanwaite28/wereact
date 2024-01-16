import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore module


const firebaseConfig = {
    apiKey: "AIzaSyDwuEvj2sLj_2hjtxYfCQNio0RdNi7KsQ8",
    authDomain: "eshop-96427.firebaseapp.com",
    projectId: "eshop-96427",
    storageBucket: "eshop-96427.appspot.com",
    messagingSenderId: "704336302417",
    appId: "1:704336302417:web:fbb566f27a2ca56dda0370",
    measurementId: "G-EHY7856BJC"
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

export {db, auth}