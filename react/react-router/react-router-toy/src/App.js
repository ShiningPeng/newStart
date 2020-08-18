import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Link'
import Route from './Route'
import { BrowserRouter } from './BrowserRouter'

function User() {
  return 'User'
}
function About() {
  return 'About'
}
function Home() {
  return 'Home'
}

function App() {
  return (
    <BrowserRouter>
      <div >
        <Link to='/user' >User</Link>
        <Link to='/about' >About</Link>

        <Route path="/user" component={User}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" component={Home}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
