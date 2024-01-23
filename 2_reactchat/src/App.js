import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '50da16d4-edd2-4197-8ef0-ebfd3485badb';

const App = () => {

  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  // Function to check if the user is logged in
  const isUserLoggedIn = () => Boolean(username && password);

  // Display LoginForm if not logged in
  if (!isUserLoggedIn()) return <LoginForm />;

  // Render ChatEngine if logged in
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={username}
      userSecret={password}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
