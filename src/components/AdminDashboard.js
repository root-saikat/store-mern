import React from 'react'
import AdminMenu from './dashboard pages/admin/AdminMenu'
import { useAuth } from '../context/auth';

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ps-5 pt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card p-3">
                  <h3>Name: {auth?.user?.name}</h3>
                  <h3>Email: {auth?.user?.email}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
