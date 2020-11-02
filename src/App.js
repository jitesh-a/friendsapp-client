import React , { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Users from './components/Users/Users';

import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [viewUsers, setViewUsers] = useState(false);

  const handleDiscoverClick = (event) => {
    const value = !viewUsers;
    setViewUsers(value);
  }

  const renderHomeScreen = () => {
    return (
      <Row>
        <Col className="welcome-box">
          <h1>Welcome to Friendsbook</h1>
          <img src={logo} className="App-logo" alt="logo" align="center" />
          <h4>Lets Get started!</h4>
          <Button onClick={handleDiscoverClick}>Discover new users</Button>
        </Col>
      </Row>
    )
  }
  return (
    <Container fluid>
      {viewUsers ? <Users /> : renderHomeScreen()}
    </Container>
  );
}

export default App;
