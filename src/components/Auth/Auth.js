import React from 'react';
import './Auth.scss';
import authRequests from '../../helpers/data/authRequests';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      // do something here
    }).catch(err => console.error('there was an error'));
  }

  render() {
    return (
      <input
        className="login-btn"
        type="image"
        src="https://www.htps.us/UserFiles/Servers/Server_791028/Templates/login-google.png"
        alt="login with google"
        onClick={this.authenticateUser}
      />
    );
  }
}

export default Auth;
