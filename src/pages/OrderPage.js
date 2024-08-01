// OrderPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const navigate = useNavigate();
 
  const Gotodetails= () => {
    navigate('/orderDetails')
  }
  const orderImageUrl = 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70';
  const orderImageUrl1 = 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70';

  return (
    <Container className="py-5">
      <h1 className="h3 mb-4 text-center">Your Orders</h1>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="border-0 shadow-lg rounded">
            {/* <Card.Img variant="top" src={orderImageUrl} alt="Order Image" className="card-img-top rounded-top" /> */}
            <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                <Card.Img variant="top" src={orderImageUrl} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} />
              </div>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span>Order ID: TXMP37P</span>
                <span className="badge bg-success">Shipped</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Date: 2024-08-01</Card.Subtitle>
              <Card.Text>
                <strong>Total:</strong> ₹1200
              </Card.Text>
              
                <Button variant="primary" className="w-100" onClick={Gotodetails}>
                  View Details
                </Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="border-0 shadow-lg rounded">
            {/* <Card.Img variant="top" src={orderImageUrl} alt="Order Image" className="card-img-top rounded-top" /> */}
            <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                <Card.Img variant="top" src={orderImageUrl} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} />
              </div>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span>Order ID: QFLM4PX</span>
                <span className="badge bg-info">Delivered</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Date: 2024-08-02</Card.Subtitle>
              <Card.Text>
                <strong>Total:</strong> ₹800
              </Card.Text>
            
                <Button variant="primary" onClick={Gotodetails} className="w-100">
                  View Details
                </Button>
           
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
