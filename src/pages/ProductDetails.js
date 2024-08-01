import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
// import './ProductDetails.css';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import "./page.css"
const product = {
  id: 1,
  images: [
    'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/u/i/h/2in1-automatic-convertible-transforming-robot-car-toy-with-light-original-imah2njfxethnj3r.jpeg?q=70'
  ],
  sku: 'RC1234',
  name: 'WISHKEY Remote Control Super High Speed Racing Car',
  size: 'Medium',
  color: 'Red',
  description: 'Durable remote control car with high speed and LED lights.',
  price: '₹99.99',
  reviews: [
    { rating: 5, comment: 'Amazing car! My kids love it.' },
    { rating: 4, comment: 'Good quality but a bit pricey.' },
    { rating: 2, comment: 'Poor Quality not working' }
  ],
  delete:'₹299.99',
  percentage:'33% off',
  relatedProducts: [
    {
      id: 2,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/u/i/h/2in1-automatic-convertible-transforming-robot-car-toy-with-light-original-imah2njfxethnj3r.jpeg?q=70',
      title: 'Chigy Wooh 3D Famous Remote Control Car For Kids High',
      price: '₹89.99',
      rating: 2.8,
      description: 'Durable headphones with deep bass and clear treble.',
      oldPrice: '₹799.99',
      discount: '25% off',

    },
    {
      id: 3,
      image: 'https://rukminim2.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70',
      title: 'fizz Monster Truck Rock Crawler metal',
      price: '₹109.99',
      rating: 2.8,
      description: 'Durable headphones with deep bass and clear treble.',
      oldPrice: '₹799.99',
      discount: '25% off',

    },
    {
      id: 4,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/1/r/x/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imahyh9vssmzggtn.jpeg?q=70',
      title: 'CADDLE & TOES Rock Car Remote Control',
      description: 'Durable headphones with deep bass and clear treble.',
      price: '₹109.99',
      rating: 4.8,
      oldPrice: '₹799.99',
      discount: '25% off',
    }
  ]
};

const ProductDetails = () => {
  const navigate = useNavigate();

  const Gotocartpage = () => {
    navigate(`/cart`);
  };
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    product.reviews.push({ rating: Number(newReview.rating), comment: newReview.comment });
    setNewReview({ rating: 0, comment: '' });
  };

  const renderStars = (rating) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < rating ? 'gold' : 'grey'} />
        ))}
      </>
    );
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={6}>
        <div className="card-img-container">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="img-thumbnail mt-2"
            style={{ width: '100%', height: 'auto' }}
          />
          </div>
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p>{product.description}</p>
          <h3>{product.price}<span>
          <span className='price-delete'>{product.delete}</span>
          <span className='percentage-off'>{product.percentage}</span>
            </span></h3>
          <Button variant="primary" className="mt-2" onClick={Gotocartpage}>Add to Cart</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <h3 className='recomanded'>Here are some related suggestions</h3>
  {product.relatedProducts.map((item) => (
    <Col key={item.id} md={4} className="mb-4">
      <Card className="h-100 shadow-sm card-hover" style={{ cursor: 'pointer' }}>
        <div className="d-flex justify-content-center" style={{ height: '253px' }}>
          <Card.Img variant="top" src={item.image} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate">{item.title}</Card.Title>
          <Card.Text className="text-muted text-truncate">{item.description}</Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center">
          <h6 className="mb-0 text-primarys">
                        {item.price}
                        <span className='price-delete'>{item.oldPrice}</span>
                        <span className='percentage-off'>{item.discount}</span>
                      </h6>
            <div className="d-flex align-items-center">
              <span className="me-2">{item.rating}</span>
              <StarRating rating={item.rating} />
              <i className="bi bi-star-fill text-warning"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      <div className="mt-4">
        <h5>Customer Reviews</h5>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="d-flex align-items-center">
              {renderStars(review.rating)}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h5>Add Your Review</h5>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>{star}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">Submit Review</Button>
        </Form>
      </div>
    </Container>
  );
};

export default ProductDetails;
