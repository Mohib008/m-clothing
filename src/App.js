import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Header from './Components/Header';




const HatsPage = () => (
  <div> <h1>Hats Page </h1></div>
    )

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
