import React from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";

import './UserFriends.css';
import { getDisplayName, getAvatar } from "../../../utils/helper";

const UserFriends = (props) => {
  const { friends, show, handleClose } = props;

  const renderModalBody = () => {

    // const { firstName, lastName, avatar } = props;
    return (
      friends.map(friend =>
        <>
          <Row>
            <Col><img src={getAvatar(friend.avatar)} className="user-friend-img" /></Col>
            <Col>{getDisplayName(friend.firstName, friend.lastName)}</Col>
          </Row>
          <hr />
        </>)
    )
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Friends</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalBody()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserFriends;