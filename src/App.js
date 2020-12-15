import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Header from './Components/Header';
import ShopPage from './Pages/Shop';
import signInsignUpPage from './Pages/signIn-signUp-page/signIn-signUp-page';
import { auth } from './firebase/firebase';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/Signin' component={signInsignUpPage} />
        </Switch>
      </div>
    );
  }
}

//new button. 

export default App;
