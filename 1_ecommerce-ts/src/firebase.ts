import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  
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
