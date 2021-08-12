import React from 'react';
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log in</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
      { isAuthenticated && user && (<div>
        <img src={user.picture} alt={user.name}></img>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>)}
    </div>
  );
}

export default App;
