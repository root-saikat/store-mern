import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminMenu = () => {

  const location = useLocation();

  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <Link to="/dashboard/admin/create-category" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard/admin/create-category' ? 'active' : ''
            }`}>Create Category</Link>
          <Link to="/dashboard/admin/create-brand" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard/admin/create-brand' ? 'active' : ''
            }`}>Create Brand</Link>
          <Link to="/dashboard/admin/create-product" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard/admin/create-product' ? 'active' : ''
            }`}>Create Product</Link>
          <Link to="/dashboard/admin/all-products" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard/admin/all-products' ? 'active' : ''
            }`}>View All Products</Link>
          <Link to="/dashboard/admin/users" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard/admin/users' ? 'active' : ''
            }`}>Users</Link>
        </div>
      </div>
    </>
  )
}

export default AdminMenu
