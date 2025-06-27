import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './pages/AddBlog'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<AddBlog />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
