import React from 'react';
import './App.scss';
import HeaderComp from './components/header.component';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/homepage.components';
import Shop from './components/pages/shop.component';
import SignInSignUp from './components/pages/signin-signup/signin-signup.component';
function App() {
  return (
    <div className="App">
      <HeaderComp/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/SignInSignUp" component={SignInSignUp} />
        
      </Switch>


    </div>
  );
}

export default App;
