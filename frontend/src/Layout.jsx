import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='h-16'></div>
      <div className='py-10 px-4 md:px-48 flex flex-col gap-y-10' >
        {/* <Header /> */}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
