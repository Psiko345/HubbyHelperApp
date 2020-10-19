import React from 'react';
import buySomethingIcon from './components/buySomethingIcon';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Give me something to buy!
        </p>

        <buySomethingIcon />

      </header>
    </div>
  );
}

export default App;
