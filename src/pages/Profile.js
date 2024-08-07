import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
    setFormData({
      name: storedUserData.username || 'John Wick',
      email: storedUserData.email || 'john.Wick@example.com',
      phone: storedUserData.phone || '+911234567890',
      address: storedUserData.address || '42A Nanak Nagar Indore'
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    localStorage.setItem('user', JSON.stringify({
      username: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={4} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" />
            <Card.Body>
              <Card.Title className="text-center">User Profile</Card.Title>
              {isEditing ? (
                <Form onSubmit={handleSave}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formAddress" className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="me-2">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Form>
              ) : (
                <>
                  <Card.Text>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                  </Card.Text>
                  <Button variant="primary" className="w-100" onClick={handleEditClick}>
                    Edit Profile
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">Account Details</Card.Title>
              <Row>
                <Col md={6}>
                  <Card.Text>
                    <p><strong>Date of Birth:</strong> January 1, 1998</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Joined:</strong> January 1, 2024</p>
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Text>
                    <p><strong>Membership Level:</strong> Gold</p>
                    <p><strong>Points:</strong> 1200</p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
