import React from 'react';
import userRequests from '../../../helpers/data/userRequests';
import authRequests from '../../../helpers/data/authRequests';
import googleButton from './images/googlebutton.png';

import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate()
      .then((results) => {
        console.log(results); // Magic is results.user.uid
        userRequests.getUserByUid(results.user.uid)
          .then((userObject) => {
            // console.log(userObject); // I see me! But let's delete me... now undefined. Good!
            if (!userObject) {
              const newUserObject = {
                userName: `${results.user.displayName}`,
                photo: `${results.user.photoURL}`,
                uid: `${results.user.uid}`,
              };
              console.log(newUserObject);
            }
          });
        this.props.history.push('/home');
      }).catch(err => console.error('error in authenticating', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger login-btn" onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button"/>
        </button>
      </div>
    );
  }
}

export default Auth;
