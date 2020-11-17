import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar.jsx';
import HomePage from './components/pages/home';
import GiftGeneratorPage from './components/pages/page_gift_generator'
import Profile from './components/pages/Profile/Profile';

import './App.css';



function App() {

  useEffect(() => {
    console.log(process.env)
  })

  return (
    <Router>
      <Navbar />
      <div className="App-main-page">

        <header className="App-page-1">

          <Route exact path="/" component={HomePage} />
          <Route exact path="/gift_generator" component={GiftGeneratorPage} />
          <Route exact path="/profile" component={Profile} />

        </header>
      </div>
    </Router>

  );
}

export default App;
