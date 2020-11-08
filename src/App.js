import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Header from './Components/Header';
import ShopPage from './Pages/Shop';



function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
