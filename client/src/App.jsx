import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/pages/home';
import GiftGenerator from './components/pages/gift_generator'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App-main-page">
        <header className="App-page-1">

          <HomePage />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gift_generator" component={GiftGenerator} />

        </header>
      </div>
    </Router>

  );
}

export default App;
