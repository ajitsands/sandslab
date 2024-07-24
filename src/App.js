import React from 'react'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Home from "./pages/Home"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header  from './components/Header'
import Footer from './components/Footer'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser' // Import the new component
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/ContactUS' element={<Contact />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/AddUser' element={<AddUser />} />
            <Route path='/UpdateUser' element={<UpdateUser />} />
          </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App