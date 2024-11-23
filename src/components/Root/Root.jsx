import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function Root() {

  return (
    
    <div className=' bg-gray-300'>
      <Helmet>
        <title>Gadget || Gadget Heaven</title>
      </Helmet>
       <div className='max-w-screen-lg mx-auto'>
       <div className='sticky top-0 z-10  '>
          <Navbar></Navbar>
        </div>
        <div className='min-h-screen'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
       </div>
    </div>
  )
}
