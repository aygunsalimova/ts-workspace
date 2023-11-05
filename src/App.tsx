import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './components/Dashboard';
// import Login from './components/LogIn';
import './App.css'

const App: React.FC = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = (token: string) => {
  //   // You can implement further validation here if needed
  //   if (token) {
  //     setLoggedIn(true);
  //   }
  // };

  
  return (
    <>
      {/* {loggedIn ? <Dashboard /> : <Login  onLogin={handleLogin} /> } */}
      <Dashboard />
  
    </>
  );
};

export default App;
