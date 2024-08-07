import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/v/d/v/75-20-particle-board-8-9-mc-rw-01-macwud-75-32-wenge-original-imahyy5yhh8s3zya.jpeg?q=70',
      name: 'ANIKAA Laura Engineered Wood TV Entertainment',
      style: '(7 in x 2 ft 5 in x 2 ft 5 in)',
      size: 'Small',
      color: 'Light Blue',
      price: 36.00,
      originalPrice: 45.00,
      quantity: 1
    },
    {
      id: 2,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/b/w/9/-original-imagtjkhtf4a6dgt.jpeg?q=70',
      name: 'MACWUD New Design Stylish 32 inch TV Entertainment',
      style: '(7 in x 2 ft 5 in x 2 ft 5 in)',
      size: 'Small',
      color: 'Light Blue',
      price: 20.00,
      originalPrice: 30.00,
      quantity: 1
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
          : item
      ).filter(item => item.quantity > 0) // Filter out items with quantity 0
    );
  };

  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const GotoCheckout = () => {
    navigate('/checkout', { state: { cartItems, totalAmount } });
  };

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1>Customer’s Cart</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            // <p>Your cart is empty.</p>
            <div className='Empty-card'>
              <div className="text-center">
                <h2>Your cart is empty.</h2>
                <p>Start adding items to your cart by clicking on the "Add to Cart" button on the product pages.</p>
              </div>
            </div>
            
          ) : (
            cartItems.map((item, index) => (
              <Card key={index} className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <img src={item.image} alt={item.name} className="img-fluid" />
                    </Col>
                    <Col md={8}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>{item.name}</h5>
                        <Button variant="outline-danger" onClick={() => handleDelete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                      <p><strong>Style:</strong> {item.style}</p>
                      <p><strong>Size:</strong> {item.size}</p>
                      <p><strong>Color:</strong> {item.color}</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p><strong>Amount:</strong> ₹{item.price} <span className="text-muted text-decoration-line-through">₹{item.originalPrice}</span></p>
                          <p>
                            <strong>Quantity:</strong>
                            <Button className='mx-2' variant="outline-dark" size="sm" onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</Button>
                            {item.quantity}
                            <Button variant="outline-dark" className='mx-2' size="sm" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                          </p>
                        </div>
                        <div>
                          <p className="font-weight-bold"><strong>Total Amount</strong> ₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              {totalAmount > 0 && (
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="outline-dark" onClick={GotoCheckout}>Go To Checkout</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
