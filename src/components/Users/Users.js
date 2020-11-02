import React, { useState, useEffect } from "react";
import { getUsers, getUserFriends } from "../../services/user.service";
import { Row, Col, Button } from "react-bootstrap";
import UserCard from "./UserCard/UserCard";
import UserFriends from "./UserFriends/UserFriends";
import { renderLoading } from "../../utils/helper";

const UsersComponent = (props) => {
  const [users, setUsers] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    limit: 4,
    offset: 0,
    total: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    if (pageInfo.offset > pageInfo.total) {
      return;
    } else {
      setIsLoading(true);
      try {
        const result = await getUsers(pageInfo.offset, pageInfo.limit);
        // console.log(result.users);
        const newUsers = [...users, ...result.users];
        setUsers([...newUsers]);
        const newPageInfo = { ...pageInfo };
        newPageInfo.total = result.total;
        newPageInfo.offset += pageInfo.limit;
        setPageInfo(newPageInfo);
      } catch (error) {
        setError(error.error);
      }
      setIsLoading(false);
    }
  }

  const fetchUserFriends = async (id) => {
    setIsLoading(true);
    try {
      const result = await getUserFriends(id);
      // console.log(result.users);
      const friends = [...result.friends];
      setUserFriends(friends);
      setShowModal(true);
    } catch (error) {
      setError(error.error);
    }
    setIsLoading(false);
  }

  // useEffect(() => {
  //   if (userFriends.length > 0) setShowModal(true);
  // }, [userFriends])

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleLoadMoreClick = () => {
    fetchUsers();
  }

  const handleViewFriendsClick = (id) => {
    fetchUserFriends(id);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const renderLoadMore = () => {
    return pageInfo.offset <= pageInfo.total ? (
      <Button onClick={handleLoadMoreClick}>Load more</Button>
    ) : []
  }

  const renderUserFriends = () => {
    return (
      <UserFriends show={showModal} friends={userFriends} handleClose={handleCloseModal} />
    )
  }

  const renderCards = () => {
    return (
      users.map(user =>
        <Col key={user.id}>
          <UserCard {...user} handleViewFriendsClick={handleViewFriendsClick} />
        </Col>)
    )
  }

  const renderHeader = () => {
    return (
      <Col lg={12} xs={12} md={12} sm={12}>
        <h2>Users</h2><hr />
      </Col>
    )
  }

  return (
    <>
      {
        isLoading ?
          renderLoading(isLoading) :
          <div>
            <Row>
              {renderLoading(isLoading)}
              {renderHeader()}
              <hr />
              {renderCards()}

              {/* </Col> */}
            </Row >
            {renderLoadMore()}
            {renderUserFriends()}
          </div>
      }
    </>
  )
}

export default UsersComponent;