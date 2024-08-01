import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Address = ({ updateAddress }) => {
  const initialAddresses = [
    {
      id: 1,
      name: 'John Doe',
      addressLine1: '123 Main St',
      addressLine2: 'pat',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'USA'
    },
    {
      id: 2,
      name: 'Jane Smith',
      addressLine1: '456 Elm St',
      addressLine2: 'Apt 2',
      city: 'San Francisco',
      state: 'CA',
      zip: '94101',
      country: 'USA'
    }
  ];

  const [currentAddress, setCurrentAddress] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const navigate = useNavigate();
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showModal, setShowModal] = useState(false);
//   const [currentAddress, setCurrentAddress] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (currentAddress) {
      const { name, addressLine1, city, state, zip, country } = currentAddress;
      setIsFormValid(name && addressLine1 && city && state && zip && country);
    }
  }, [currentAddress]);

  const handleShowModal = (address = null) => {
    setCurrentAddress(address);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setCurrentAddress(null);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({ ...currentAddress, [name]: value });
  };

  const handleSaveAddress = () => {
    if (currentAddress.id) {
      // Update existing address
      setAddresses(addresses.map(addr => (addr.id === currentAddress.id ? currentAddress : addr)));
    } else {
      // Add new address
      setAddresses([...addresses, { ...currentAddress, id: addresses.length + 1 }]);
    }
    handleHideModal();
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  return (
    <Container className="py-4">
      <h1 className="h3 mb-4">Manage Addresses</h1>
      <Col xs={12} md={6}  className="mb-4 col-lg-12">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Button variant="outline-primary" onClick={() => handleShowModal()}>
            Add New Address
          </Button>
        </div>
      </Col>
      <Row>
        {addresses.map(address => (
          <Col xs={12} md={6} key={address.id} className="mb-4">
            <Card>
              <Card.Body>
                <h5>{address.name}</h5>
                <p>{address.addressLine1}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>{address.city}, {address.state} {address.zip}</p>
                <p>{address.country}</p>
                <div className="d-flex justify-content-between">
                  <Button variant="outline-dark" onClick={() => handleShowModal(address)}>Edit</Button>
                  <Button variant="outline-danger" onClick={() => handleDeleteAddress(address.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentAddress?.id ? 'Edit Address' : 'Add New Address'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={currentAddress?.name || ''} 
                onChange={handleInputChange} 
                placeholder="Enter name" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control 
                type="text" 
                name="addressLine1" 
                value={currentAddress?.addressLine1 || ''} 
                onChange={handleInputChange} 
                placeholder="Enter address line 1" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control 
                type="text" 
                name="addressLine2" 
                value={currentAddress?.addressLine2 || ''} 
                onChange={handleInputChange} 
                placeholder="Enter address line 2" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                name="city" 
                value={currentAddress?.city || ''} 
                onChange={handleInputChange} 
                placeholder="Enter city" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control 
                type="text" 
                name="state" 
                value={currentAddress?.state || ''} 
                onChange={handleInputChange} 
                placeholder="Enter state" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control 
                type="text" 
                name="zip" 
                value={currentAddress?.zip || ''} 
                onChange={handleInputChange} 
                placeholder="Enter ZIP code" 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control 
                type="text" 
                name="country" 
                value={currentAddress?.country || ''} 
                onChange={handleInputChange} 
                placeholder="Enter country" 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveAddress} disabled={!isFormValid}>
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Address;
