import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import Friends from '../components/pages/Friends/Friends';
import Articles from '../components/pages/Articles/Articles';
import Weather from '../components/pages/Weather/Weather';
import Events from '../components/pages/Events/Events';
import Messages from '../components/pages/Messages/Messages';
import Mavbar from '../components/Mavbar/Mavbar';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props } />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnMount() {
    this.removeListener();
  }

  render() {
    const { authed, pendingUser } = this.state;
    const logoutClicky = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
              <Mavbar isAuthed={authed} logoutClicky={logoutClicky}/>
              <div className="container">
                <div className="row">
                  <Switch>
                    <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
                    <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                    <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
                    <PrivateRoute path='/friends' component={Friends} authed={this.state.authed} />
                    <PrivateRoute path='/articles' component={Articles} authed={this.state.authed} />
                    <PrivateRoute path='/weather' component={Weather} authed={this.state.authed} />
                    <PrivateRoute path='/events' component={Events} authed={this.state.authed} />
                    <PrivateRoute path='/messages' component={Messages} authed={this.state.authed} />
                  </Switch>
                </div>
              </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
