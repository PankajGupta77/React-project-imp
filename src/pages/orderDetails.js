// OrderDetails.js
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const navigate = useNavigate();
  
  const handleContinueShopping = () => {
      navigate('/');
  };

  const orderDetails = {
    orderId: 'ORD123456',
    date: 'August 1, 2024',
    total: '₹500',
    items: [
      {
        id: 1,
        name: 'Product 1',
        quantity: 2,
        price: '₹200',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      addressLine1: '123 Main St',
      addressLine2: 'Apt 4B',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'USA'
    },
    billingAddress: {
      name: 'John Doe',
      addressLine1: '123 Main St',
      addressLine2: 'Apt 4B',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'USA'
    },
    tracking: {
      status: 'Shipped',
      trackingNumber: 'TRACK123456',
      carrier: 'DHL'
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Order Confirmation</h1>

      {/* Order Details */}
      <Card className="mb-4 border-0 shadow-sm rounded">
        <Card.Header className="bg-primary text-white">Order Details</Card.Header>
        <Card.Body>
          <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
          <p><strong>Date:</strong> {orderDetails.date}</p>
          <p><strong>Total Amount:</strong> {orderDetails.total}</p>
        </Card.Body>
      </Card>

      {/* Items */}
      <h4 className="mb-3">Items</h4>
      <Row>
        {orderDetails.items.map(item => (
          <Col xs={12} md={6} lg={4} key={item.id} className="mb-3">
            <Card className="border-0 shadow-sm rounded">
              <Row noGutters>
                <Col xs={4}>
                  <Card.Img variant="top" src={item.image} className="rounded-start" />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <p><strong>Quantity:</strong> {item.quantity}</p>
                      <p><strong>Price:</strong> {item.price}</p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Shipping Address */}
      <Card className="mt-4 border-0 shadow-sm rounded">
        <Card.Header className="bg-info text-white">Shipping Address</Card.Header>
        <Card.Body>
          <p><strong>Name:</strong> {orderDetails.shippingAddress.name}</p>
          <p><strong>Address Line 1:</strong> {orderDetails.shippingAddress.addressLine1}</p>
          <p><strong>Address Line 2:</strong> {orderDetails.shippingAddress.addressLine2}</p>
          <p><strong>City:</strong> {orderDetails.shippingAddress.city}</p>
          <p><strong>State:</strong> {orderDetails.shippingAddress.state}</p>
          <p><strong>ZIP Code:</strong> {orderDetails.shippingAddress.zip}</p>
          <p><strong>Country:</strong> {orderDetails.shippingAddress.country}</p>
        </Card.Body>
      </Card>

      {/* Billing Address */}
      <Card className="mt-4 border-0 shadow-sm rounded">
        <Card.Header className="bg-info text-white">Billing Address</Card.Header>
        <Card.Body>
          <p><strong>Name:</strong> {orderDetails.billingAddress.name}</p>
          <p><strong>Address Line 1:</strong> {orderDetails.billingAddress.addressLine1}</p>
          <p><strong>Address Line 2:</strong> {orderDetails.billingAddress.addressLine2}</p>
          <p><strong>City:</strong> {orderDetails.billingAddress.city}</p>
          <p><strong>State:</strong> {orderDetails.billingAddress.state}</p>
          <p><strong>ZIP Code:</strong> {orderDetails.billingAddress.zip}</p>
          <p><strong>Country:</strong> {orderDetails.billingAddress.country}</p>
        </Card.Body>
      </Card>

      {/* Tracking Information */}
      <Card className="mt-4 border-0 shadow-sm rounded">
        <Card.Header className="bg-success text-white">Tracking Information</Card.Header>
        <Card.Body>
          <p><strong>Status:</strong> {orderDetails.tracking.status}</p>
          <p><strong>Tracking Number:</strong> {orderDetails.tracking.trackingNumber}</p>
          <p><strong>Carrier:</strong> {orderDetails.tracking.carrier}</p>
        </Card.Body>
      </Card>

      {/* Continue Shopping Button */}
      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleContinueShopping}>Continue Shopping</Button>
      </div>
    </Container>
  );
};

export default OrderDetails;
