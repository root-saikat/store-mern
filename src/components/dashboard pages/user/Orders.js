import React from 'react'
import UserMenu from './UserMenu'

const Orders = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9 ps-5 pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <span>Orders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
