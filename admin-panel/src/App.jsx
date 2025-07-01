import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddBlog from './pages/AddBlog';
import AddProduct from './pages/AddProduct';
import Navbar from './layout/Navbar';
import SubscriptionsForm from './pages/SubscriptionForm';
import ContactForm from './pages/ContactForm';
import AddTestimonial from './pages/AddTestimonial';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
// import Home from './pages/Home';

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/"].includes(location.pathname);

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />

        {/* Redirect old paths to /admin/* (optional support for older bookmarks) */}
        {/* <Route path="/home" element={<Navigate to="/admin/home" replace />} /> */}
        <Route path="/add-blog" element={<Navigate to="/admin/add-blog" replace />} />
        <Route path="/add-product" element={<Navigate to="/admin/add-product" replace />} />
        <Route path="/subscription-form" element={<Navigate to="/admin/subscription-form" replace />} />
        <Route path="/contact-form" element={<Navigate to="/admin/contact-form" replace />} />
        <Route path="/add-testimonial" element={<Navigate to="/admin/add-testimonial" replace />} />

        {/* Protected Admin Routes */}
        {/* <Route
          path="/admin/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/admin/add-blog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/subscription-form"
          element={
            <PrivateRoute>
              <SubscriptionsForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/contact-form"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-testimonial"
          element={
            <PrivateRoute>
              <AddTestimonial />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
