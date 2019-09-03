import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {


  render() {
    const invt = inventory.map(({ name }, i) => {
      return <button>{name}</button>
    })
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {/* List product categories here */}
        </ul>

        <ul>
          {invt}
        </ul>

      </div>
    );
  }
}

export default App;
