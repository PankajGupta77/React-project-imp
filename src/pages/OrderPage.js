import React from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './page.css';

const OrderPage = () => {
  const navigate = useNavigate();

  const Gotodetails = (orderId) => {
    navigate('/orderDetails');
  };



  const orders = [
    {
      id: 'TXMP37P',
      date: '2024-08-01',
      total: 1200,
      status: 'Shipped',
      productTitle: 'MACWUD New Design Stylish 32 inch TV...',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/v/d/v/75-20-particle-board-8-9-mc-rw-01-macwud-75-32-wenge-original-imahyy5yhh8s3zya.jpeg?q=70'
    },
    {
      id: 'QFLM4PX',
      date: '2024-08-02',
      total: 800,
      status: 'Delivered',
      productTitle: 'Organic Tattva, Organic Unrefined Mustard',
      imageUrl: 'https://m.media-amazon.com/images/I/71GnS7JbjBL._AC_UL480_QL65_.jpg'
    },
    {
      id: 'XYZ123',
      date: '2024-08-03',
      total: 1000,
      status: 'Cancelled',
      productTitle: 'Scotch-Brite Sponge Wipe Resusable Kitchen',
      imageUrl: 'https://m.media-amazon.com/images/I/81hyQcJjfXL._AC_UL480_FMwebp_QL65_.jpg'
    }
  ];

  return (
    <Container className="py-5 order-page">
      <h1 className="h3 mb-4 text-center">Your Orders</h1>
      <Row>
        {orders.map((order, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="border-0 shadow-lg rounded">
              <div className="d-flex justify-content-center" style={{ height: '250px' }}>
                <Card.Img
                  variant="top"
                  src={order.imageUrl}
                  style={{ objectFit: 'contain', padding: '10px', maxHeight: '100%', width: 'auto' }}
                />
              </div>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span className='Title-card-order'>Order ID: <span className='Sub-Title-card-order'>{order.id}</span></span>
                  <span className={`badge ${order.status === 'Delivered' ? 'bg-info' : order.status === 'Cancelled' ? 'bg-danger' : 'bg-success'}`}>
                    {order.status}
                  </span>
                </Card.Title>
                <Card.Text className="">
                  <span><strong className='Title-card-order'>Product:</strong> <span className='Sub-Title-card-order'>{order.productTitle}</span></span>
                </Card.Text>
                <Card.Subtitle className="mb-2 Title-card-order">Date: <span className='Sub-Title-card-order'>{order.date}</span></Card.Subtitle>

                <Card.Text className="order-total">
                  <span className=" Title-card-order"><strong>Total:</strong> <span className='Sub-Title-card-order'>₹{order.total}</span></span>
                </Card.Text>
                <Button variant="primary" className="w-100 mb-2" onClick={() => Gotodetails(order.id)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderPage;
