import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Card,
  Modal,
} from "react-bootstrap";
import "./page.css";

const Address = ({ updateAddress }) => {
  const initialAddresses = [
    {
      id: 1,
      name: "John Doe",
      mobile: "+911234567890",
      addressLine1: "123 Main St",
      addressLine2: "Apt 1 front of 4th Floor",
      city: "Indore",
      state: "MP",
      zip: "452001",
      country: "India",
    },
    {
      id: 2,
      name: "Rahul G",
      mobile: "+910987654321",
      addressLine1: "123, MG Road",
      addressLine2: "Near Central Mall",
      city: "Gwalior",
      state: "MP",
      zip: "476115",
      country: "India",
    },
  ];

  const [currentAddress, setCurrentAddress] = useState({
    name: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [addresses, setAddresses] = useState(initialAddresses);
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (currentAddress) {
      const { name, mobile, addressLine1, city, state, zip, country } = currentAddress;
      setIsFormValid(name && mobile && addressLine1 && city && state && zip && country);
    }
  }, [currentAddress]);

  const handleShowModal = (address = null) => {
    setCurrentAddress(address || {
      name: "",
      mobile: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
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
      setAddresses(
        addresses.map((addr) =>
          addr.id === currentAddress.id ? currentAddress : addr
        )
      );
    } else {
      setAddresses([
        ...addresses,
        { ...currentAddress, id: addresses.length + 1 },
      ]);
    }
    handleHideModal();
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <Container className="py-4">
      <h1 className="h3 mb-4">Manage Addresses</h1>
      <Col xs={12} md={6} className="mb-4 col-lg-12">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Button variant="outline-primary" onClick={() => handleShowModal()}>
            Add New Address
          </Button>
        </div>
      </Col>
      <Row>
        {addresses.map((address) => (
          <Col xs={12} md={6} key={address.id} className="mb-4">
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>
                    <span className="fw-bold">{address.name}</span>
                  </li>
             
                  <li>
                    <span className="fw-bold-fc">{address.addressLine1}</span>
                  </li>
                  {address.addressLine2 && (
                    <li>
                      <span className="fw-bold-fc">{address.addressLine2}</span>
                    </li>
                  )}
                       <li>
                    <span className="fw-bold-fc">{address.mobile}</span>
                  </li>
                  <li>
                    <span className="fw-bold-fc">
                      {address.city}, {address.state} <strong>{address.zip}</strong>
                    </span>
                  </li>
                  <li>
                    <span>{address.country}</span>
                  </li>
                </ul>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-dark"
                    onClick={() => handleShowModal(address)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentAddress?.id ? "Edit Address" : "Add New Address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentAddress?.name || ""}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={currentAddress?.mobile || ""}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                name="addressLine1"
                value={currentAddress?.addressLine1 || ""}
                onChange={handleInputChange}
                placeholder="Enter address line 1"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                name="addressLine2"
                value={currentAddress?.addressLine2 || ""}
                onChange={handleInputChange}
                placeholder="Enter address line 2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={currentAddress?.city || ""}
                onChange={handleInputChange}
                placeholder="Enter city"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={currentAddress?.state || ""}
                onChange={handleInputChange}
                placeholder="Enter state"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={currentAddress?.zip || ""}
                onChange={handleInputChange}
                placeholder="Enter ZIP code"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={currentAddress?.country || ""}
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
          <Button
            variant="primary"
            onClick={handleSaveAddress}
            disabled={!isFormValid}
          >
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Address;
