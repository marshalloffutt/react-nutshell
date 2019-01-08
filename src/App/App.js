import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  // componentWillMount() {
  //   this.removeListener();
  // }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const { authed } = this.state;

    if (!authed) {
      return (
        <div className="App">
          <Auth />
        </div>
      );
    }
    return (
      <div className="App">
        You are authenticated.
      </div>
    );
  }
}

export default App;
