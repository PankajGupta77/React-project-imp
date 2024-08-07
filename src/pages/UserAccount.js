import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaHistory, FaAddressBook } from 'react-icons/fa';
// import './UserAccount.css'; // Custom CSS file for additional styling
import "./page.css"
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
    <Container className="user-account-container my-5">
      <h1 className="text-center mb-4">User Account</h1>
      <Row className="gy-4">
        <Col md={4}>
          <Card className="user-account-card text-center">
            <Card.Body>
              <div className="icon-container mb-3">
                <FaUser size={50} className="text-primary" />
              </div>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                View and update your profile information.
              </Card.Text>
              <button className="btn btn-primary w-100" onClick={goToProfilePage}>Go to Profile</button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="user-account-card text-center">
            <Card.Body>
              <div className="icon-container mb-3">
                <FaHistory size={50} className="text-primary" />
              </div>
              <Card.Title>Order History</Card.Title>
              <Card.Text>
                View your past orders.
              </Card.Text>
              <button className="btn btn-primary w-100" onClick={goToOrderPage}>View Orders</button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="user-account-card text-center">
            <Card.Body>
              <div className="icon-container mb-3">
                <FaAddressBook size={50} className="text-primary" />
              </div>
              <Card.Title>Address Book</Card.Title>
              <Card.Text>
                Manage your saved addresses.
              </Card.Text>
              <button className="btn btn-primary w-100" onClick={goToAddress}>Manage Addresses</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAccount;
