import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';
import './Friends.scss';


class Friends extends React.Component {
  state = {
    users: [],
    potentials: [],
    confirmed: [],
    pending: [],
  }

  componentDidMount() {
    this.getAndSortUsers();
  }

  getAndSortUsers = () => {
    const uid = authRequests.getCurrentUid();
    smashRequests
      .usersAndFriends(uid)
      .then((results) => {
        const users = results;
        const potentials = users.filter(user => !user.isAccepted && !user.isPending);
        const pendings = users.filter(user => !user.isAccepted && user.isPending);
        const confirmed = users.filter(user => user.isAccepted);
        this.setState({
          users,
          potentials,
          pendings,
          confirmed,
        });
      })
      .catch(err => console.error('error in SMASH', err));
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
