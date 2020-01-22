import React, { Component } from 'react';
import './App.css';
import NewPet from './components/AddNewPet/AddNewPet';
import AllPets from './components/AllPets';

class App extends Component {
  render () {
    return (
      <div className="App">
        <NewPet />
        <AllPets />
      </div>

    )
  }
}

export default App;
