import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function Layout() {
  return (
    <div className='py-10 px-4 md:px-48 flex flex-col gap-y-10' >
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
