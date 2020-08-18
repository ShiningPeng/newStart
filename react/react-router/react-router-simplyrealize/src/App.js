import React from 'react';
import logo from './logo.svg';
import './App.css';

function About(){
  return 'About'
}

function Home(){
  return 'Home'
}

function User(){
  return 'User'
}

function App() {
  return (
    <div className="App">
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      <Route path="/user" component={User} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
