// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LatestCollection from "./components/LatestCollection";
import NewArrivalsPage from "./pages/NewArrivalsPage"

function App() {
  return (
    <div >
      
      
        <Navbar />
      

      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<LatestCollection />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App