import React from 'react';
import Jumbotron from "./components/jumbotron/jumbotron";
import GameContainer from "./components/gameContainer";
import './App.css';

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <GameContainer />
  </div>
);

export default App;
