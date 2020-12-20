import React, { Component } from 'react'
import './App.css';
import MyThemeContext from './MyThemeContext';
import NavBar from './Screens/NavBar';
import ProgrammingList from './Screens/ProgrammingList';
import ToggleButton from './Screens/ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyThemeContext>
          <NavBar />
          <ProgrammingList />
          <ToggleButton />
        </MyThemeContext>
      </header>
    </div>
  );
}

export default App;
