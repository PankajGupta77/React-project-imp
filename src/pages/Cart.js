import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();

  const GotoCheckout = () => {
    navigate('/checkout');
  };

  const cartItems = [
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70',
      name: 'Premium Quality Dress',
      style: 'fizz Monster Truck Rock Crawler metal',
      size: 'Small',
      color: 'Light Blue',
      price: '₹36.00',
      originalPrice: '₹45.00',
      quantity: 1
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/1/r/x/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imahyh9vssmzggtn.jpeg?q=70',
      name: 'High Quality Italic Dress',
      style: 'CADDLE & TOES Rock Car Remote Control',
      size: 'Small',
      color: 'Light Blue',
      price: '₹20.00',
      originalPrice: '₹30.00',
      quantity: 1
    }
  ];

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1>Customer’s Cart</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-4">
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <img src={item.image} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col md={8}>
                    <h5>{item.name}</h5>
                    <p><strong>Style:</strong> {item.style}</p>
                    <p><strong>Size:</strong> {item.size}</p>
                    <p><strong>Color:</strong> {item.color}</p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p>₹{item.price} <span className="text-muted text-decoration-line-through">{item.originalPrice}</span></p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div>
                        <p className="font-weight-bold">₹{item.price}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹56.00</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Discount <span className="badge bg-secondary">STUDENT</span></span>
                <span>-₹28.00 (5% GST)</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>₹8.00</span>
              </div>
              <div className="d-flex justify-content-between font-weight-bold">
                <span>Total</span>
                <span>₹36.00</span>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="outline-dark" onClick={GotoCheckout}>Go To Checkout</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
