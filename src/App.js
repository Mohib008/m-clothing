import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Header from './Components/Header';




const HatsPage = (props) => {
  console.log(props)
  return (
  <div> <h1>Hats Page </h1></div>
    )
  }

const  TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1> TOPIC LIST Page </h1>
    </div>
  )
}

const TopicDetail = () => {
  return (
    <div>
      <h1> TOPIC DETAIL Page </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route path='/' component={ HomePage } />
      <Route path='/hats' component={HatsPage} />
      <Route exact path='/TopicList' component={TopicList} />
      <Route path='/TopicDetail' component={TopicDetail} />
    </Switch>
    </div>
  );
}

export default App;
