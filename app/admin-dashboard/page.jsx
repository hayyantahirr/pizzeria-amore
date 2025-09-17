"use client";

import React, { useState } from 'react'

import AdminDash from '@/Components/AdminDash';

const Admin = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <><AdminDash/></>
  )
}

export default Admin