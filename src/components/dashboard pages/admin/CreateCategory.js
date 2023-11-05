import React from 'react'
import AdminMenu from './AdminMenu'

const CreateCategory = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9 ps-5 pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <span>Create Category</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
