import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import Navbar from './components/Navbar/Navbar';
import GiftGeneratorPage from './components/pages/page_gift_generator'
import './App.css';
import Profile from './components/pages/Profile';

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
