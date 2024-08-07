import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton,Form } from 'react-bootstrap';
import StarRating from './StarRating';
import "./page.css";
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Featured products',
    products: [
      {
        id: 1,
        title: 'Max Care Cold Pressed Virgin Coconut Oil, 500ml',
        image: 'https://m.media-amazon.com/images/I/61oagbcgAtS._SY679_.jpg',
        price: '₹599.99',
        oldPrice: '₹799.99',
        discount: '25% off',
        rating: 4.3,
        description: 'Compact and portable fan for instant cooling.'
      },
      {
        id: 2,
        title: 'Borges Olive Oil for Indian Cooking - 2 L |75% MUFA',
        image: 'https://m.media-amazon.com/images/I/71Y0DuEYXXL._AC_UL480_QL65_.jpg',
        price: '₹999.99',
        oldPrice: '₹1299.99',
        discount: '23% off',
        rating: 4.5,
        description: 'High-quality sound with wireless connectivity.',
        onSale: true
      },
      {
        id: 3,
        title: 'Organic Tattva, Organic Unrefined Mustard/Sarso Cooking Oil (1L)',
        image: 'https://m.media-amazon.com/images/I/71GnS7JbjBL._AC_UL480_QL65_.jpg',
        price: '₹299.99',
        oldPrice: '₹399.99',
        discount: '25% off',
        rating: 4.1,
        description: 'Fast charging for all smartphone models.'
      }
    ]
  },
  {
    name: 'Hair',
    products: [
      {
        id: 1,
        title: 'Herbal Shampoo',
        image: 'https://m.media-amazon.com/images/I/61vHw06cE0L._AC_UL480_FMwebp_QL65_.jpg',
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
        image: 'https://m.media-amazon.com/images/I/51Iium9ms2L._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹249.99',
        oldPrice: '₹349.99',
        discount: '29% off',
        rating: 4.0,
        description: 'Makes your hair smooth and shiny with silk proteins.'
      },
      {
        id: 3,
        title: 'Anti-Dandruff Shampoo',
        image: 'https://m.media-amazon.com/images/I/511s5NsSlsL._AC_UL480_FMwebp_QL65_.jpg',
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
        image: 'https://m.media-amazon.com/images/I/41CWzyMvPSL._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹99.99',
        oldPrice: '₹149.99',
        discount: '33% off',
        rating: 4.3,
        description: 'Cleanses your face gently and leaves it refreshed.'
      },
      {
        id: 2,
        title: 'Moisturizing Face Cream',
        image: 'https://m.media-amazon.com/images/I/61VxsUy5wmL._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '25% off',
        rating: 4.1,
        description: 'Moisturizes and protects your face all day long.'
      },
      {
        id: 3,
        title: 'Anti-Aging Serum',
        image: 'https://m.media-amazon.com/images/I/510CTJ7HzeL._AC_UL480_FMwebp_QL65_.jpg',
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
        image: 'https://m.media-amazon.com/images/I/71YS9UrcWpL._AC_UY327_FMwebp_QL65_.jpg',
        price: '₹599.99',
        oldPrice: '₹799.99',
        discount: '25% off',
        rating: 4.3,
        description: 'Compact and portable fan for instant cooling.'
      },
      {
        id: 2,
        title: 'Bluetooth Earbuds',
        image: 'https://m.media-amazon.com/images/I/71DKCJdiEVL._AC_UL480_FMwebp_QL65_.jpg',
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
        image: '	https://m.media-amazon.com/images/I/51LxUhwzVML._AC_UY327_FMwebp_QL65_.jpg',
        price: '₹299.99',
        oldPrice: '₹399.99',
        discount: '25% off',
        rating: 4.1,
        description: 'Fast charging for all smartphone models.'
      }
    ]
  },
  {
    name: 'Home & Kitchen',
    products: [
      {
        id: 1,
        title: 'Scotch-Brite Sponge Wipe Resusable Kitchen',
        image: 'https://m.media-amazon.com/images/I/81hyQcJjfXL._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '33% off',
        rating: 4.5,
        description: 'Cleanses your home and kitchen gently.',
        onSale: true
      },
      {
        id: 2,
        title: 'HIT Anti Roach Gel - Cockroach Killer',
        image: 'https://m.media-amazon.com/images/I/71hhQA1kthL._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '33% off',
        rating: 4.5,
        description: 'Cleanses your home and kitchen gently.'
      },
      {
        id: 3,
        title: 'Cri8Hub Stainless Steel 2 Tiered Shelf Kitchen',
        image: 'https://m.media-amazon.com/images/I/51l4OxbiUkL._AC_UL480_FMwebp_QL65_.jpg',
        price: '₹149.99',
        oldPrice: '₹199.99',
        discount: '33% off',
        rating: 4.5,
        description: 'Cleanses your home and kitchen gently.'
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
                    {/* <Card.Title className="text-truncate">{product.title}</Card.Title> */}
                <h1 className="text-truncate Text-css">{product.title}</h1>

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
