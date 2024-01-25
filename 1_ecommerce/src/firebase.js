import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1P5JFX_8u_eyUJVCYNB4yn9CA0fihpvM",
  authDomain: "sandbox-79fef.firebaseapp.com",
  projectId: "sandbox-79fef",
  storageBucket: "sandbox-79fef.appspot.com",
  messagingSenderId: "268302472448",
  appId: "1:268302472448:web:2d7ebee6a052898c92cfe5",
  measurementId: "G-Q3TKF0XT40"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);



// Function to save user data to Firestore
export const saveUserDataToFirestore = async (userId, email) => {
  // Save user data to Firestore
  const userDocRef = doc(db, 'users', userId);

  await setDoc(userDocRef, {
    email: email,
    // Add other user data as needed
  });
};

// Function to register user
export const registerUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
