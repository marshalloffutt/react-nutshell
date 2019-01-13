import React from 'react';
import friendShape from '../../helpers/props/friendShape';
import './FriendItem.scss';

class FriendItem extends React.Component {
  static propTypes = {
    friend: friendShape,
  };

  render() {
    const { friend } = this.props;

    return (
        <li className="friend-item" id={friend.id}>
          <span className="col-1"><img src={friend.photo} alt={friend.userName}/></span>
          <span className="col-4">{friend.userName}</span>
        </li>
    );
  }
}

export default FriendItem;
