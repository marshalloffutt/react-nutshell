import React from 'react';
import { Button } from 'reactstrap';
import friendShape from '../../helpers/props/friendShape';
import './FriendItem.scss';

class FriendItem extends React.Component {
  static propTypes = {
    friend: friendShape,
  };

  render() {
    const { friend, status } = this.props;
    const makeButtons = () => {
      if (status === 'confirmed') {
        return (
          <Button color="danger"><i className="far fa-trash-alt"></i></Button>
        );
      } return '';
    };

    return (
        <li className="friend-item" id={friend.id}>
          <span className="col-1"><img className="photo" src={friend.photo} alt={friend.userName}/></span>
          <span className="col-9">{friend.userName}</span>
          <div>{makeButtons()}</div>
        </li>
    );
  }
}

export default FriendItem;
