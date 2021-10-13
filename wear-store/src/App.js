import React from 'react';
import './App.scss';
import HeaderComp from './components/header.component';
import { Route, Switch, withRouter } from 'react-router-dom'
import HomePage from './components/pages/homepage.components';
import Shop from './components/pages/shop.component';
import SignInSignUp from './components/pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDoc } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectUser } from './redux/selectors/user-selector';
import CheckOut from './components/checkout.page';

class App extends React.Component {


  unSubsCribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubsCribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        // this.props.history.push(`/`);
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(async snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }, () => {
            console.log(this.state);
          });

        })
      } else {
        setCurrentUser(null)
      }
    })

  }
  componentWillUnmount() {
    this.unSubsCribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <HeaderComp />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/Shop" component={Shop} />
          <Route  path="/SignInSignUp" component={SignInSignUp} />
          <Route  path="/checkout" component={CheckOut}/> 
        
        </Switch>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({

  currentUser: selectUser(state)

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
