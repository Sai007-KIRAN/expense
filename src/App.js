import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './App.css';
import CombineInEx from './components/CombineInEx';
import Login from './components/Login';

function App() {
  const [isLogedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  return (
    <div>
      {isLogedIn ? (
        <div>
          <ResponsiveAppBar onLogOut={handleLogOut} />
          <CombineInEx />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
