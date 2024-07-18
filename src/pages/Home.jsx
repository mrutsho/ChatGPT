import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Messenger App</h1>
      <Link to="/chat">Go to Chat</Link>
    </div>
  );
}

export default Home;
