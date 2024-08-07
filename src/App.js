import React from 'react';
import {  Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CategoriesPage from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UserAccount from './pages/UserAccount';
import Header from './components/Header';
import Address from './pages/Adress';
import OrderPage from './pages/OrderPage';
import OrderDetails from './pages/orderDetails';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const isAuthenticated = () => !!localStorage.getItem('user');
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated() ? <Homepage /> : <Navigate to="/signup" />} />
        <Route path="/category" element={isAuthenticated() ? <CategoriesPage /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={isAuthenticated() ? <ProductDetails /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated() ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={isAuthenticated() ? <Checkout /> : <Navigate to="/login" />} />
        <Route path="/order" element={isAuthenticated() ? <OrderPage /> : <Navigate to="/login" />} />
        <Route path="/address" element={isAuthenticated() ? <Address /> : <Navigate to="/login" />} />
        <Route path="/account" element={isAuthenticated() ? <UserAccount /> : <Navigate to="/login" />} />
        <Route path="/orderDetails" element={isAuthenticated() ? <OrderDetails /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
