import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import banner1 from '../assests/banner/banner1.png';
import banner2 from '../assests/banner/banner2.png';
import banner3 from '../assests/banner/banner3.png';
import { useNavigate } from 'react-router-dom';
import "./page.css"
import StarRating from './StarRating';
const products = [
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
    title: 'WISHKEY Remote Control Super High Speed Racing Car',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹99.99',
    rating: 1.5
  },
  {
    id: 3,
    image: 'https://rukminim2.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70',
    title: 'fizz Monster Truck Rock Crawler metal',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8
  },
  {
    id: 4,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/1/r/x/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imahyh9vssmzggtn.jpeg?q=70',
    title: 'CADDLE & TOES Rock Car Remote Control',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8
  },
  {
    id: 5,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/e/j/2/-original-imah38cqkehzsryg.jpeg?q=70',
    title: 'Aganta Remote Control Car Electronic 3D Lights',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 2.8
  },
  {
    id: 6,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/drone/i/e/y/100-60-1-4k-wifi-dual-camera-drone-for-adults-kids-with-2-original-imahfzm9pa8tz6y4.jpeg?q=70',
    title: 'AR KIDS TOYS Mini Monster Truck Friction',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8
  },
  {
    id: 7,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/a/i/q/-original-imagz5qebmefu4y9.jpeg?q=70',
    title: 'CADDLE & TOES Rock Car Remote Control ',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8
  }
];
const Homepage = () => {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container className='mt-4'>
      {/* Carousel Section */}
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img 
                className="d-block w-100" 
                style={{ height: '200px', objectFit: 'cover' }} 
                src={banner1} 
                alt="First slide" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                className="d-block w-100" 
                style={{ height: '200px', objectFit: 'cover' }} 
                src={banner2}
                alt="Second slide" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                className="d-block w-100" 
                style={{ height: '200px', objectFit: 'cover' }} 
                src={banner3}
                alt="Third slide" 
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Product Cards Section */}
      <Row className="py-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm" onClick={() => goToDetailPage(product.id)} style={{ cursor: 'pointer' }}>
              <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                <Card.Img variant="top" src={product.image} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{product.title}</Card.Title>
                <Card.Text className="text-muted text-truncate">{product.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 text-primarys">{product.price}<span className='price-delete'>₹21,999</span><span className='percentage-off'>23% off</span></h6>
                  
                  <div className="d-flex align-items-center">
                    <span className="me-2">{product.rating}</span>
                    <StarRating rating={product.rating} />
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;
