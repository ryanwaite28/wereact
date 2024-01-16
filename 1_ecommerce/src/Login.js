// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { auth } from './firebase';
import './login.css'

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
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