import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import './Friends.scss';

class Friends extends React.Component {
  state = {
    users: [],
    potentials: [],
    confirmed: [],
    pending: [],
  }

  componentDidMount() {
    smashRequests.usersAndFriends()
      .then((results) => {
        console.log(results);
      }).catch(err => console.error('error in smash', err));
  }

  render() {
    return (
      <div className='Friends container'>
        <h2>Friends</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Potential Friends
              <ul className="potential"></ul>
            </div>
            <div className="col-sm">
              Pending Requests
              <ul className="pending"></ul>
            </div>
            <div className="col-sm">
              Friends
              <ul className="confirmed"></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
