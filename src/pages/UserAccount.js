import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UserAccount = () => {
  return (
    <Container>
      <h1>User Account</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                View and update your profile information.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order History</Card.Title>
              <Card.Text>
                View your past orders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Address Book</Card.Title>
              <Card.Text>
                Manage your saved addresses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAccount;
