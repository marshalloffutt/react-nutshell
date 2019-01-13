import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';
import FriendItem from '../../FriendItem/FriendItem';
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
        console.log(users);
        const potentials = users.filter(user => !user.isAccepted && !user.isPending);
        const pending = users.filter(user => !user.isAccepted && user.isPending);
        const confirmed = users.filter(user => user.isAccepted);
        this.setState({
          users,
          potentials,
          pending,
          confirmed,
        });
      })
      .catch(err => console.error('error in SMASH', err));
  }

  render() {
    const {
      potentials,
      pending,
      confirmed,
    } = this.state; // I thought this should be props.... but it only works if it is state

    const friendItemComponents = friendArray => (
      friendArray.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))
    );

    return (
      <div className='Friends container'>
        <h2>Friends</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h3>Potential Friends</h3>
              <ul>{friendItemComponents(potentials)}</ul>
            </div>
            <div className="col-sm">
              <h3>Pending Requests</h3>
              <ul>{friendItemComponents(pending)}</ul>
            </div>
            <div className="col-sm">
              <h3>Friends</h3>
              <ul>{friendItemComponents(confirmed)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
