import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const LayoutOne = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />

    </>
  )
}

export default LayoutOne