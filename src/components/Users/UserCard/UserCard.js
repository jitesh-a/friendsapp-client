import React from 'react';
import { Card, Button } from "react-bootstrap";
import './UserCard.css';
import { getDisplayName, getAvatar } from '../../../utils/helper';

const UserCard = (props) => {
  const { id, firstName, lastName, avatar, handleViewFriendsClick } = props;

  const onClick = (e) => {
    handleViewFriendsClick(id);
  }

  return (
    <Card className="user-card">
      <Card.Img className="user-card-img" variant="top" src={getAvatar(avatar)} />
      <Card.Body>
        <Card.Title>{getDisplayName(firstName, lastName)}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
       </Card.Text> */}
        <Button variant="primary" onClick={onClick}>View Friends</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard;