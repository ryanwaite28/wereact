import { useState } from 'react';
import axios from 'axios';

const projectID = '50da16d4-edd2-4197-8ef0-ebfd3485badb';
const apiURL = 'https://api.chatengine.io/users/';

const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const LoginForm = () => {
  // State for user credentials, error message, loading state, and registration mode
  const [credentials, setCredentials] = useState({ username: '', password: '', confirmPassword: '', email: '', first_name: '', last_name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Handle input changes
  const handleInputChange = (e, field) => {
    setCredentials({ ...credentials, [field]: e.target.value });
  };

  // Handle form submission (login or registration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Authentication headers for Chat Engine API
    const authObject = { 'Project-ID': projectID, 'User-Name': credentials.username, 'User-Secret': credentials.password };

    try {
      setLoading(true);

      if (isRegistering) {
        // Check if the user already exists
        const userExistsResponse = await axios.get(apiURL + 'search/', { params: { username: credentials.username } });
        const userExists = userExistsResponse.data.length > 0;

        if (userExists) {
          // Handle migration for existing user (update details)
          await axios.patch(apiURL + userExistsResponse.data[0].id + '/', {
            username: credentials.username,
            secret: credentials.password,
            email: credentials.email,
            first_name: credentials.first_name,
            last_name: credentials.last_name,
          });
        } else {
          // Handle user registration
          await axios.post(apiURL + 'signup/', {
            username: credentials.username,
            secret: credentials.password,
            email: credentials.email,
            first_name: credentials.first_name,
            last_name: credentials.last_name,
          });
        }
      } else {
        // Handle user login
        await axios.get(apiURL, { headers: authObject });
      }

      // Store credentials in localStorage
      setLocalStorage('username', credentials.username);
      setLocalStorage('password', credentials.password);

      // Reload the window after successful login or registration
      window.location.reload();
      setError('');
    } catch (err) {
      setError(isRegistering ? 'Registration failed. Please try again.' : 'Incorrect username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Render form inputs based on registration mode
  const renderFormInputs = () => (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={credentials.username}
        onChange={(e) => handleInputChange(e, 'username')}
        placeholder="Username"
        required
      />
      <Input
        type="password"
        value={credentials.password}
        onChange={(e) => handleInputChange(e, 'password')}
        placeholder="Password"
        required
      />
      {isRegistering && (
        <>
          <Input
            type="password"
            value={credentials.confirmPassword}
            onChange={(e) => handleInputChange(e, 'confirmPassword')}
            placeholder="Confirm Password"
            required
          />
          <Input
            type="email"
            value={credentials.email}
            onChange={(e) => handleInputChange(e, 'email')}
            placeholder="Email"
            required
          />
          <Input
            type="text"
            value={credentials.first_name}
            onChange={(e) => handleInputChange(e, 'first_name')}
            placeholder="First Name"
            required
          />
          <Input
            type="text"
            value={credentials.last_name}
            onChange={(e) => handleInputChange(e, 'last_name')}
            placeholder="Last Name"
            required
          />
        </>
      )}
      <div align="center">
        <button type="submit" className="button" disabled={loading}>
          <span>{loading ? 'Loading...' : isRegistering ? 'Register' : 'Login'}</span>
        </button>
      </div>
    </form>
  );

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">{isRegistering ? 'Register' : 'Login'} to Chat Application</h1>
        {renderFormInputs()}
        {error && <h1 className="error-message">{error}</h1>}
        <p onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login here.' : "Don't have an account? Register here."}
        </p>
      </div>
    </div>
  );
};

// Reusable Input component
const Input = ({ type, value, onChange, placeholder, required }) => (
  <input type={type} value={value} onChange={onChange} className="input" placeholder={placeholder} required={required} />
);

export default LoginForm;
