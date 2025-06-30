import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './pages/AddBlog'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/AddProduct';
import Navbar from './layout/Navbar';
import SubscriptionsForm from './pages/SubscriptionForm';
import ContactForm from './pages/ContactForm';
import AddTestimonial from './pages/AddTestimonial';


function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<AddBlog />} />
        <Route path='/admin/add-product' element={<AddProduct />}/>
        <Route path='/admin/subscription-form' element={<SubscriptionsForm />}/>
        <Route path='/admin/contact-form' element={<ContactForm />}/>
        <Route path='/admin/add-testimonial' element={<AddTestimonial />}/>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
