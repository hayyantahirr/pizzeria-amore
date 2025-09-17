"use client";

import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNav from './AdminNav'
import AdminOrderList from './AdminOrderList'
import AdminMenuItems from './AdminMenuItems'

const AdminDash = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'orders':
        return <AdminOrderList />;
      case 'menu':
        return <AdminMenuItems />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <p>Welcome to the admin dashboard.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setActiveComponent={setActiveComponent} 
        activeComponent={activeComponent}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNav toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto">
          {renderComponent()}
        </main>
      </div>
    </div>
  )
}

export default AdminDash