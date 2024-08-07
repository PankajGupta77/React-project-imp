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
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/v/d/v/75-20-particle-board-8-9-mc-rw-01-macwud-75-32-wenge-original-imahyy5yhh8s3zya.jpeg?q=70',
    title: 'MACWUD New Design Stylish 32 inch TV Entertainment',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹99.99',
    rating: 1.5,
    oldPrice: '₹799.99',
    discount: '25% off',
    onSale: true
  },
  {
    id: 3,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/b/w/9/-original-imagtjkhtf4a6dgt.jpeg?q=70',
    title: 'ANIKAA Laura Engineered Wood TV Entertainment Unit',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8,
    oldPrice: '₹799.99',
    discount: '25% off',
  },
  {
    id: 4,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/s/g/p/-original-imagrtbkkrxfdxeu.jpeg?q=70',
    title: 'Flipkart Perfect Homes Kamet Engineered Wood TV',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8,
    oldPrice: '₹799.99',
    discount: '25% off',
    onSale: true
  },
  {
    id: 5,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/l/s/w/20-130-mdf-15-tv-cabinet-entertainment-unit-aariwoody-futuristic-original-imahyyr4vb8kgrfx.jpeg?q=70',
    title: 'Flipkart Perfect Homes Phonox Engineered Wood TV',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 2.8,
    oldPrice: '₹799.99',
    discount: '25% off',
  },
  {
    id: 6,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/i/i/h/20-particle-board-128-8-6-sn-097-snq-81-42-black-white-original-imagqq7yjr3x3hft.jpeg?q=70',
    title: 'SNQ Engineered Wood Wall Mount TV Unit/TV Stand/TV',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8,
    oldPrice: '₹799.99',
    discount: '25% off',
  },
  {
    id: 7,
    image: 'https://rukminim2.flixcart.com/image/612/612/l071d3k0/tv-entertainment-unit/m/0/o/-original-imagcfhne9zbhema.jpeg?q=70',
    title: 'Flipkart Perfect Homes Sirena Engineered Wood TV',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8,
    oldPrice: '₹799.99',
    discount: '25% off',
    onSale: true
  },
  {
    id: 7,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/b/r/g/36-140-particle-board-24-6-tu-skd-lf-bluewud-59-5-55-walnut-original-imagg2fkq89fv5ja.jpeg?q=70',
    title: 'Flipkart Perfect Homes Kamet Engineered Wood TV',
    description: 'Durable headphones with deep bass and clear treble.',
    price: '₹109.99',
    rating: 4.8,
    oldPrice: '₹799.99',
    discount: '25% off',
    onSale: true
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
            {product.onSale && <span className="sale-badge">Sale!</span>}
              <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                <Card.Img className='Large-Small-screen' variant="top" src={product.image} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto',minWidth:'-webkit-fill-available' }} />
              </div>
              <Card.Body className="d-flex flex-column">
                <h1 className="text-truncate Text-css">{product.title}</h1>
                <Card.Text className="text-muted text-truncate">{product.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  {/* <h6 className="mb-0 text-primarys">{product.price}<span className='price-delete'>₹21,999</span><span className='percentage-off'>23% off</span></h6> */}
                  <h6 className="mb-0 text-primarys">
                        {product.price}
                        <span className='price-delete'>{product.oldPrice}</span>
                        <span className='percentage-off'>{product.discount}</span>
                      </h6>
                  
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
