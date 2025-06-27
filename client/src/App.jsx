import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar.jsx'
import Footer from './layout/Footer.jsx'
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import BlogList from './component/BlogList.jsx';
import BlogDetails from './component/BlogDetails.jsx';
import Product from './pages/Product.jsx';
import ProductList from './component/ProductList.jsx';
import ProductDetails from './component/ProductDetails.jsx';


function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bloglist' element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path='/product' element={<Product />}/>
        <Route path='/productlist' element={<ProductList />}/>
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>

  )
}

export default App
