import React from "react";
import "./App.css";
import NavBar from './components/NavBar.js'
import SubNavBar from './components/SubNavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <h1>Yo I'm App!</h1>
    </div>
  );
}

export default App;
