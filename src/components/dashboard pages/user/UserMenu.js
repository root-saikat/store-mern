import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <h4>Dashboard</h4>
        <div className="list-group">
          <Link to="/dashboard/user/user-profile" className="list-group-item">Profile</Link>
          <Link to="/dashboard/user/orders" className="list-group-item">Orders</Link>
        </div>
      </div>
    </>
  )
}

export default UserMenu
