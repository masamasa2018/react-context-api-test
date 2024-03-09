import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';
import UserUpdate from './UserUpdate';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
    <UserProvider>
      <div>
        <h1>User Management App</h1>
        <UserProfile />
        <UserUpdate />
      </div>
    </UserProvider>
    </div>
  );
}

export default App;
