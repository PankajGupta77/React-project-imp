import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const navigate = useNavigate();
  
  const goToAddress = () => {
    navigate('/address');
  };

  const goToOrderPage = () => {
    navigate('/order');
  };

  const goToProfilePage = () => {
    navigate('/profile');
  };

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
              <button className="btn btn-primary" onClick={goToProfilePage}>Go to Profile</button>
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
              <button className="btn btn-primary" onClick={goToOrderPage}>View Orders</button>
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
              <button className="btn btn-primary" onClick={goToAddress}>Manage Addresses</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAccount;
