import React from 'react'
import Navbar from './navbar'
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default page