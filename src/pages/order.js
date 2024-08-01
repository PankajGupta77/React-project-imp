import React from 'react';
import "./page.css"
const OrderDetails = () => {
  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-start">
        <h1 className="h3">Order #13432</h1>
        <p className="text-muted">21st March 2024 at 10:34 PM</p>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-xl-8 mb-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Customer’s Cart</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column flex-md-row align-items-start mb-4">
                <div className="w-100 w-md-40 mb-4 mb-md-0">
                  <img
                    className="img-fluids"
                    src="https://rukminim2.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70"
                    alt="dress"
                  />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                    <div className="d-flex flex-column">
                      <h5 className="mb-3">Premium Quality Dress</h5>
                      <p className="mb-1"><strong>Style:</strong> fizz Monster Truck Rock Crawler metal</p>
                      <p className="mb-1"><strong>Size:</strong> Small</p>
                      <p className="mb-1"><strong>Color:</strong> Light Blue</p>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <p className="mb-1">₹36.00 <span className="text-muted text-decoration-line-through">₹45.00</span></p>
                      <p className="mb-1">Quantity: 01</p>
                      <p className="mb-0 font-weight-bold">₹36.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-start">
                <div className="w-100 w-md-40 mb-4 mb-md-0">
                  <img
                    className="img-fluids"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/1/r/x/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imahyh9vssmzggtn.jpeg?q=70"
                    alt="dress"
                  />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="d-flex flex-column">
                      <h5 className="mb-3">High Quality Italic Dress</h5>
                      <p className="mb-1"><strong>Style:</strong> CADDLE & TOES Rock Car Remote Control</p>
                      <p className="mb-1"><strong>Size:</strong> Small</p>
                      <p className="mb-1"><strong>Color:</strong> Light Blue</p>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <p className="mb-1">₹20.00 <span className="text-muted text-decoration-line-through">₹30.00</span></p>
                      <p className="mb-1">Quantity: 01</p>
                      <p className="mb-0 font-weight-bold">₹20.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="card mb-4 flex-fill me-md-3">
              <div className="card-header">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
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
              </div>
            </div>
            <div className="card mb-4 flex-fill ms-md-3">
              <div className="card-header">
                <h5 className="mb-0">Shipping</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="d-flex align-items-start">
                    <img src="https://i.ibb.co/L8KSdNQ/image-3.png" alt="logo" className="me-3" width="40" height="40" />
                    <div>
                      <p className="mb-0"><strong>DPD Delivery</strong></p>
                      <p className="text-muted mb-0">Delivery with 24 Hours</p>
                    </div>
                  </div>
                  <span>₹8.00</span>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-dark">View Carrier Details</button>
                </div>
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
                <p className="text-muted">180 North King Street, Northhampton MA 1060</p>
              </div>
              <div className="mb-4">
                <h6 className="mb-3">Billing Address</h6>
                <p className="text-muted">180 North King Street, Northhampton MA 1060</p>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark">Edit Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
