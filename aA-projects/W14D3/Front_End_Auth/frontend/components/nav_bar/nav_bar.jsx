import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeBar from "./welcome_bar_container";

export default ({ currentUser, logout }) => {
  let display 
  if (!currentUser) {
    display = <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
  } else if(currentUser && currentUser.newUser) {
    display = <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  } else { 
    display =<div>
     <p>Welcome, {currentUser.username}</p>
     <button onClick={logout}>Log Out</button>
    </div>
  }

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
