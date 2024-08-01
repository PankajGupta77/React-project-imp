import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton,Form } from 'react-bootstrap';
import StarRating from './StarRating';
import "./page.css";
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Hair',
    products: [
      {
        id: 1,
        title: 'Herbal Shampoo',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹199.99',
        oldPrice: '₹299.99',
        discount: '33% off',
        rating: 4.5,
        description: 'Cleanses and nourishes your hair with herbal extracts.',
        onSale: true
      },
      {
        id: 2,
        title: 'Silky Smooth Conditioner',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹249.99',
        oldPrice: '₹349.99',
        discount: '29% off',
        rating: 4.0,
        description: 'Makes your hair smooth and shiny with silk proteins.'
      },
      {
        id: 3,
        title: 'Anti-Dandruff Shampoo',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '25% off',
        rating: 4.2,
        description: 'Effectively removes dandruff and prevents its recurrence.'
      }
    ]
  },
  {
    name: 'Face',
    products: [
      {
        id: 1,
        title: 'Refreshing Face Wash',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹99.99',
        oldPrice: '₹149.99',
        discount: '33% off',
        rating: 4.3,
        description: 'Cleanses your face gently and leaves it refreshed.'
      },
      {
        id: 2,
        title: 'Moisturizing Face Cream',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '25% off',
        rating: 4.1,
        description: 'Moisturizes and protects your face all day long.'
      },
      {
        id: 3,
        title: 'Anti-Aging Serum',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹299.99',
        oldPrice: '₹399.99',
        discount: '25% off',
        rating: 4.4,
        description: 'Reduces the appearance of fine lines and wrinkles.',
        onSale: true
      }
    ]
  },
  {
    name: 'Electronics',
    products: [
      {
        id: 1,
        title: 'Portable Fan',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹599.99',
        oldPrice: '₹799.99',
        discount: '25% off',
        rating: 4.3,
        description: 'Compact and portable fan for instant cooling.'
      },
      {
        id: 2,
        title: 'Bluetooth Speaker',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹999.99',
        oldPrice: '₹1299.99',
        discount: '23% off',
        rating: 4.5,
        description: 'High-quality sound with wireless connectivity.',
        onSale: true
      },
      {
        id: 3,
        title: 'Smartphone Charger',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70',
        price: '₹299.99',
        oldPrice: '₹399.99',
        discount: '25% off',
        rating: 4.1,
        description: 'Fast charging for all smartphone models.'
      }
    ]
  }
];

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('');
  const [filterBy, setFilterBy] = useState('');

  // Handle sorting
  const handleSortChange = (eventKey) => {
    setSortOrder(eventKey);
  };
const goToDetailPage = (id) =>{
  navigate(`/product/${id}`);
}
  // Handle filtering
  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  // Sort and filter products
  const getSortedAndFilteredProducts = (products) => {
    let filteredProducts = [...products];
    
    if (filterBy === 'price') {
      filteredProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (filterBy === 'rating') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sortOrder === 'low-to-high') {
      filteredProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortOrder === 'high-to-low') {
      filteredProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    return filteredProducts;
  };

  return (
    <Container className="mt-3">
       <Row className='mb-2'>
        <Col>
          <h1>Categories</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <DropdownButton id="dropdown-basic-button" title="Sort by" className="me-2" onSelect={handleSortChange}>
            <Dropdown.Item eventKey="low-to-high">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="high-to-low">High to Low</Dropdown.Item>
          </DropdownButton>

          <Form.Select aria-label="Filter" className="filter-dropdown" onChange={handleFilterChange}>
            <option value="">Filter by</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
          </Form.Select>
        </Col>
      </Row>

      {categories.map((category, idx) => (
        <div key={idx} className="category-section mb-3">
          <h3 className="category-title">{category.name}</h3>
          <Row>
            {getSortedAndFilteredProducts(category.products).map((product) => (
              <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm" onClick={() => goToDetailPage(product.id)} style={{ cursor: 'pointer' }}>
                {product.onSale && <span className="sale-badge">Sale!</span>}
                  <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                    <Card.Img variant="top" src={product.image} style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }} />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Text className="text-muted text-truncate">{product.description}</Card.Text>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
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
          <hr className="category-divider" /> {/* Line divider after each category */}
        </div>
      ))}
    </Container>
  );
};

export default CategoriesPage;
