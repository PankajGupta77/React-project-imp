import React from 'react';
import { useLocation } from 'react-router-dom';
import "./page.css"
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

  const discountRate = 0.05;
  const shippingCost = 8.00;
  const taxRate = 0.05;

  const discount = totalAmount * discountRate;
  const tax = totalAmount * taxRate;
  const finalTotal = totalAmount + shippingCost - discount + tax;
  const ChangeAdress = () => {
    navigate('/address')
  }
  const ordeconfiramtion = () => {
    navigate('/order')
  }
  return (

    <div className="container py-4">
      <div className="d-flex flex-column align-items-start">
        <h1 className="h3">Order #13432</h1>
        <span className="text-muted">21st March 2024 at 10:34 PM</span>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-xl-8 mb-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Customer’s Cart</h5>
            </div>
            <div className="card-body">
              {cartItems.map((item, index) => (
                <div className="d-flex flex-column flex-md-row align-items-start mb-4" key={index}>
                  <div className="w-100 w-md-40 mb-4 mb-md-0">
                    <img
                      className="img-fluids"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="d-flex flex-column w-100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <h5 className="mb-3">{item.name}</h5>
                        <p className="mb-3"><strong>Style:</strong> {item.style}</p>
                        <p className="mb-3"><strong>Size:</strong> {item.size}</p>
                        <p className="mb-3"><strong>Color:</strong> {item.color}</p>
                        <p className="mb-3"><strong>Amount:</strong>₹{item.price} <span className="text-muted text-decoration-line-through">₹{item.originalPrice}</span></p>
                        <p className="mb-3"><strong>Quantity:</strong> {item.quantity}</p>
                        <p className="mb-3 font-weight-bold"><strong>Total Amount:</strong>₹{item.price * item.quantity}</p>

                      </div>
        
                    </div>
                  </div>
                  
                </div>
                
              ))}
            </div>
            
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="card mb-4 flex-fill">
              <div className="card-header">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>₹{shippingCost.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tax</span>
                  <span>₹{tax.toFixed(2)} (5% GST)</span>
                </div>
                <div className="d-flex justify-content-between font-weight-bold">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-outline-dark" onClick={ordeconfiramtion}>Process to payment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Customer</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" className="me-3" width="40" height="40" />
                <div>
                  <p className="mb-0 font-weight-bold">Pankaj Gupta</p>
                  <p className="text-muted mb-0">10 Previous Orders</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-envelope me-3"></i>
                <span className="text-muted">david89@gmail.com</span>
              </div>
              <div className="mb-4">
                <h6 className="mb-3">Shipping Address</h6>
                <p className="text-muted">123 Main St,Apt 1 front of 4th Floor,452001,India</p>
              </div>
              <div className="mb-4">
                <h6 className="mb-3">Billing Address</h6>
                <p className="text-muted">123, MG Road,Near Central Mall,Gwalior,476115,India</p>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark" onClick={ChangeAdress}>Change Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
