import React from 'react';
import './App.scss';
import HeaderComp from './components/header.component';
import { Route, Switch, withRouter } from 'react-router-dom'
import HomePage from './components/pages/homepage.components';
import Shop from './components/pages/shop.component';
import SignInSignUp from './components/pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDoc } from './firebase/firebase.util';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unSubsCribeFromAuth = null;
  componentDidMount() {
    this.unSubsCribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user })
      console.log(user)
      this.props.history.push(`/`);
      createUserProfileDoc(user);
    })

  }
  componentWillUnmount() {
    this.unSubsCribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <HeaderComp currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/SignInSignUp" component={SignInSignUp} />

        </Switch>


      </div>
    );
  }
}

export default withRouter(App);
