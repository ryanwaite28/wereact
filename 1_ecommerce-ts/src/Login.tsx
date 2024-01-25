import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { auth, db } from './firebase'; // Assuming you have a 'database' reference in your 'firebase.js'
// import { auth as FbAuth, db as FbDb } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  doc,
  setDoc
} from 'firebase/firestore';
import './login.css';

function Login() {
  const history = useNavigate() as any;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const auth = FbAuth as any;
  // const db = FbDb as any;



  const signIn = (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }

    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error: any) => alert(error.message));
  };

  const saveUserDataToDatabase = (userId: any, email: any, name?: any) => {
    // Save user data to the database
    return setDoc(doc(db, 'users', `${userId}`), {
      id: userId,
      email: email,
      name: name,
      // Add other user data as needed
    });
  };

  const register = (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }

    // Register the user
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        // Save additional user data to the database
        saveUserDataToDatabase(userCredential.user.uid, email);
        history.push('/');
      })
      .catch((error: any) => alert(error.message));
  };

  

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='login__logo'>
          <StoreMallDirectoryIcon className='login__logoImage' fontSize='large' />
          <h2 className='login__logoTitle'>eShop</h2>
        </div>
      </Link>

      <div className='login__container'>
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type='submit' className='login__signInButton' onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>this is a test eShop! nothing here is for sale.</p>

        <button className='login__registerButton' onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
