// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h2>Lets Get Started</h2>
      <p>This is also visible</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
