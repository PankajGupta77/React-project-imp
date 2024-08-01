import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CategoriesPage from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UserAccount from './pages/UserAccount';
import Header from './components/Header';
// import OrderDetails from './pages/order';
import Address from './pages/Adress';
import OrderPage from './pages/OrderPage';
import OrderDetilas from './pages/orderDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/orderDetails" element={<OrderDetilas />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
