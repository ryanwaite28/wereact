import { useState } from 'react';
import axios from 'axios';

const projectID = 'b97272b0-bbe5-40d9-9299-6c4a1846e8fb';
const apiURL = 'https://api.chatengine.io/chats';

const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const Input = ({ type, value, onChange, placeholder, required }) => (
  <input type={type} value={value} onChange={onChange} className="input" placeholder={placeholder} required={required} />
);

const Modal = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': credentials.username, 'User-Secret': credentials.password };

    try {
      setLoading(true);

      await axios.get(apiURL, { headers: authObject });

      setLocalStorage('username', credentials.username);
      setLocalStorage('password', credentials.password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} placeholder="Username" required />
          <Input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button" disabled={loading}>
              <span>{loading ? 'Loading...' : 'Start chatting'}</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
